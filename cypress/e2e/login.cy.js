describe("login functionality", () => {
    beforeEach(() => {
        cy.visit("https://staging.komunitasmea.com/login")
        cy.clearAllCookies()
    })

    it("user able to enter email", () => {
      cy.getByData("login-field-email").type("hizkiatest55@gmail.com")
    })

    it("user able to enter password", () => {
      cy.getByData("login-password").type("Hz271100")
    })

    it("user able to logged in", () => {
        cy.getByData("login-field-email").type("hizkiatest55@gmail.com")
        cy.getByData("login-password").type("Hz271100")

        cy.getByData("login-btn-login").click()

        cy.wait(500)
        cy.url().should("contain", "https://staging.komunitasmea.com")
        cy.getCookie("staging-UserID").should('exist')
    })

    it("test error message", () => {
        cy.getByData("login-field-email").type("hizkiatest55gmail.com")
        cy.getByData("login-password").type("Hz271100")

        cy.getByData("login-btn-login").click()
        cy.wait(500)

        cy.getByData("login-error-message-email").should("exist")
    })

    it("test invalid message", () => {
        cy.getByData("login-field-email").type("hizkiatest55@gmail.com")
        cy.getByData("login-password").type("Hz2711000")

        cy.getByData("login-btn-login").click()
        cy.wait(500)

        cy.getByData("messagebox-error").should("exist")
    })

})