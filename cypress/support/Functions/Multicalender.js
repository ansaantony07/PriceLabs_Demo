export function navigateToMultiCalendar() {
    cy.url().should('include', '/pricing'); 
    cy.getqaid('nav-item-title').click(); 
    cy.getqaid('dropdown-value-mcp-v2')
      .should('contain', 'Multi Calendar')
      .click();
  }
  export function errortoast() {
        cy.get('[role="alert"][data-status="error"]')
            .find('[aria-label="Close"]')
            .click();
        cy.get('[role="alert"][data-status="error"]', { timeout: 10000 }).should('not.exist');
  }
  