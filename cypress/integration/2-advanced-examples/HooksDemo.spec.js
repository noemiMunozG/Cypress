/// <reference types="cypress" />

 describe('Hooks', () => {
    before(() => {
        cy.log('************ This SETUP block ************')
    })
      
    beforeEach(() => {
        cy.log('************ This LOGIN block ************')
    })
      
    afterEach(() => {
        cy.log('************ This LOG OUT block ************')
    })
      
    after(() => {
        cy.log('************ This TEAR DOWN block ************')
    })

    it('Searching', function() {
        cy.log('************ This is searching test ************')
    })

    it('Advanced searching', function() {
        cy.log('************ This is sAdvanced earching test ************')
    })

    it('Listing products', function() {
        cy.log('************ This is Listing products test ************')
    })
})