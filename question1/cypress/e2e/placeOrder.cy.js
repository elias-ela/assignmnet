import loginPage from "../pages/loginPage";
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

  it("Place order with multiple products", () => {
    cy.fixture("testData").then(({ person, items, sm }) => {
      dashboardPage.enterSearch(items.item1.name);
      dashboardPage.selectProductItem();

      dashboardPage.selectProductSize(items.item1.size);
      dashboardPage.selectProductColor(items.item1.color);
      dashboardPage.enterProductQty(items.item1.qty);
      dashboardPage.clickOnAddToCartBtn();
      dashboardPage.checkMessage("success", items.item1.name);

      dashboardPage.enterSearch(items.item2.name);
      dashboardPage.selectProductItem();

      dashboardPage.enterProductQty(items.item2.qty);
      dashboardPage.clickOnAddToCartBtn();
      dashboardPage.checkMessage("success", items.item2.name);

      dashboardPage.clickOnCart();

      checkoutPage.enterFirstname(person.firstname);
      checkoutPage.enterLastname(person.lastname);
      checkoutPage.enterAddress(person.address);
      checkoutPage.enterCity(person.city);
      checkoutPage.selectState(person.state);
      checkoutPage.enterPostcode(person.zip);
      checkoutPage.selectCountry(person.country);
      checkoutPage.enterPhonenumber(person.phoneNumber);
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
