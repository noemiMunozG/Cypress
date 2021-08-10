/// <reference types="cypress" />

import LoginPage from '../PageObjects/LoginPage'

describe('Login test suite', () => {
    before(() => {
        cy.visitSite()

        cy.fixture('usersData').then(function(data){
            this.data = data 
        })
    })

    it('Login', function() {
        const login = new LoginPage()

        login.fillEmail(this.data.email)
        login.fillPassword(this.data.password)
        login.submit()

        cy.title().should('be.equal', 'WaloPay')
    })
})