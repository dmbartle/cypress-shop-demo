// Locators
const CHECKOUT_BTN = 'button[data-test="checkout"]';

import BasePage from './BasePage';

class CartPage extends BasePage {
  clickCheckoutButton() {
    cy.get(CHECKOUT_BTN).click();
  }
}

export default CartPage;
