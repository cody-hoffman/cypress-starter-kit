describe("Cypress Starter Kit", () => {
  it("should navigate to tractorzoom.com and search for equipment in zipcode 50309", () => {
    cy.visit("https://tractorzoom.com");

    cy.get(".hero-module__form > input").type("50309");
    cy.get(".hero-module__search").click();
  });
});
