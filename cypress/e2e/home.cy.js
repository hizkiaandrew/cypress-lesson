describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://staging.komunitasmea.com")
  })

  it('the login button contains the correct text', () => {
    cy.get("[data-testid='navbar-btn-login-register']").contains("Daftar/Masuk")
  })

  it('the features on homepage are correct', function () {
    cy.get("a[data-testid='navbar-logo']").should('have.descendants', 'img')
  })

  it('the features on homepage are correct with custom command', function () {
    // cy.get("a[data-testid='navbar-logo']").should('have.descendants', 'img')
    cy.getByData("navbar-logo").should("have.descendants", "img")
  })

  it("Can go to Login page from homepage", () => {
    cy.get("[data-testid='navbar-btn-login-register']").contains("Daftar/Masuk")
    cy.get("[data-testid='navbar-menu'] [data-testid='navbar-btn-login-register']").click()

    cy.url().should("contain", "/login")
  })
})