Cypress.Commands.add('saveItemCost', (cost) => {
  // We use this to keep a running total of all the items we are adding
  const costNum = parseFloat(cost);

  // This if statement checks if the itemTotal alias exists already
  if (cy.state('aliases') && 'itemTotal' in cy.state('aliases')) {
    cy.get('@itemTotal').then((existingTotal) => {
      // Alias exists so add to the existing itemTotal
      cy.wrap(existingTotal + costNum).as('itemTotal');
    });
  } else {
    // Doesn't exist yet so alias is created
    cy.wrap(costNum).as('itemTotal');
  }
});
