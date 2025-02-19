class CheckoutPage {
  enterFirstname(firstname) {
    cy.get('input[name="firstname"]').clear().type(firstname);
  }

  enterLastname(lastname) {
    cy.get('input[name="lastname"]').clear().type(lastname);
  }

  enterAddress(address) {
    cy.get('input[name="street[0]"]').clear().type(address);
  }

  enterCity(city) {
    cy.get('input[name="city"]').clear().type(city);
  }

  selectState(state) {
    cy.get("select[name='region_id']").select(state);
  }

  enterPostcode(zip) {
    cy.get('input[name="postcode"]').clear().type(zip);
  }

  selectCountry(country) {
    cy.get("select[name='country_id']").select(country);
  }

  enterPhonenumber(phonenumber) {
    cy.get('input[name="telephone"]').clear().type(phonenumber);
  }

  checkShippingMethods(method) {
    cy.get(`input[type="radio"][value=${method}]`).check().should("be.checked");
  }

  clickNextBtn() {
    cy.get('.button').click();
  }

  checkBillingAddress() {
    cy.get('#billing-address-same-as-shipping-checkmo').check()
  }

  placeOrder() {
    cy.get('.payment-method-content > :nth-child(4) > div.primary > .action').click();
  }

  checkMessage(message) {
    cy.get('.base').invoke("text").should('contains', message);
  }
}

export default new CheckoutPage();
