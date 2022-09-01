describe('Paginação QAs', { tags: '@regressao' }, () => {

    const paginacao = () => cy.get('.paginationBttns li')
    const URL_API = '/api/profile'
    const URL_METHOD = 'GET'
    const validarPaginas = (resultado) => {
        paginacao()
            .should('have.length', resultado.length)
            .each((el, index) => {

                cy.wrap(el)
                    .should('have.text', resultado[index])
            })
    }
    
    it('valida 7 perfis', () => {
        
        cy.intercept(URL_METHOD, URL_API, { fixture: 'paginacao_7_usuarios' })
            .as('perfis')

        cy.visit('/perfis')
            .wait('@perfis')

        paginacao()
            .should('not.exist')
    })

    ;[
        { fixture: 'paginacao_8_usuarios', resultadoEsperado: ['<', '1', '2', '>'] },
        { fixture: 'paginacao_63_usuarios', resultadoEsperado: ['<', '1', '2', '3', '4', '5', '6', '7', '8', '9', '>'] },
        { fixture: 'paginacao_64_usuarios', resultadoEsperado: ['<', '1', '2', '3', '4', '5', '6', '...', '8', '9', '10', '>'] },
    ].forEach(({ fixture, resultadoEsperado }) => {

        it(`validar a ${fixture}`, () => {
            cy.intercept(URL_METHOD, URL_API, { fixture })
                .as('perfis')

            cy.visit('/perfis')
                .wait('@perfis')

            validarPaginas(resultadoEsperado)
        })
    })
})