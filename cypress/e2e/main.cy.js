describe("Game intro basic functionality", () => {
  it("should navigate to home, click first note and be correct", () => {
    cy.visit("http://localhost:3000/");

    cy.get("#C1C").click();

    cy.get("#nC1C").should("have.css", "color", "rgb(173, 255, 47)");
  });

  it("should navigate to home, click second note and be incorrect", () => {
    cy.visit("http://localhost:3000/");

    cy.get("#C1D").click();

    cy.get("#nC1C").should("have.css", "color", "rgb(255, 0, 0)");
  });

  it("should navigate to home, click all corrects notes", () => {
    cy.visit("http://localhost:3000/");

    cy.get("#C1C").click();
    cy.get("#C1D").click();
    cy.get("#C1E").click();
    cy.get("#C1F").click();
    cy.get("#C1G").click();
    cy.get("#C1A").click();
    cy.get("#C1B").click();
    cy.get("#C2C").click();
    cy.get("#C2D").click();
    cy.get("#C2E").click();
    cy.get("#C2F").click();

    cy.get("#nC1C").should("have.css", "color", "rgb(173, 255, 47)");
    cy.get("#nC1D").should("have.css", "color", "rgb(173, 255, 47)");
    cy.get("#nC1E").should("have.css", "color", "rgb(173, 255, 47)");
    cy.get("#nC1F").should("have.css", "color", "rgb(173, 255, 47)");
    cy.get("#nC1G").should("have.css", "color", "rgb(173, 255, 47)");
    cy.get("#nC1A").should("have.css", "color", "rgb(173, 255, 47)");
    cy.get("#nC1B").should("have.css", "color", "rgb(173, 255, 47)");
    cy.get("#nC2C").should("have.css", "color", "rgb(173, 255, 47)");
    cy.get("#nC2D").should("have.css", "color", "rgb(173, 255, 47)");
    cy.get("#nC2E").should("have.css", "color", "rgb(173, 255, 47)");
    cy.get("#nC2F").should("have.css", "color", "rgb(173, 255, 47)");
    cy.get("#gameResultTxt").contains("100");
  });

  it("should navigate to home, click some corrects notes", () => {
    cy.visit("http://localhost:3000/");

    cy.get("#C1C").click();
    cy.get("#C1D").click();
    cy.get("#C1E").click();
    cy.get("#C1F").click();
    cy.get("#C1G").click();
    cy.get("#C1G").click();
    cy.get("#C1B").click();
    cy.get("#C2C").click();
    cy.get("#C2D").click();
    cy.get("#C2E").click();
    cy.get("#C2F").click();

    cy.get("#nC1C").should("have.css", "color", "rgb(173, 255, 47)");
    cy.get("#nC1D").should("have.css", "color", "rgb(173, 255, 47)");
    cy.get("#nC1E").should("have.css", "color", "rgb(173, 255, 47)");
    cy.get("#nC1F").should("have.css", "color", "rgb(173, 255, 47)");
    cy.get("#nC1G").should("have.css", "color", "rgb(173, 255, 47)");
    cy.get("#nC1A").should("have.css", "color", "rgb(255, 0, 0)");
    cy.get("#nC1B").should("have.css", "color", "rgb(173, 255, 47)");
    cy.get("#nC2C").should("have.css", "color", "rgb(173, 255, 47)");
    cy.get("#nC2D").should("have.css", "color", "rgb(173, 255, 47)");
    cy.get("#nC2E").should("have.css", "color", "rgb(173, 255, 47)");
    cy.get("#nC2F").should("have.css", "color", "rgb(173, 255, 47)");
    cy.get("#gameResultTxt").contains("91");
  });
});
