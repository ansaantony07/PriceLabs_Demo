import 'cypress-xpath';
Cypress.Commands.add('login', (username, password) => {
    cy.get('#user_email').type(username); 
    cy.get('#password-field').type(password); 
    cy.get('.btn-red').should('be.visible').click(); 
  });
  Cypress.Commands.add("getqaid", (selector, ...args) => {
    return cy.get(`[qa-id=${selector}]`, ...args)
  })
  Cypress.Commands.add("gettestid", (selector, ...args) => {
    return cy.get(`[data-testid=${selector}]`, ...args)
  })