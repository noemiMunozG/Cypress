/// <reference types="cypress" />

describe('Locating elements', function() {
    it('Verify types of locators', () => {
        cy.visit('https://staging.app.walopay.com/')
        cy.get('#email-input').type("taaaaa") //type an email in the textbox
        cy.wait(2000) //wait 2 seconds
        cy.get('#email-input').clear().type("ea ea ea") //clear the textbox, then type a new email in the textbox

        cy.get('#password-input').type("123") //type a password in the textbox
        
        cy.wait(2000) //wait 2 seconds
        cy.get('[type="submit"]').click() //click on login button
    })
})