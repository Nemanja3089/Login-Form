// ***********************************************
// This example commands.js shows you how to
// create the custom command: 'login'.
//
// The commands.js file is a great place to
// modify existing commands and create custom
// commands for use throughout your tests.
//
// You can read more about custom commands here:
// https://on.cypress.io/api/commands
// ***********************************************
//
// Cypress.addParentCommand("login", function(email, password){
//   var email    = email || "joe@example.com"
//   var password = password || "foobar"
//
//   var log = Cypress.Log.command({
//     name: "login",
//     message: [email, password],
//     consoleProps: function(){
//       return {
//         email: email,
//         password: password
//       }
//     }
//   })
//
//   cy
//     .visit("/login", {log: false})
//     .contains("Log In", {log: false})
//     .get("#email", {log: false}).type(email, {log: false})
//     .get("#password", {log: false}).type(password, {log: false})
//     .get("button", {log: false}).click({log: false}) //this should submit the form
//     .get("h1", {log: false}).contains("Dashboard", {log: false}) //we should be on the dashboard now
//     .url({log: false}).should("match", /dashboard/, {log: false})
//     .then(function(){
//       log.snapshot().end()
//     })
// })
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

    // .get(".todo-list li", {log: false})
    // .then(function($listItems){
    //   // once we're done inserting each of the todos
    //   // above we want to return the .todo-list li's
    //   // to allow for further chaining and then
    //   // we want to snapshot the state of the DOM
    //   // and end the command so it goes from that
    //   // 'spinning blue state' to the 'finished state'
    //   cmd.set({$el: $listItems}).snapshot().end()
    // })
})
