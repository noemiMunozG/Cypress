/// <reference types="cypress" />

describe('Test Suite Name', function() {
    it('Skills dropdown', function() {
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.url().should('include','automation') //verify ir url contains "automation" word

        //identify a dropdown, then select an element from the dropdown, then validate the value of the element
        cy.get('#Skills').select('Android').should('have.value','Android')

    })

    it('Languajes dropdown multiselect', function() {
        //identify a dropdown, then select multiple elements from the dropdown
        cy.get('#msdd').click()
        cy.get('.ng-scope').contains('English').click()
        cy.get('.ng-scope').contains('Japanese').click()
        
    })

    it('Select countries sercheable dropdown', function() {
         //force:true hace que el dropdown de arriba que estaba abierto no impida que se pueda hacer clic en este dropdown,
         //si lo quito entonces marcará un error diciendo que este dropdown está siendo cubierto pot otro
        cy.get('[role=combobox]').click({force:true})
        cy.get('.select2-search__field').type('Ind')

        //las {} indican que se va a presionar la tecla que esté escrita dentro
        cy.get('.select2-search__field').type('{enter}')
    })
})