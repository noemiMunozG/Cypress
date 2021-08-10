/// <reference types="cypress" />

describe('Test Suite Name', function() {
    it('Alert', function() {
        cy.visit('https://www.seleniumeasy.com/test/javascript-alert-box-demo.html')

        //identify a dropdown, then select an element from the dropdown, then validate the value of the element
        cy.get('button[onclick="myConfirmFunction()"]').click()

        //cypress automatically acept the accion on the alert, to catch that alert string we need a function

        //this is for alerts that just have Accept button
        /*cy.on('window:alert', (str) => {
            expect(str).to.equal('Press a button!') //check if the string from the alert is equal to the string inside the parenteses
        })*/

        //this is for alerts that  ave Accept and Cancel buttons
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Press a button!') //check if the string from the alert is equal to the string inside the parenteses
        })
    })
})