/// <reference types="cypress" />

describe('Test Suite Name', function() {
    it('Navigation', function() {
        cy.visit('https://www.seleniumeasy.com/test/javascript-alert-box-demo.html')
        cy.title().should('eq', 'Selenium Easy Demo - Automate All Scenarios')

        cy.get('[href="/test"]').click() //this redirects to the homepage
        cy.title().should('eq', 'Selenium Easy - Best Demo website to practice Selenium Webdriver Online')
        cy.wait(2000)

        cy.go('back') //returns to the previous page
        cy.title().should('eq', 'Selenium Easy Demo - Automate All Scenarios')
        cy.wait(2000)

        cy.go('forward') //go again to the hompage 
        cy.title().should('eq', 'Selenium Easy - Best Demo website to practice Selenium Webdriver Online')
        cy.wait(2000)

        cy.go(-1) //returns to the previous page
        cy.title().should('eq', 'Selenium Easy Demo - Automate All Scenarios')
        cy.wait(2000)

        cy.go(1) //go again to the hompage 
        cy.title().should('eq', 'Selenium Easy - Best Demo website to practice Selenium Webdriver Online')
        cy.wait(2000)

        cy.reload()
    })
})