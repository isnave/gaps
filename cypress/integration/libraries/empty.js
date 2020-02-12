import {libraryBefore, spyOnAddEventListener} from "../common";

describe('Not Searched Yet Library', function () {
    before(libraryBefore);

    it('Clean configuration page load', () => {
        cy.visit('/libraries', {onBeforeLoad: spyOnAddEventListener});

        cy.get('#libraryTitle')
            .contains('KnoxServer');

        cy.get('#dropdownMenuLink')
            .should('have.text', 'Libraries');

        cy.get('[data-key="1"]')
            .should('have.text', 'KnoxServer - Movies');

        cy.get('[data-key="2"]')
            .should('have.text', 'KnoxServer - Disney Classic Movies');

        cy.get('.card-img-top')
            .should('be.visible');
    });
});
