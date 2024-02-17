// <reference types="cypress" />

describe('Testes para a Home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    
    it('Deve deletar um contato', () => {
        // Pegar tamanho inicial
        cy.get('.contato').its('length').then((initialSize) => {
            cy.get(':nth-child(4) > .sc-gueYoa > .delete').click()

            cy.get('.contato').its('length').should('eq', initialSize - 1)
        })
    })
})