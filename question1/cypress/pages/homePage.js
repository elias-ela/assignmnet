class HomePage {
  visit() {
    cy.visit("")
  }

  clickOnCreateAccountLink() {
    cy.get(`.panel > .header > :nth-child(3) > a`).click()
  }

  clickOnsignInBtn() {
    cy.get(`.panel > .header > .authorization-link > a`).click()
  }
}

export default new HomePage();
