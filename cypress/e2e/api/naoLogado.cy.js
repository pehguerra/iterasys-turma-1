describe('API - Profile', () => {
    
    context('todos os perfis', () => {
        
        it('valida api de perfis', () => {
            cy.request({
                method: 'GET',
                url: '/api/profile'
            }).then(({ status, body, duration, headers }) => {
                expect(status).to.eq(200)
                expect(body[0].company).to.eq('GFT')
                expect(duration).to.be.lessThan(10000)
                expect(headers['x-powered-by']).to.eq('Express')
                expect(body[0].education[0].degree).to.eq('MBA')
                expect(body[0].bio).to.not.be.null
                expect(body[0].education).to.have.lengthOf(2)
            })
        })
    })

    context('perfil especifico', () => {

        it('seleciona um usuário inválido', () => {
            let usuarioId = 1

            cy.request({
                method: 'GET',
                url: `/api/profile/user/${usuarioId}`,
                failOnStatusCode: false
            }).then(({ body, status }) => {
                expect(status).to.eq(404)
                expect(body.errors[0].msg).to.eq('Perfil não encontrado')
            })
        })

        it('valida um usuário válido', () => {
            let usuarioId = '6079995ece40e5001512cdce'

            cy.request({
                method: 'GET',
                url: `/api/profile/user/${usuarioId}`
            }).then(({ status, body }) => {
                expect(status).to.eq(200)
                expect(body.githubusername).to.eq('pehguerra')
            })
        })
    })
}) 