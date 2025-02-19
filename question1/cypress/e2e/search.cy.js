import loginPage from "../pages/loginPage";
import homePage from "../pages/homePage";
import dashboardPage from "../pages/dashboardPage";

describe("Search", () => {
  before(() => {
    cy.session("login", () => {
      cy.login(Cypress.env("email"), Cypress.env("password"));
    });
  });

  beforeEach(() => {
    homePage.visit();
  });

  it("should search for exisiting item", () => {
    const item = "Rival Field Messenger";
    dashboardPage.enterSearch(item);
    dashboardPage.checkSearchResultText(item);
    dashboardPage.selectProductItem();
    dashboardPage.checkFirstItemName(item);
  });

  it("should show no result for non exisiting search result", () => {
    const item = "qwerty";
    dashboardPage.enterSearch(item);
    dashboardPage.checkSearchResultText(item);
    dashboardPage.checkErrorMessageForSearch(
      `Your search returned no results.`
    );
  });

  after(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.window().then((win) => win.sessionStorage.clear());
  });
});
