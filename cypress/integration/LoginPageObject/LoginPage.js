/// <reference types="cypress" />

class LoginPage {
    fillEmail(value) {
        const field = cy.get('[id=email-input]')
        field.clear()
        field.type(value)
        return this
    }

    fillPassword(value) {
        const field = cy.get('[id=password-input]')
        field.clear()
        field.type(value)
        return this
    }

    submit() {
        const button = cy.get('button[type=submit]')
        button.click()
    }
}

export default LoginPage