import { navigateToMultiCalendar , errortoast} from '../../../support/Functions/Multicalender';

describe('MultiCalender Dashboard - Functional Tests', () => {
    beforeEach(() => {
        cy.visit('/pricing')
        cy.fixture('users').then((users) => {
            cy.login(users.validUser.username , users.validUser.password)
        });
    });
    it('Verify Bulk Actions functionality', () => {
        navigateToMultiCalendar()
        cy.getqaid('bulk-65fc691b017829376b57e26c___stays').should('be.visible').click();
        cy.getqaid('bulk-6679ad4ff9196d1bf58c06f0___stays').should('be.visible').click();        
        cy.gettestid("SaveOutlinedIcon").should('be.visible').click();
        cy.get('[role="progressbar"]').should('be.visible')
        cy.get('[role="progressbar"]', { timeout: 25000 }).should('not.exist');
    })   
    it('Verify Sync Prices toggle functionality', () => {
        navigateToMultiCalendar()
        cy.getqaid('mc-sync-toggle-6679ad4ff9196d1bf58c06f0').click()
        cy.get('.chakra-toast').should('be.visible');
        cy.get('.chakra-toast')
            .find('.chakra-text')
            .should('contain', 'Your prices are scheduled to be updated overnight');
        cy.get('.chakra-toast', { timeout: 10000 }).should('be.visible');    
    })  
    it('Should display and interact with the error toast notification', () => {
        navigateToMultiCalendar()
        cy.getqaid('mc-sync-toggle-6679ad4ff9196d1bf58c06f0').click()
        cy.get('[role="alert"][data-status="error"]')
            .should('be.visible')
            .and('contain', 'We have stopped updating your prices.');
        cy.get('[role="alert"][data-status="error"]')
            .find('a')
            .should('have.attr', 'href', 'https://help.pricelabs.co/portal/en/kb/articles/billing')
            .and('contain', 'Review Billing Policy');
        errortoast();
    });
    it('Verify the Listing Filter Modal', () => {
        navigateToMultiCalendar()
        cy.get('popover-trigger-:r18:').click(); 
        cy.get('[aria-describedby="popover-body-:r18:"]')
            .should('be.visible')
            .and('contain', 'Listing Filter'); 
        cy.get('.mc-close-listing-filter').click(); 
        cy.get('.modal').should('not.exist');       
    })  
    it('Verify the data export/download feature.', () => {
        navigateToMultiCalendar()
        cy.get('[aria-label="download csv"]').should('be.visible').click()
    })  
})

