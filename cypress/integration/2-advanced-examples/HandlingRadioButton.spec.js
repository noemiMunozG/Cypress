/// <reference types="cypress" />

describe('Test Suite Name', function() {
    it('Verify inputbox and radio buttons', function() {
        cy.visit('https://www.keynotesupport.com/internet/web-contact-form-example-radio-buttons.shtml')
        cy.url().should('include','keynotesupport') //verify ir url contains "keynotesupport" word

        cy.get('input[value=Excel]').should('be.visible').should('not.be.checked').click() //visibility and not checked
        cy.get('input[value=QBP]').should('be.visible').should('not.be.checked') //visibility and not checked
        cy.get('input[value=Peachtree]').should('be.visible').should('not.be.checked') //visibility and not checked
        cy.get('input[value=Photoshop]').should('be.visible').should('not.be.checked') //visibility and not checked
    })
})