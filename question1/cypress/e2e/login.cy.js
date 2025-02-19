import loginPage from "../pages/loginPage";
import homePage from "../pages/homePage";
import dashboardPage from "../pages/dashboardPage";

describe("Registration flow with login validation", () => {
  beforeEach(() => {
    homePage.visit()
    homePage.clickOnsignInBtn();
  });

  it("should login with a correct email and correct password", () => {
    loginPage.enterUsername(Cypress.env('email'));
    loginPage.enterPassword(Cypress.env('password'))
    loginPage.submit()

    dashboardPage.checkLoginInfoLabel(`${Cypress.env('firstname')} ${Cypress.env('lastname')}`)
  })

  it("should not login with incorrect email and correct password", () => {
    loginPage.enterUsername(`email@test.com`);
    loginPage.enterPassword(Cypress.env('password'))
    loginPage.submit()

    loginPage.checkErrorMessage(`The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.`)
  })

  it("should not login with correct email and incorrect password", () => {
    loginPage.enterUsername(Cypress.env('email'));
    loginPage.enterPassword(`Test!@#123qwe`)
    loginPage.submit()

    loginPage.checkErrorMessage(`The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.`)
  })
});
