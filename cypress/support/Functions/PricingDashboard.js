export function AddORReconnect() {
    cy.get('#pd-add-listings-btn').click();
    cy.get('#connect-ota-option').should('be.visible');
    cy.get('#connect-pms-option').should('be.visible');
    cy.get('ul.dropdown-menu.inner.show').should('be.visible'); 
    cy.get('#bs-select-4-1').click();
    cy.get('#new_account').should('be.visible');
  }
  export function PageSize() {
    cy.scrollTo('bottom');
        cy.get('.page-size').click();
        cy.xpath("//div[contains(@class, 'dropdown-menu')]//a[text()='25']").click();
        cy.get('.float-left.pagination-detail .page-size').invoke('text') 
            .then((pageSize) => {
            const trimmedValue = pageSize.trim();
            expect(trimmedValue).to.eq('25'); 
            cy.log('Current page size is:', trimmedValue);
        });
    }
    class ListingPage {
        get reviewPricesButton() {
          return cy.get('#review-prices');
        }   
        get clickMetrics() {
            return  cy.get('#addMetricsButton');
          }   
        clickReviewPrices() {
          this.reviewPricesButton.click();
        }
         clickOnMetrics() {
            this.clickMetrics.click();
          }
    }
        export default ListingPage;
      
  