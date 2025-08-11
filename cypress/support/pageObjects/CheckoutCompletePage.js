// Locators
const PAGE_TITLE = 'span[data-test="title"]';
const BACK_HOME_BTN = 'button[data-test="back-to-products"]';

class CheckoutCompletePage {
  isDisplayed() {
    cy.get(PAGE_TITLE).contains('Checkout: Complete!').should('be.visible');
    cy.get(BACK_HOME_BTN).should('be.visible');
  }

  clickBackHomeButton() {
    cy.get(BACK_HOME_BTN).click();
  }
}

export default CheckoutCompletePage;
