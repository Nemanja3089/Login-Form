
Cypress.addParentCommand("signUp", function(){

  var USERNAME   = "NikolaCar"
  var EMAIL   = "nikola@car.com"
  var PASSWORD = "nikolacar"
  var PASSWORD_CONFIRMATION = "nikolacar"
  var cmd = Cypress.Log.command({
    name: "fill the form",
    message: [],
    onConsole: function(){
      return {
        "Inserted values": [USERNAME ,EMAIL, PASSWORD, PASSWORD_CONFIRMATION]
      }
    }
  })

  cy
    .chain()
    .get('input[type="text"]:first', {log: false})
      .type(USERNAME , {log: false})
    .get('input[type="text"]:last', {log: false})
      .type(EMAIL , {log: false})
    .get('input[type="password"]:first', {log: false})
      .type(PASSWORD , {log: false})
    .get('input[type="password"]:last', {log: false})
      .type(PASSWORD_CONFIRMATION , {log: false})
    .get('select').select('(GMT-11:00) Pago Pago')
    .end()

})

Cypress.addParentCommand("login", function(){

  var USERNAME   = "Nemanja"
  var PASSWORD = "nemanja"
  var cmd = Cypress.Log.command({
    name: "fill the login form",
    message: [],
    onConsole: function(){
      return {
        "Inserted values": [ USERNAME , PASSWORD ]
      }
    }
  })
  cy
    .chain()
    .get('input[type="text"]', {log: false})
      .type(USERNAME , {log: false})
    .get('input[type="password"]', {log: false})
      .type(PASSWORD , {log: false})
      .type('{enter}')
    .end()
})

Cypress.addParentCommand('loginByCSRF', (csrfToken) => {
    cy
      .chain()
      .request({
        method: 'POST',
        url: '/api/auth',
        body: {
          identifier: 'Nemanja',
          password: 'nemanja',
          _csrf: csrfToken
        }
      })
  })
