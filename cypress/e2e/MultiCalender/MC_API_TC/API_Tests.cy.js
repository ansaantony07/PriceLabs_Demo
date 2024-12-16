import { navigateToMultiCalendar } from '../../../support/Functions/Multicalender';
describe('API Tests - Update Customization Group', () => {
    beforeEach(() => {
        cy.visit('/pricing')
        cy.fixture('users').then((users) => {
            cy.login(users.validUser.username , users.validUser.password)
        });
    });
    it('Should successfully update customization group', () => {
        navigateToMultiCalendar()
        cy.getqaid('row-col-visibility').click();
        cy.get('input[value="saveAndRefresh"]')
            .scrollIntoView() 
            .should('be.visible') 
            .click({ force: true }); 
      cy.get('input[value="customizationGroup"]')
            .scrollIntoView() 
            .should('be.visible') 
            .click({ force: true }); 
             cy.getqaid('row-col-visibility').click();
             cy.getqaid('group-dropdown')  
            .find('option:not([value="-1"])') 
            .then(options => {
                const randomIndex = Math.floor(Math.random() * 2) + 2; 
                const optionValue = options[randomIndex].value;
                cy.log(optionValue);  
                cy.getqaid('group-dropdown') 
                  .select(optionValue);               
            })
        cy.request({
            method: 'POST',
            url: '/api/update_customization_group?1734339013726', 
            }).then((response) => {
                expect(response.status).to.eq(200); 
                expect(response.body.message).to.eq('SUCCESS'); 
                expect(response.body.response.success).to.eq('Customization was updated!'); 
                expect(response.body.response.update_minstay).to.eq(false); 
                expect(response.body.response.is_csp_active).to.eq(false); 
            });
        });
    it('Should successfully return push price status', () => {
        navigateToMultiCalendar()
        cy.getqaid('mc-sync-toggle-6679ad4ff9196d1bf58c06f0').click()
          cy.request({
            method: 'POST',
            url: '/api/push_price_status?1734339068917', 
            body: {
              listing_id: '12345',
              force_sync: false, 
            },
            }).then((response) => {
                expect(response.status).to.eq(200); 
                expect(response.body.message).to.eq('SUCCESS'); 
                expect(response.body.response.sync).to.eq(true); 
                expect(response.body.response.ask_feedback).to.eq(false); 
                expect(response.body.response.listing_move_to_new_algo).to.eq(false); 
                expect(response.body.response.message).to.contain('Your prices are scheduled to be updated overnight'); 
        });
        cy.getqaid('mc-sync-toggle-6679ad4ff9196d1bf58c06f0').click()               
                
    });
});

