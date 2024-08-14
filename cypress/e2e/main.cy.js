describe("Navigation", () => {
  it("should navigate to the about page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    // Find a link with an href attribute containing "about" and click it
    cy.get("#C1C").click();

    // The new url should include "/about"
    cy.get("#rC1C").should("have.css", "color", "rgb(173, 255, 47)");
  });
});
