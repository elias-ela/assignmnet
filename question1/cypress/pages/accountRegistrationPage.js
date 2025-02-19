class accountRegistrationPage {
  enterFirstname(firstname) {
    cy.get("#firstname").type(firstname);
  }

  enterLastname(lastname) {
    cy.get("#lastname").type(lastname);
  }

  enterEmail(email) {
    cy.get("#email_address").type(email);
  }

  enterPassword(password) {
    cy.get("#password").type(password);
  }

  enterConfirmPassword(confirmPassword) {
    cy.get("#password-confirmation").type(confirmPassword);
  }

  checkMessage(status, message) {
    cy.get(`.message-${status} > div`).invoke("text").should('contains', message);
  }

  submit() {
    cy.get("#form-validate > .actions-toolbar > div.primary > .action").click();
  }
}

export default new accountRegistrationPage();
