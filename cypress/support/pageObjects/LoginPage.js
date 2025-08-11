// Locators
const INPUT_USERNAME = 'input[data-test="username"]';
const INPUT_PASSWORD = 'input[data-test="password"]';
const LOGIN_BUTTON = 'input[data-test="login-button"]';

class LoginPage {
  isDisplayed() {
    cy.get(INPUT_USERNAME).should('be.visible');
    cy.get(INPUT_PASSWORD).should('be.visible');
    cy.get(LOGIN_BUTTON).should('be.visible');
  }

  login({ username, password }) {
    cy.get(INPUT_USERNAME).type(username);
    cy.get(INPUT_PASSWORD).type(password);
    cy.get(LOGIN_BUTTON).click();
  }
}

export default LoginPage;
