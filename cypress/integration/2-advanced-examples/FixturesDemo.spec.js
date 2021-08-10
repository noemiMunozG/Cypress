/// <reference types="cypress" />

describe('My test suite', () => {
    before(() => {
        cy.fixture('example').then(function(data){
            this.data = data 
        })
    })
    it('Fixtures demo test', function() {
        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')

        cy.get('input[name=Email]').clear().type(this.data.email)
        cy.get('input[name=Password]').type(this.data.password)
        //cy.get('.button-1').click()

    })
})