describe('cabeçalho home page', () => {
    
    beforeEach(() => {
        cy.visit('/')
    })

    context('não logado', () => {
        
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

        it(`valida o menu ${nome}`, () => {
            
            cy.getElement(seletor)
                .should('have.attr', 'href', link)
                .and('not.have.attr', 'target', '_blank')
                .and('have.text', nome)
        })
    })
})