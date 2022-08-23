describe("HomePage UI", () => {
  it("Should return true when title component is correct", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("chuckjoke").should("to.have.length", 1);
  });

  it("Should add a new term", () => {
    cy.visit("http://localhost:3000/");
    cy.get("[data-cy=input-term]").type("radio");
    cy.get("[data-cy=btn-search]").click();
    cy.get("[data-cy=list-search]").should("to.have.length.greaterThan", 1);
  });

  it("Should show skeeton and validation error when leave the search bar blank", () => {
    cy.visit("http://localhost:3000/");
    cy.get("[data-cy=btn-search]").click();
    cy.get("[data-cy=skeleton-joke]");
    cy.contains("Please, type a term").should("to.have.length", 1);
  });

  it("Should render the user to categories page", () => {
    cy.visit("http://localhost:3000/");
    cy.get("[data-cy=btn-random]").click();
    cy.get('[type="radio"]').should("to.have.length", 16);
  });

  it("Should render a joke after select a categorie", () => {
    cy.visit("http://localhost:3000/categories");
    cy.get('[type="radio"]').check(["celebrity"]);
    cy.get("[data-cy=randon-btn-categ]").click();
    cy.get("[data-cy=joke-categ]").should("to.have.length", 1);
  });

  it("Should return the user to HomePage", () => {
    cy.visit("http://localhost:3000/categories");
    cy.get("[data-cy=return-btn]").click();
    cy.get("[data-cy=input-term]");
  });
});
