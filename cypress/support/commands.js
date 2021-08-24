// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

let LOCAL_STORAGE_MEMORY = {};

//My custimized command
Cypress.Commands.add('visitSite', () => {
    cy.visit('https://staging.app.walopay.com/')
})

Cypress.Commands.add('login', () =>{
    cy.request({
        method: 'POST',
        url: 'https://stagingapi.app.walopay.com/api/v1/graphql', 
        body: {
          operationName: 'login',
          query: 'mutation login($input: LoginInput!) {  login(input: $input) {    token    __typename  }}',
          variables: { input: { email: 'noemi+w02@agavelab.com', password: "Password.123" } }
        }
      })
        .then((response) => {
          console.log('*****************BODY******************', response);
          localStorage.setItem('token', response.body.data.login.token);
        })
})

Cypress.Commands.add("saveLocalStorage", () => {
  Object.keys(localStorage).forEach(key => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
});

Cypress.Commands.add("restoreLocalStorage", () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});

function formatString(text) {
    return text.replace('$', '').replace(',','').trim();
}

Cypress.Commands.add('currency', (selector) => {
      cy.get(selector)
        .invoke('text')
        .then(formatString)
    });
