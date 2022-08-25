describe('Teste do cypress.config.js', () => {
    
    it('teste de mensagem no console - browser', () => {
        console.log('teste de mensagem no browser')
    })

    it('teste de task', () => {
        cy.task('msgConsole')
    })

    it('conta o total de arquivos da pasta API', () => {
        cy.task('lerPasta', 'cypress/e2e/api')
            .then(totalArquivos => {
                cy.log(`Quantidade de arquivos: ${totalArquivos}`)
            })
            
    })

    it('conta o total de arquivos da pasta NODEJS', () => {
        cy.task('lerPasta', 'cypress/e2e/nodejs')
            .then(totalArquivos => {
                cy.log(`Quantidade de arquivos: ${totalArquivos}`)
            })
            
    })

    it('le variavel de ambiente do terminal', () => {
        cy.log(Cypress.env('pedro'))
    })

    it('le variavel de ambiente do sistema operacional', () => {
        cy.task('lerEmail')
            .then(retorno => {
                cy.log(retorno)
            })
    })
})