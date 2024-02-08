// <reference types="cypress" />

describe('Testes para a Home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    
    it('Deve renderizar alterar um contato', () => {
        cy.get(':nth-child(4) > .sc-gueYoa > .edit').click()
        cy.get('input[placeholder="Nome"]').type(' Dev')
        cy.get('input[placeholder="E-mail"]').type('.br')
        cy.get('input[placeholder="Telefone"]').type(' ramal 05')
        cy.get('button[class="alterar"]').click()
    })
})