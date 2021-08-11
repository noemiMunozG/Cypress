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


//My custimized command
Cypress.Commands.add('visitSite', () => {
    cy.visit('https://staging.app.walopay.com/')
    cy.title().should('be.equal', 'WaloPay - Login')
})

Cypress.Commands.add('login', () =>{
    const emailField = cy.get('[id=email-input]')
    emailField.clear()
    emailField.type('noemi+w01@agavelab.com')

    const passField = cy.get('[id=password-input]')
    passField.clear()
    passField.type('Password.123')
    
    const button = cy.get('button[type=submit]')
    button.click()
    
    cy.title().should('be.equal', 'WaloPay')
})
