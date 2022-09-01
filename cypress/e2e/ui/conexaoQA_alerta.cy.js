
import LoginPage from '../../pageObjects/LoginPage'

describe('alertas', () => {
    
    const login = new LoginPage()

    it('valida o alerta de senha inválida', { tags: 'smoke' }, () => {

        cy.clock()
        
        login.visitar()
        login.preencherEmail('emailinvalido@teste123.com')
        login.preencherSenha('123456')
        login.submeter()

        cy.getElement('alert')
            .should('exist')
            .and('have.text', 'Credenciais inválidas')

        cy.tick(10000)

        cy.getElement('alert')
            .should('not.exist')
    })
})