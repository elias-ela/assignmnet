import homePage from "../pages/homePage";
import dashboardPage from "../pages/dashboardPage";
import checkoutPage from "../pages/checkoutPage";

describe("Place Order", () => {
  before(() => {
    cy.session("login", () => {
      cy.login(Cypress.env("email"), Cypress.env("password"));
    });

    homePage.visit();
  });

  it("place order from wishlist", () => {
    cy.fixture("testData").then(({ person, items, sm }) => {
      dashboardPage.enterSearch(items.item1.name);
      dashboardPage.selectProductItem();

      dashboardPage.selectProductSize(items.item1.size);
      dashboardPage.selectProductColor(items.item1.color);
      dashboardPage.enterProductQty(items.item1.qty);

      dashboardPage.clickOnAddToWishList();
      dashboardPage.checkMessage("success", items.item1.name);

      dashboardPage.clickAddAllToCartBtn();
      dashboardPage.checkMessage("success", items.item1.name);
      dashboardPage.clickOnCart();

      checkoutPage.checkShippingMethods(sm);
      checkoutPage.clickNextBtn();
      checkoutPage.checkBillingAddress();
      checkoutPage.placeOrder();
      checkoutPage.checkMessage("Thank you for your purchase!");
    });
  });

  after(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.window().then((win) => win.sessionStorage.clear());
  });
});
