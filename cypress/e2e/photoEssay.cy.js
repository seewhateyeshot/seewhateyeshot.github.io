describe('Photo Essay Page', () => {
  it('loads the Soi 6 project and opens a lightbox', () => {
    cy.visit('/projects/soi6');
    cy.get('.essay-cover-image').click();
    cy.get('button[aria-label="Close"]').should('exist');
  });

  it('navigates to Soi 6 project', () => {
    cy.visit('/');
    // simulate dropdown open state
    cy.get('.dropdown').invoke('addClass', 'force-open');
    cy.contains('Soi 6').should('be.visible').click();
    cy.get('[data-testid="essay-title"]').should('contain.text', 'Soi 6');
  });

  it('shows 404 on invalid project', () => {
    cy.visit('/projects/doesnotexist');
    cy.contains('404');
  });

  // Previous bug, cover images weren't loading
  it('loads cover image for Soi 6 and displays it correctly', () => {
    cy.visit('/projects/soi6');
    cy.get('[data-testid="essay-cover-img"]')
      .should('be.visible')
      .and($img => {
        expect($img[0].naturalWidth).to.be.greaterThan(0); // image loaded
        expect($img.attr('src')).to.match(/^\/images\//);  // path starts correctly
      });
  });

  it('should load and display all images after scrolling', () => {
    cy.visit('/projects/soi6');

    cy.get('[data-testid="photo-essay"]').should('exist');

    cy.get('[data-testid="essay-block-image"]').each(($img) => {
      cy.wrap($img)
        .scrollIntoView()
        .should('be.visible')
        .and(($imgEl) => {
          expect($imgEl[0].naturalWidth).to.be.greaterThan(0);
        });
    });
  });
});