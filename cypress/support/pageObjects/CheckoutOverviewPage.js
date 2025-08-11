// Locators
const FINISH_BTN = 'button[data-test="finish"]';

class CheckoutOverviewPage {
  clickFinish() {
    cy.get(FINISH_BTN).click();
  }
}

export default CheckoutOverviewPage;
