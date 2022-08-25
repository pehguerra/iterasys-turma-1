describe('API - Posts', () => {
    
    // let jwtPedro = ''

    before(() => {
        
        // cy.request({
        //     method: 'POST',
        //     url: '/api/auth',
        //     body: {
        //         email: 'testeIterasysApi@iterasys.com',
        //         password: '123456'
        //     }
        // }).then(({ status }) => {
        //     expect(status).to.eq(200)

        //     Cypress.Cookies.defaults({
        //         preserve: 'jwt'
        //     })

        //     // cy.log(body.jwt)
        //     // jwtPedro = body.jwt
        // })

        cy.login(Cypress.env('email'), Cypress.env('password'))
    })

    after(() => {
        cy.log('Limpando os cookies')

        Cypress.Cookies.defaults({
            preserve: []
        })
    })

    it('valida todos os posts', () => {
        
        cy.request({
            method: 'GET',
            url: '/api/posts'
        }).then(({ status }) => {
            expect(status).to.eq(200)
        })

        // headers: {
        //      Cookie: `jwt=${jwtPedro}`
        // }
    })

    it('valida todos os posts 2', () => {
        
        cy.request({
            method: 'GET',
            url: '/api/posts'
        }).then(({ status }) => {
            expect(status).to.eq(200)
        })
    })

    it('valida todos os posts 3', () => {
        
        cy.request({
            method: 'GET',
            url: '/api/posts'
        }).then(({ status }) => {
            expect(status).to.eq(200)
        })
    })
})