describe('Home Page', () => {
  it('should load and display site branding', () => {
    cy.visit('/');
    cy.contains('Çağdaş').should('be.visible');
    cy.get('img[alt="Logo"]').should('be.visible');
  });
});