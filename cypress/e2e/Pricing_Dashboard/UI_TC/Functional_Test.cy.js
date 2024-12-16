import { AddORReconnect , PageSize } from '../../../support/Functions/PricingDashboard';
describe('Pricing Dashboard - Functional Tests', () => {
    beforeEach(() => {
        cy.visit('/pricing')
        cy.fixture('users').then((users) => {
            cy.login(users.validUser.username , users.validUser.password)
        });
    });
    it('Verify the search functionality.', () => {
        cy.get('.search-input').should('be.visible').type('Sao Paulo {enter}')
        cy.get('#table').should('be.visible');
    })  
    it('Validate the Review Prices', () => {
        cy.get('#review-prices').click();   
        cy.get('#review-prices-overlay').should('be.visible');
        cy.get('#overlay-cross-btn-div').click();     
    })  
    it('Verify Add/Reconnect Listing', () => {
        AddORReconnect();
    })  
    it('Verify Pricing Calendar', () => {
        cy.get('#addMetricsButton').click();
        cy.get('performance-metrics-selector').should('be.visible')
        cy.get('#updateMetricsPreferences').click();           
    })  
    it('Gets the current page size value', () => {
        PageSize();
    })
})

