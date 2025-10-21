describe('Bug flow', () => {
  it('adds, edits and deletes a bug', () => {
    // These are high-level steps; assumes backend running at same origin or proxy configured
    cy.visit('/');
    cy.get('input[placeholder="Title"]').type('E2E bug');
    cy.get('input[placeholder="Description"]').type('from cypress');
    cy.contains('Add Bug').click();
    // wait for list to update
    cy.contains('E2E bug').should('exist');
    cy.contains('E2E bug').parent().contains('Edit').click();
    cy.contains('Save').click();
    cy.contains('Delete').click();
    cy.contains('E2E bug').should('not.exist');
  });
});
