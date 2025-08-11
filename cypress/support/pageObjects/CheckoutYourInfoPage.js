// Locators
const INPUT_FIRST_NAME = 'input[data-test="firstName"]';
const INPUT_LAST_NAME = 'input[data-test="lastName"]';
const INPUT_POSTAL_CODE = 'input[data-test="postalCode"]';
const CONTINUE_BTN = 'input[data-test="continue"]';

class CheckoutYourInfoPage {
  enterUserInfo({ firstName, lastName, postcode }) {
    cy.get(INPUT_FIRST_NAME).type(firstName);
    cy.get(INPUT_LAST_NAME).type(lastName);
    cy.get(INPUT_POSTAL_CODE).type(postcode);
    cy.get(CONTINUE_BTN).click();
  }
}

export default CheckoutYourInfoPage;
