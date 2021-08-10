/// <reference types="cypress" />

describe('Test Suite Name', function() {
    it('Verify check boxes', function() {
        cy.visit('https://www.w3.org/TR/wai-aria-practices-1.1/examples/checkbox/checkbox-2/checkbox-2.html')
        cy.url().should('include','w3') //verify ir url contains "w3" word

        // cy.get('#cond2').check().should('be.checked').and('have.value','Tomato') //use this in case the check box has a value

        // Check the checkbox and verify if it is checked
        cy.get('#cond1').check().should('be.checked')
        cy.get('#cond2').check().should('be.checked')
        cy.get('#cond3').check().should('be.checked')
        cy.get('#cond4').check().should('be.checked')

        // Uncheck the checkbox and verify it is not checked
        cy.get('#cond1').uncheck().should('not.be.checked')
        cy.get('#cond2').uncheck().should('not.be.checked')
        cy.get('#cond3').uncheck().should('not.be.checked')
        cy.get('#cond4').uncheck().should('not.be.checked')

        // cy.get('input[type="checkbox"]').check(['value 1', 'value 2', 'value N']) // Use this if the checkboxes have a "value" attribute
    })
})