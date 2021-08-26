/// <reference types="cypress" />

describe('Crear Transacción', () => {
    let user = null
    const price = '3500.76'
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

    it('Paso 1 - Vendedor', function() {
        const sellerCheck = cy.get('input[value=SELLER]').should('not.be.checked')
        const buyerCheck = cy.get('input[value=BUYER]').should('not.be.checked')
        cy.get('#label-seller').click()
        sellerCheck.get('input[value=SELLER]').should('be.checked')
        buyerCheck.get('input[value=BUYER]').should('not.be.checked')
        user = "seller"
    })

    it.skip('Paso 1 - Comprador', function() {
        const sellerCheck = cy.get('input[value=SELLER]').should('not.be.checked')
        const buyerCheck = cy.get('input[value=BUYER]').should('not.be.checked')
        cy.get('label-buyer').click()
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

    it('Paso 1 - Comision', function() {
        cy.getFee(price).then((fee) => {
            cy.log(fee)
        })
    })

    it('Paso 1 - Continuar', function() {
        cy.get('[type=button]').last().click()
        cy.get('h4.styles_form__title__td1JA').contains('Modelo de pago')
    })

    //------------------------------

    it.skip('Paso 2 - Seleccionar modelo de pago - Vendedor', function() {
        const sellerCheck = cy.get('#seller').should('not.be.checked')
        const buyerCheck = cy.get('#buyer').should('not.be.checked')
        const bothCheck = cy.get('#both').should('not.be.checked')
        cy.get('#label-seller').click()
        sellerCheck.get('#seller').should('be.checked')
        buyerCheck.get('#buyer').should('not.be.checked')
        buyerCheck.get('#both').should('not.be.checked')
    })

    it.skip('Paso 2 - Seleccionar modelo de pago - Comprador', function() {
        const sellerCheck = cy.get('#seller').should('not.be.checked')
        const buyerCheck = cy.get('#buyer').should('not.be.checked')
        const bothCheck = cy.get('#both').should('not.be.checked')
        cy.get('#label-buyer').click()
        sellerCheck.get('#seller').should('not.be.checked')
        buyerCheck.get('#buyer').should('be.checked')
        buyerCheck.get('#both').should('not.be.checked')
    })

    it('Paso 2 - Seleccionar modelo de pago - Ambos', function() {
        const sellerCheck = cy.get('#seller').should('not.be.checked')
        const buyerCheck = cy.get('#buyer').should('not.be.checked')
        const bothCheck = cy.get('#both').should('not.be.checked')
        cy.get('#label-both').click()
        sellerCheck.get('#seller').should('not.be.checked')
        buyerCheck.get('#buyer').should('not.be.checked')
        buyerCheck.get('#both').should('be.checked')
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

    it.skip('Paso 3 - Invitar contraparte - sin mensaje - usuario existente', function() {
        cy.get('input#email-input').click().type(emailClient)
        cy.get('textarea[name=message]').clear()
        cy.get('[type=button]').last().click()

        cy.get('h4.styles_form__title__td1JA').contains('Resumen de la transacción')
    })

    it('Paso 3 - Invitar contraparte - sin mensaje - usuario nuevo', function() {
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
            cy.log(trimedPrice)
            expect(trimedPrice).contains(price)
        })

        cy.get('p.styles_form__data__2TLBc').eq(4).each(x => {
            expect(x.text()).to.be.oneOf([
                emailNewClient,
                emailClient
            ])
          })

        //cy.get('[type=button]').last().click()
    })
})