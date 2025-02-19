import loginPage from "../pages/loginPage";
import homePage from "../pages/homePage";
import dashboardPage from "../pages/dashboardPage";

describe("Search", () => {
  before(() => {
    cy.session("login", () => {
      homePage.visit();
      homePage.clickOnsignInBtn();

      loginPage.enterUsername(Cypress.env('email'));
      loginPage.enterPassword(Cypress.env('password'))
      loginPage.submit();
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
});
