class LoginPage {
  enterUsername(username) {
    cy.get("#email").type(username);
  }

  enterPassword(password) {
    cy.get("#pass").type(password);
  }

  submit() {
    cy.get("#send2").click();
  }

  checkErrorMessage(message) {
    cy.get('.message-error > div').invoke("text").should('contains', message);
  }
}

export default new LoginPage();
