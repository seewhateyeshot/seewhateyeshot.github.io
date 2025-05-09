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

    // Give the page time to render
    cy.get('[data-testid="photo-essay"]', { timeout: 10000 }).should('exist');

    // Ensure each image is rendered and loaded
    cy.get('[data-testid="essay-block-image"]').each(($img) => {
      cy.wrap($img)
        .scrollIntoView()
        .should('be.visible')
        .should('have.prop', 'naturalWidth')
        .and('be.gt', 0);
    });
  });

  it('should collapse and expand all collapsible sections', () => {
    cy.visit('/projects/soi6');

    cy.get('[data-testid="photo-essay"]').should('exist');

    // Wait for headings to load
    cy.get('h2').should('have.length.at.least', 1);

    cy.get('h2').each(($heading) => {
      const headingText = $heading.text();
      const headingId = $heading.attr('id');

      if (!headingId || headingId == 'closing') {
        cy.log(`⚠️ Skipping heading: "${headingText}" — no parent with id`);
        return;
      }

      const testId = `section-${headingId}`;

      cy.log(`🔍 Testing section: ${testId}`);

      const $h = cy.wrap($heading);

      // Collapse
      $h.click();
      cy.get(`[data-testid="${testId}"] p`).should('not.be.visible');

      // Expand
      $h.click();
      cy.get(`[data-testid="${testId}"] p`).should('be.visible');
    });
  });
});