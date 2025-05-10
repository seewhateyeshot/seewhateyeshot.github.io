describe('Portrait Reel Image Loader', () => {
  it('should show a spinner while the image loads and remove it after', () => {
    cy.visit('/projects/soi6');

    const testId = '_images_pattaya_portraits_soi6_portrait-01_jpg';

    // Confirm portrait reel exists
    cy.get('.portrait-reel').should('exist');

    // Spinner should appear first
    cy.get(`[data-testid="image-spinner-${testId}"]`).should('exist');

    cy.wait(1000);

    // The image should be loaded and spinner invisible
    cy.get(`[data-testid="image-spinner-${testId}"]`).should('not.be.visible');
  });
});