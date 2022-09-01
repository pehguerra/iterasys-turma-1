import LoginPage from '../../pageObjects/LoginPage'

describe('cabeçalho home page', { tags: '@regressao' }, () => {

    const validarMenu = (seletor, link, nome) => {
        cy.getElement(seletor)
            .should('have.attr', 'href', link)
            .and('not.have.attr', 'target', '_blank')
            .and('have.text', nome)
    }
    
    context('não logado', () => {
        
        beforeEach(() => {
            cy.visit('/')
        })

        // DRY - Don't Repeat Yourself
        it('valida o cabeçalho da area não logada', () => {
            
            // ConexãoQA
            cy.getElement('navbar-conexaoQA')
                .should('have.attr', 'href', '/')
                .and('not.have.attr', 'target', '_blank')

            // QAs
            cy.getElement('navbar-QAs')
                .should('have.attr', 'href', '/perfis')
                .and('not.have.attr', 'target', '_blank')

            // Sobre
            cy.getElement('navbar-about')
                .should('have.attr', 'href', '/sobre')
                .and('not.have.attr', 'target', '_blank')

            // Cadastrar
            cy.getElement('navbar-register')
                .should('have.attr', 'href', '/cadastrar')
                .and('not.have.attr', 'target', '_blank')

            // Login
            cy.getElement('navbar-login')
                .should('have.attr', 'href', '/login')
                .and('not.have.attr', 'target', '_blank')
        })

        it('valida o cabeçalho na area não logada com JSON', () => {
        
            const menus = [
                { seletor: 'navbar-conexaoQA', link: '/' },
                { seletor: 'navbar-QAs', link: '/perfis' },
                { seletor: 'navbar-about', link: '/sobre' },
                { seletor: 'navbar-register', link: '/cadastrar' },
                { seletor: 'navbar-login', link: '/login' },
            ]
    
            menus.forEach(({ seletor, link }) => {
    
                cy.getElement(seletor)
                    .should('have.attr', 'href', link)
                    .and('not.have.attr', 'target', '_blank')
            })
        })
        
        ;[
            { seletor: 'navbar-conexaoQA', link: '/', nome: ' ConexãoQA' },
            { seletor: 'navbar-QAs', link: '/perfis', nome: 'QAs' },
            { seletor: 'navbar-about', link: '/sobre', nome: 'Sobre' },
            { seletor: 'navbar-register', link: '/cadastrar', nome: 'Cadastrar' },
            { seletor: 'navbar-login', link: '/login', nome: 'Login' },
        ].forEach(({ seletor, link, nome }) => {
    
            it(`valida o menu ${nome} - Teste Dinamico`, () => {
                
                validarMenu(seletor, link, nome)
            })
        })
    })

    context('logado', () => {
        
        before(() => {

            const login = new LoginPage()

            login.visitar()
            login.preencherEmail(Cypress.env('email'))
            login.preencherSenha(Cypress.env('password'))
            login.submeter()
        })

        // teste dinâmico
        ;[
            { seletor: 'navbar-conexaoQA', link: '/', nome: ' ConexãoQA' },
            { seletor: 'navbar-QAs', link: '/perfis', nome: 'QAs' },
            { seletor: 'navbar-posts', link: '/posts', nome: 'Posts' },
            { seletor: 'navbar-dashboard', link: '/dashboard', nome: ' Dashboard' },
            { seletor: 'navbar-about', link: '/sobre', nome: 'Sobre' },
            { seletor: 'navbar-logout', link: '/', nome: ' Sair' },
        ].forEach(({ seletor, link, nome }) => {
            it(`valida o menu ${nome} da área logada`, () => {
                validarMenu(seletor, link, nome)
            })
        })
    })
})