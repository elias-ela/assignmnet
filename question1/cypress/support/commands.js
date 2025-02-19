import loginPage from "../pages/loginPage";
import homePage from "../pages/homePage";

Cypress.Commands.add('login', (email, password) => {
    cy.visit("");
    homePage.clickOnsignInBtn();
    loginPage.enterUsername(email);
    loginPage.enterPassword(password)
    loginPage.submit()
  });
  