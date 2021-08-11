/// <reference types="cypress" />

describe('Crear Transacción', () => {
    before(() => {
        cy.visitSite()

        cy.login()
    })

    it('Poder crear tranasaccion', function() {
        cy.get('button.button_btn__1MDcm').click()
        cy.contains('Paso 1')
    })

    it('Paso 1 - Vendedor', function() {
        const sellerCheck = cy.get('input[value=SELLER]').should('not.be.checked')
        const buyerCheck = cy.get('input[value=BUYER]').should('not.be.checked')
        cy.get('label#label-undefined').first().click()
        sellerCheck.get('input[value=SELLER]').should('be.checked')
        buyerCheck.get('input[value=BUYER]').should('not.be.checked')
    })

    it.skip('Paso 1 - Comprador', function() {
        const sellerCheck = cy.get('input[value=SELLER]').should('not.be.checked')
        const buyerCheck = cy.get('input[value=BUYER]').should('not.be.checked')
        cy.get('label#label-undefined').last().click()
        sellerCheck.get('input[value=SELLER]').should('not.be.checked')
        buyerCheck.get('input[value=BUYER]').should('be.checked')
    })

    it('Paso 1 - Producto', function() {
        const productInput = cy.get('input#product-input')
        productInput.click().type("Nombre del producto")
    })

    it('Paso 1 - Precio', function() {
        const productInput = cy.get('input#price-input')
        productInput.clear()
        productInput.click().type("500")
    })

    it('Paso 1 - Continuar', function() {
        cy.get('[type=button]').last().click()
    })
})