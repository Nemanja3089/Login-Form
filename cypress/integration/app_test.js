describe("Tests",function(){

  beforeEach(function(){
    cy.visit('/')
  })

  it("Has a correct title",function(){
   cy
    .visit('/')
    .title().should("eq", "Red Dice")
  })

  it("It has all needed links",function(){
    cy
    .get('.navbar-brand').should('contain', 'Red Dice')
    .get('ul li:first').should('contain', 'Sign up')
    .get('ul li:last').should('contain', 'Login')

    .get('.jumbotron').get('h1').should('contain','Hi!').and('have.length', '1')
    .get('ul li:first').not('[disabled]')
    .get('ul li:last').not('[disabled]')
    .get('.navbar-collapse').click().should('be.visible')
  })
  it("Location and links",function(){
    cy.location().then(function(location){
     expect(location.hash).to.be.empty
     expect(location.href).to.eq('http://localhost:3000/')
     expect(location.host).to.eq('localhost:3000')
     expect(location.hostname).to.eq('localhost')
     expect(location.origin).to.eq('http://localhost:3000')
     expect(location.port).to.eq('3000')
     expect(location.protocol).to.eq('http:')
     expect(location.search).to.be.empty
})
   cy
   .hash().should('be.empty')

   .get('.navbar-brand').click().url().should('eq', 'http://localhost:3000/')
   .get('ul li:first').click().url().should('eq', 'http://localhost:3000/signup')

   .go('back').url().should('eq', 'http://localhost:3000/')
   .go('forward').location().its('pathname').should('include', 'signup')

   .go(-1).location().its('pathname').should('not.include', 'signup')
   .go(1)
   .reload(true).url().should('eq', 'http://localhost:3000/signup')
  })
  it("Checking the assertions of classes",function(){
    cy
    .visit('http://localhost:3000/signup')
    // .get('ul li:first').click()
    .get('.form-group:first').should('contain','Username')
    .find('label').should('have.class', 'control-label')

    .get('.form-group:first').should('contain','Username')
    .find('input').should('have.class', 'form-control')

    .get('.btn-lg').should('contain', 'Sign up').not('[disabled]')

    .get('.form-group:first').should('contain','Username').next()
    .find('label').should('have.class', 'control-label')
    .should('contain','Email')

    .get('.form-group:first').next().next()
    .find('label').should('have.class', 'control-label')
    .should('contain','Password')

    .get('.form-group:last').prev().prev()
    .find('label').should('have.class', 'control-label')
    .should('contain','Password Confirmation')

    .get('.form-group:last').prev()
    .find('label').should('have.class', 'control-label')
    .should('contain','Timezone')

    .get('.form-group:last').prev()
    .find('select').should('contain', 'Choose Your Timezone')
  })

  it("Making some actions",function(){
    cy
    .visit('http://localhost:3000/signup')

    .get('input:first').type('nemanja')
    .should('have.value', 'nemanja')

    .type('{leftarrow}{rightarrow}{uparrow}{downarrow}{del}{selectall}{backspace}')
    .should('have.value', '')

    .type('slow.nemanja', {delay: 100})
    .should('have.value', 'slow.nemanja').clear()
    .should('have.value', '')

    .get('form')
    .find('input:first').type('HALFOFF')

    .get('form').submit()
    .find('.help-block').should('contain', 'This field is required').end()

    .get('.btn-lg').click()

    // .get('input:first').type('Some username').type('{enter}').should('not.to.be.empty')
    // .contains('Some username')
    // This is not work some error is happend!!!

    .get('input:first').type('Some username').type('{enter}')

    .get('ul li:last').click().url().should('eq', 'http://localhost:3000/login')

  })
  it("Making more bad actions", function(){
    cy
    .visit('signup')
    .get('form').submit()
    .find('span').should('have.class', 'help-block')
    .and('contain', 'This field')
    .reload()
    .get('form').signUp()
  })
  it("Login and logout",function(){
   cy
    .visit('login').login().url().should('eq','http://localhost:3000/')
    .get('a').should('contain','Logout')
    .get('a:last').click()
    .get('a').should('not.contain','Logout')
})
  it.only("XHR in login page")

})
