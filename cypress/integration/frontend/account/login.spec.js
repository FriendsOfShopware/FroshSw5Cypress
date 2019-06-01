describe('Account: Login as customer', function () {

    beforeEach(function () {
        cy.task('applyFixture', {fixtureName: 'customers', endpoint: 'customers'});
    });

    it('login using account menu', function () {
        cy.visit(Cypress.env('homeUrl'));
        cy.get('.account--link').click();
        cy.get('.account--menu-container').should('be.visible');
        cy.get('.navigation--signin > .btn').click();

        // Login
        cy.get('.register--content').should('be.visible');
        cy.get('input[name=email]').type('test@example.de');
        cy.get('input[name=password]').type('shopware');
        cy.get('form[name=sLogin]').submit();

        // Checkout / Confirm
        cy.get('.account--welcome .panel--title').contains('Welcome');
    });

    afterEach(function () {
        cy.task('rollbackFixtures');
    });
});
