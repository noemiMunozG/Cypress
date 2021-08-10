/// <reference types="cypress" />

describe('Test Suite Name', function() {
    it('Table test', function() {
        cy.visit('https://www.w3schools.com/html/html_tables.asp')

        // 1) Check value precense anywhere in the table 
        cy.get('#customers').contains('td','Alfreds Futterkiste').should('be.visible')

        // 2) Check value precense in a specific row and column
        cy.get('#customers > tbody > tr:nth-child(3) > td:nth-child(3)').contains('Mexico').should('be.visible')

        // 3) Check for a value in all the cells of a column
        cy.get('#customers > tbody > tr td:nth-child(2)').each(($e, index, $list) => {
            const text= $e.text()
            if(text.includes("Yoshi Tannamuri")){
                cy.get('#customers > tbody > tr td:nth-child(3)').eq(index).then(function(country){
                    const Country = country.text()
                    expect(Country).to.equal("Canada")
                })
            }
        })
    })
})