/// <reference types="cypress" />

describe('Custom suite', () => {
    it('Login test', function() {
        cy.login('admin@yourstore.com', 'admin')
        //cy.title().should('be.equal', 'Dashboard')
    })

    it('Add test', function() {
        cy.login('user@yoursetore.com', 'admin')

        cy.log('Adding customer............')
    })

    it('Edit test', function() {
        cy.login('other@yoursetore.com', 'admin')

        cy.log('Editing customer............')
    })
})