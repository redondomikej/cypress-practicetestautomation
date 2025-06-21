class NavigationPage {
  visitPath(path) {
    cy.visit(path);
  }

  assertPageIsAccessible(path, expectedText) {
    cy.visit(path);
    cy.contains(expectedText).should('be.visible');
  }
}

export default new NavigationPage();
