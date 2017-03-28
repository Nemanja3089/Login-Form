describe('Logging In - XHR Web Form', () => {

  context('XHR form submission', () => {
    beforeEach(function(){
      cy.visit('/login')
    })

    it('Displays status 401', () => {
      cy
        .server()

        .route('POST', '/api/auth').as('postLogin')

        .get('input:first').type('Nemanja')
        .get('input:last').type('Nemanja{enter}')
        .wait('@postLogin')
        .get('.btn-primary')
        .should('be.disabled')
        .url().should('include', '/login')
    })

    it('Can stub XHR to fail', () => {
      cy
        .server()
        .route({
          method:'POST',
          url:'api/auth',
          status:403,
          response:{}
        }).as('postLogin')

        .get('input:first').type('Nikola')
        .get('input:last').type('Nikola{enter}')
        .wait('@postLogin')
        .its('requestBody').should('exist')
    })

    it('Login to dashboard to success', () => {
      cy
        .server()
        .route({
          method:'POST',
          url:'api/auth',
          status:200
        }).as('postLogin')

        .login()
        .wait('@postLogin')
        .its('responseBody')
        .should('have.property','token')
        .hash().should('deep.eq','')
        .visit('/new-event')
    })

    it('Send cookie property in response body', () => {
      cy
        .server()
        .route({
          method:'POST',
          url:'api/auth',
          status:200,
          response:{
            cookie:'My cookie'
          }
        }).as('postLogin')

        .login()
        .wait('@postLogin')
        .its('responseBody')
        .should('deep.eq', {
          cookie:'My cookie'
        })
    })

    it('Can bypass the UI and yet still log in', () => {
      cy
        .request({
          method: 'POST',
          url: '/api/auth',
          status:200,
          body: {
            identifier: 'Nemanja',
            password: 'nemanja'
          }
        })
        .its('body').should('have.property', 'token')
        .visit('/new-event') // This is error new-event page must be visible
    })

    it('Redirects to new-event page without logging in', () => {
      cy
        .visit('/new-event')
        .get('.alert-danger').should('contain','You need to login to access this page')
        .url().should('include', '/login')
    })

    it('Is redirected by request', () => {
      cy
        .request({
          method: 'GET',
          url: '/new-event'
        })
        .then((resp) => {
          expect(resp.status).to.eq(304) // Error status must be 304
      })
    })
  })
})
