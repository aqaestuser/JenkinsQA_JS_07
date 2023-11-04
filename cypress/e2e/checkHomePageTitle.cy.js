/// <reference types="cypress"/>

describe('displaying Title', () =>{
    it('TC_02.01.002 | Dashboard > Home page>displaying Title'), () =>{
        cy.get('#jenkins-name-icon').should('be.visible').and('include.text', "Jenkins")
    }
})