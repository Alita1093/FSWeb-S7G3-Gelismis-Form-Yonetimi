describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("passes", () => {
    expect(true).to.equal(true);
  });
  it("input getting testing", () => {
    cy.get("[data-cy=name]")
      .should("have.value", "")
      .type("Furkan OZTURK")
      .should("have.value", "Furkan OZTURK");
    cy.get("[data-cy=email]")
      .should("have.value", "")
      .type("furkanozturk1635@gmail.com")
      .should("have.value", "furkanozturk1635@gmail.com");
    cy.get("[data-cy=password]")
      .should("have.value", "")
      .type("benvesen11.")
      .should("have.value", "benvesen11.");
    cy.get("[data-cy=condition]").should("not.checked").check();
    cy.get("[data-cy=button-test]").click();
  });
});
