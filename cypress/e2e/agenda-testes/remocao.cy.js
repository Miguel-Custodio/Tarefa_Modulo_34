// <reference types="cypress" />

describe('Testes para a Home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    
    it('Deve deletar um contato', () => {
        cy.get(':nth-child(4) > .sc-gueYoa > .delete').click()
    })
})