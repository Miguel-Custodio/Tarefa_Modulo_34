/// <reference types="cypress" />

describe('Testes para a Home', () => {
    it('Deve carregar a página de home sem erros', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
})