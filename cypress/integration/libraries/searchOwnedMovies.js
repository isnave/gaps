/*
 * Copyright 2019 Jason H House
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/* global cy, it, expect, before, describe */
/* eslint no-undef: "error" */

import {
  jokerLibraryBefore, redLibraryBefore, searchPlexForMoviesFromSaw, spyOnAddEventListener,
} from '../common.js';

describe('Find owned movies', () => {
  before(redLibraryBefore);

  it('Find Movies', () => {
    cy.visit('/libraries', { onBeforeLoad: spyOnAddEventListener });

    searchPlexForMoviesFromSaw(cy);
  });

  it('Refresh Movies', () => {
    cy.visit('/libraries', { onBeforeLoad: spyOnAddEventListener });

    cy.get('#dropdownMenuLink')
      .click();

    cy.get('[data-key="1"]')
      .first()
      .click();

    cy.get('#dropdownMenuLink')
      .click();

    cy.get('[data-key="2"]')
      .first()
      .click();

    cy.get('label > input')
      .clear()
      .type('Saw');

    cy.get('#movies_info')
      .should('have.text', 'Showing 1 to 1 of 1 entries');

    cy.get('.card-img')
      .should('be.visible')
      .and(($img) => {
        // "naturalWidth" and "naturalHeight" are set when the image loads
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
  });

  it('Research Movies', () => {
    cy.visit('/libraries', { onBeforeLoad: spyOnAddEventListener });

    cy.get('#dropdownMenuLink')
      .click();

    cy.get('[data-key="2"]')
      .first()
      .click();

    cy.get('label > input')
      .clear()
      .type('Saw');

    cy.get('#movies_info')
      .should('have.text', 'Showing 1 to 1 of 1 entries');

    cy.get('#movieContainer > .top-margin')
      .click();

    cy.get('#movies_info')
      .should('have.text', 'Showing 1 to 1 of 1 entries');

    cy.get('.card-img')
      .should('be.visible')
      .and(($img) => {
        // "naturalWidth" and "naturalHeight" are set when the image loads
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
  });

  it('Regular Movies Empty', () => {
    jokerLibraryBefore();

    cy.visit('/libraries', { onBeforeLoad: spyOnAddEventListener });

    cy.get('#dropdownMenuLink')
      .click();

    cy.get('[data-key="1"][data-machineidentifier="721fee4db63634b88ed699f8b0a16d7682a7a0d9"]')
      .click();

    cy.get('.card-body > .btn')
      .should('be.visible');
  });
});
