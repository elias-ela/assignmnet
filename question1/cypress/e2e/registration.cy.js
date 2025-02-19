import homePage from "../pages/homePage";
import accountRegistrationPage from "../pages/accountRegistrationPage";
import dashboardPage from "../pages/dashboardPage";

describe("Registration flow with login validation", () => {
  beforeEach(() => {
    homePage.visit()
    homePage.clickOnCreateAccountLink();
  });

  it("should register a new account", () => {
    accountRegistrationPage.enterFirstname(Cypress.env('firstname'))
    accountRegistrationPage.enterLastname(Cypress.env('lastname'))
    accountRegistrationPage.enterEmail(Cypress.env('email'))
    accountRegistrationPage.enterPassword(Cypress.env('password'))
    accountRegistrationPage.enterConfirmPassword(Cypress.env('password'))
    accountRegistrationPage.submit()

    dashboardPage.checkMessage("success", "Thank you for registering with Main Website Store.")
    dashboardPage.checkLoginInfoLabel(`${Cypress.env('firstname')} ${Cypress.env('lastname')}`)
  });

  it("should not register an exisiting email", () => {
    accountRegistrationPage.enterFirstname(Cypress.env('firstname'))
    accountRegistrationPage.enterLastname(Cypress.env('lastname'))
    accountRegistrationPage.enterEmail(Cypress.env('email'))
    accountRegistrationPage.enterPassword(Cypress.env('password'))
    accountRegistrationPage.enterConfirmPassword(Cypress.env('password'))
    accountRegistrationPage.submit()

    accountRegistrationPage.checkMessage("error", "There is already an account with this email address.")
  });
});
