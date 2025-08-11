// Locators
const FINISH_BTN = 'button[data-test="finish"]';
const SUBTOTAL = 'div[data-test="subtotal-label"]';
const TAX = 'div[data-test="tax-label"]';
const TOTAL = 'div[data-test="total-label"]';

import BasePage from './BasePage';

class CheckoutOverviewPage extends BasePage {
  clickFinish() {
    cy.get(FINISH_BTN).click();
  }

  verifySubtotal(itemTotal) {
    cy.get(SUBTOTAL).invoke('text').should('eql', `Item total: $${itemTotal}`);
  }

  verifyTax(itemTotal) {
    const expectedTax = (parseFloat(itemTotal) * 0.08).toFixed(2);
    cy.get(TAX).invoke('text').should('eql', `Tax: $${expectedTax}`);
  }

  verifyTotal(itemTotal) {
    const expectedTotal = (parseFloat(itemTotal) * 1.08).toFixed(2);
    cy.get(TOTAL).invoke('text').should('eql', `Total: $${expectedTotal}`);
  }
}

export default CheckoutOverviewPage;
