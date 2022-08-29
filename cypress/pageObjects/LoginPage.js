class LoginPage {

    visitar() {
        cy.visit('/login')
    }

    preencherEmail(valor) {
        cy.getElement('login-email')
            .type(valor)
    }

    preencherSenha(valor) {
        cy.getElement('login-password')
            .type(valor)
    }

    submeter() {
        cy.getElement('login-submit')
            .click()
    }
}

export default LoginPage