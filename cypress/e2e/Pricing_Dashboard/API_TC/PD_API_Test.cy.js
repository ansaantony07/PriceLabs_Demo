import { ListingPage } from '../../../support/Functions/PricingDashboard';
describe('Pricing Dashboard - API Tests', () => {
    beforeEach(() => {
        cy.visit('/pricing')
        cy.fixture('users').then((users) => {
            cy.login(users.validUser.username , users.validUser.password)
        });
    });
    it('Validate the Review Prices : API response', () => {
        cy.intercept('GET', 'https://pricelabs.co/get_selected_listing_details?listingId=668da2ffb88dcb302a4f223d&pmsName=stays').as('getSelectedListingDetails');
        ListingPage.clickReviewPrices();
        cy.wait('@getSelectedListingDetails , {timeout:25000}').then((interception) => {
        console.log(interception);
            expect(interception.response.statusCode).to.eq(200); 
            expect(interception.response.body.selected_listing_details.listing_id).to.eq('VRMREALTY___144'); 
            expect(interception.response.body.selected_listing_details.pms_name).to.eq('vrm');     
        })
    })  
    it('Verify Pricing Calendar : API response', () => {
        cy.intercept('POST', '/performance_metrics/preferences').as('updateMetrics');        
        ListingPage.clickOnMetrics();
        cy.wait('@updateMetrics , {timeout:25000}').then((interception) => {
          console.log(interception);
          expect(interception.response.statusCode).to.eq(200); 
        });
        
    })  
})
