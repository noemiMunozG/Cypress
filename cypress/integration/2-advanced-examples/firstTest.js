describe('My Test Suite', () => {
    it('Verify Title Of The Page - Positive', () => {
        cy.visit('https://staging.app.walopay.com/')
        cy.title().should('eq','Walopay - Login')
    })

    it('Verify Title Of The Page - Negative', () => {
        cy.visit('https://staging.app.walopay.com/')
        cy.title().should('eq','Walopay')
      
    })
})