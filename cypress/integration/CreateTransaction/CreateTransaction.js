/// <reference types="cypress" />

describe('Crear Transacción', () => {
    let user = null
    const price = 5000
    const emailNewClient = 'noemi+c01@agavelab.com'
    const emailClient = 'noemi+w02@agavelab.com'

    before(() => {
        cy.login()
        cy.visitSite()
        cy.saveLocalStorage();
    })

    beforeEach(() => {
        cy.restoreLocalStorage();
      });
      
      afterEach(() => {
        cy.saveLocalStorage();
      });

    it('Poder crear transaccion', function() {
        cy.get('button.button_btn__1MDcm').click()
        cy.title().should('eq', 'WaloPay - Crear Transacción')
        cy.get('h4.styles_form__title__td1JA').contains('Crear transacción')
    })

    it.skip('Paso 1 - Vendedor', function() {
        const sellerCheck = cy.get('input[value=SELLER]').should('not.be.checked')
        const buyerCheck = cy.get('input[value=BUYER]').should('not.be.checked')
        cy.get('label#label-undefined').first().click()
        sellerCheck.get('input[value=SELLER]').should('be.checked')
        buyerCheck.get('input[value=BUYER]').should('not.be.checked')
        user = "seller"
    })

    it('Paso 1 - Comprador', function() {
        const sellerCheck = cy.get('input[value=SELLER]').should('not.be.checked')
        const buyerCheck = cy.get('input[value=BUYER]').should('not.be.checked')
        cy.get('label#label-undefined').last().click()
        sellerCheck.get('input[value=SELLER]').should('not.be.checked')
        buyerCheck.get('input[value=BUYER]').should('be.checked')
        user = "buyer"
    })

    it('Paso 1 - Producto', function() {
        const productInput = cy.get('input#product-input')
        productInput.click().type("Nombre del producto")
    })

    it('Paso 1 - Precio', function() {
        const productInput = cy.get('input#price-input')
        productInput.clear()
        productInput.click().type(price)
    })

    it('Paso 1 - Continuar', function() {
        cy.get('[type=button]').last().click()
        cy.get('h4.styles_form__title__td1JA').contains('Modelo de pago')
    })

    //------------------------------

    it('Paso 2 - Seleccionar modelo de pago - Vendedor', function() {
        const sellerCheck = cy.get('input[value=SELLER]').should('not.be.checked')
        const buyerCheck = cy.get('input[value=BUYER]').should('not.be.checked')
        const bothCheck = cy.get('input[value=BOTH]').should('not.be.checked')
        cy.get('label#label-undefined').first().click()
        sellerCheck.get('input[value=SELLER]').should('be.checked')
        buyerCheck.get('input[value=BUYER]').should('not.be.checked')
        buyerCheck.get('input[value=BOTH]').should('not.be.checked')
    })

    it.skip('Paso 2 - Seleccionar modelo de pago - Comprador', function() {
        const sellerCheck = cy.get('input[value=SELLER]').should('not.be.checked')
        const buyerCheck = cy.get('input[value=BUYER]').should('not.be.checked')
        const bothCheck = cy.get('input[value=BOTH]').should('not.be.checked')
        cy.get('label#label-undefined').eq(1).click()
        sellerCheck.get('input[value=SELLER]').should('not.be.checked')
        buyerCheck.get('input[value=BUYER]').should('be.checked')
        buyerCheck.get('input[value=BOTH]').should('not.be.checked')
    })

    it.skip('Paso 2 - Seleccionar modelo de pago - Ambos', function() {
        const sellerCheck = cy.get('input[value=SELLER]').should('not.be.checked')
        const buyerCheck = cy.get('input[value=BUYER]').should('not.be.checked')
        const bothCheck = cy.get('input[value=BOTH]').should('not.be.checked')
        cy.get('label#label-undefined').last().click()
        sellerCheck.get('input[value=SELLER]').should('not.be.checked')
        buyerCheck.get('input[value=BUYER]').should('not.be.checked')
        buyerCheck.get('input[value=BOTH]').should('be.checked')
    })

    it('Paso 2 - Continuar', function() {
        cy.get('[type=button]').last().click()

        if (user === "seller") {
            cy.get('h4.styles_form__title__td1JA').contains('Invitar comprador')
        } else {
            cy.get('h4.styles_form__title__td1JA').contains('Invitar vendedor')
        }
    })

    //------------------------------

    it('Paso 3 - Invitar contraparte - sin mensaje - usuario existente', function() {
        cy.get('input#email-input').click().type(emailClient)
        cy.get('textarea[name=message]').clear()
        cy.get('[type=button]').last().click()

        cy.get('h4.styles_form__title__td1JA').contains('Resumen de la transacción')
    })

    it.skip('Paso 3 - Invitar contraparte - sin mensaje - usuario nuevo', function() {
        cy.get('input#email-input').click().type(emailNewClient)
        cy.get('textarea[name=message]').clear()
        cy.get('[type=button]').last().click()

        cy.get('h4.styles_form__title__td1JA').contains('Resumen de la transacción')
    })

    it.skip('Paso 3 - Invitar contraparte - con mensaje - usuario existente', function() {
        cy.get('input#email-input').click().type(emailClient)
        cy.get('textarea[name=message]').clear().type('Test de mensaje para la contraparte')
        cy.get('[type=button]').last().click()

        cy.get('h4.styles_form__title__td1JA').contains('Resumen de la transacción')
    })

    it.skip('Paso 3 - Invitar contraparte - con mensaje - usuario nuevo', function() {
        cy.get('input#email-input').click().type(emailNewClient)
        cy.get('textarea[name=message]').clear().type('Test de mensaje para la contraparte')
        cy.get('[type=button]').last().click()

        cy.get('h4.styles_form__title__td1JA').contains('Resumen de la transacción')
    })

    //------------------------------

    it('Paso 3 - summary', function() {
        if (user === "seller") {
            cy.get('p.styles_form__data__2TLBc').first().contains('Vendedor')
            cy.get('p:nth-child(4)').eq(1).contains('Estás vendiendo')
        } else {
            cy.get('p.styles_form__data__2TLBc').first().contains('Comprador')
            cy.get('p:nth-child(4)').contains('Estás comprando')
        }


        cy.get('p.styles_form__data__2TLBc').eq(2).invoke('text').then((thePrice) => {
            let trimedPrice = thePrice.replace('$', "").replace(',', "")
            cy.log(thePrice)
            thePrice.contains(price)
        })

        //text.replace('$', "").replace(',', "")
        //cy.log(text)

        //cy.get('p.styles_form__data__2TLBc').contains(price)
        //cy.get('p.styles_form__data__2TLBc').eq(4).contains(emailNewClient || emailClient)

        //cy.get('[type=button]').last().click()
    })
})