describe('Valida a página de QAs', () => {

    context('espera sem intercept', () => {
        beforeEach(() => {
        
            cy.intercept({ method: 'GET', url: '/api/profile' }, (req) => {
                req.on('response', (res) => {
    
                    res.setDelay(12000)
                })
            })
    
            cy.visit('/perfis')
        })
    
        it('valida se a página carregou com espera de elemento', { tags: '@flaky' }, () => {

            cy.contains('h1', 'perfis', { matchCase: false, timeout: 15000 })
                .should('be.visible') // exist ou be.visible

            cy.contains('h1', 'Perfis')
                .should('be.visible') // exist ou be.visible

            cy.log('Mensagem de Teste')
        })
    
        // não recomendado
        it('valida se a página carregou com espera de tempo', () => {
    
            // eslint-disable-next-line
            cy.wait(20000)
            cy.contains('p', 'Navegue e conecte-se com outros QAs')
                .should('be.visible')
        })
    })

    context('espera com intercept', () => {
        beforeEach(() => {
            
            // cy.intercept({
            //     method: 'GET',
            //     url: '/api/profile'
            // }).as('apiPerfil')

            cy.intercept('GET', '/api/profile')
                .as('apiPerfil')

            cy.visit('/perfis')
                .wait('@apiPerfil')
        })

        it('valida se a página carregou com espera de spy', () => {

            cy.contains('p', 'Navegue e conecte-se com outros QAs')
                .should('be.visible')
        })
    })
})