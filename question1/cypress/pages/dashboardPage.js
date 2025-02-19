class DashboardPage {
  addFirstItemToWishList() {
    cy.get(".product-item")
      .first()
      .trigger("mouseover")
      .find(".action.towishlist")
      .click({ force: true });
  }

  clickAddAllToCartBtn() {
    cy.contains("button", "Add All to Cart").click();
  }

  clickOnAddToWishList() {
    cy.get('a.action.towishlist[data-action="add-to-wishlist"]')
      .first()
      .click();
  }

  checkSearchResultText(message) {
    cy.get('#maincontent > div.page-title-wrapper > h1 > span').invoke('text').should('contains', message);
  }

  checkErrorMessageForSearch(message) {
    cy.get('.column > .message').invoke("text").should('contains', message);
  }

  checkFirstItemName(name) {
    cy.get('#maincontent > div.columns > div > div.product-info-main > div.page-title-wrapper.product > h1 > span').invoke("text").should("eq", name);
  }

  enterSearch(product) {
    cy.get("#search").type(`${product}{enter}`);
  }

  selectProductItem() {
    cy.get(
      ":nth-child(1) > .product-item-info > .details > .name > .product-item-link"
    ).click();
  }

  clickOnCart() {
    cy.wait(2000)
    cy.get(".showcart")
      .click()
      .then(() => {
        cy.get("#top-cart-btn-checkout").click();
      });
  }

  selectProductSize(size) {
    cy.get(`.swatch-option.text[option-label="${size}"]`).click();
  }

  selectProductColor(color) {
    cy.get(`.swatch-option.color[option-label="${color}"]`).click();
  }

  enterProductQty(amount) {
    cy.get("#qty").clear().type(amount);
  }

  clickOnAddToCartBtn() {
    cy.get("#product-addtocart-button").click();
  }

  checkMessage(status, message) {
    cy.get(`.message-${status} > div`).invoke("text").should('contains', message);
  }

  checkLoginInfoLabel(fullname) {
    cy.get(":nth-child(2) > .greet > .logged-in")
      .invoke("text")
      .should('contains', fullname);
  }

  clickProceedCheckoutBtn() {
    cy.get("#top-cart-btn-checkout").click();
  }
}

export default new DashboardPage();
