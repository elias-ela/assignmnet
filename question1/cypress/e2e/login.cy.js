import loginPage from "../pages/loginPage";
import dashboardPage from "../pages/dashboardPage";

describe("Registration flow with login validation", () => {
  it("should login with a correct email and correct password", () => {
    cy.login(Cypress.env("email"), Cypress.env("password"));

    dashboardPage.checkLoginInfoLabel(`${Cypress.env('firstname')} ${Cypress.env('lastname')}`)
  });

  it("should not login with incorrect email and/or password", () => {
    cy.login("email@test.com", Cypress.env("password"));

    loginPage.checkErrorMessage(
      `The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.`
    );

    cy.login(Cypress.env("email"), "random");

    loginPage.checkErrorMessage(
      `The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.`
    );
  });

  afterEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.window().then((win) => win.sessionStorage.clear());
  });
});
