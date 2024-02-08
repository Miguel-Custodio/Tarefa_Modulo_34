// <reference types="cypress" />

describe('Testes para a Home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    
    it('Deve adicionar um contato', () => {
        cy.get('input[placeholder="Nome"]').type('miguel custodio')
        cy.get('input[placeholder="E-mail"]').type('miguel@custodio.com')
        cy.get('input[placeholder="Telefone"]').type('19 98242 1942')
        cy.get('.adicionar').click()
    })
})