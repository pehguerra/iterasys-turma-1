/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {

        /**
         * Loga na aplicação ConexaoQA via API
         * @param email Email do usuário que será logado na aplicação
         * @param password Senha do email que será logado na aplicação
         * @example cy.login('teste@teste.com', '123456')
         */
        login(email: string, password: string): Chainable<any>

        /**
         * Retorna o elemento selecionado através do atributo data-test
         * @param seletor Valor do atributo data-test
         * @example cy.getElement('btn-login')
         * @returns Elemento selecionado
         */
        getElement(seletor:string): Chainable<any>
    }
}