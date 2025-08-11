// Locators
const PAGE_TITLE = 'span[data-test="title"]';
const BACK_HOME_BTN = 'button[data-test="back-to-products"]';
const SUBTOTAL = 'div[data-test="subtotal-label"]';
const TAX = 'div[data-test="tax-label"]';
const TOTAL = 'div[data-test="total-label"]';

class CheckoutCompletePage {
  isDisplayed() {
    cy.get(PAGE_TITLE).contains('Checkout: Complete!').should('be.visible');
    cy.get(BACK_HOME_BTN).should('be.visible');
  }

  clickBackHomeButton() {
    cy.get(BACK_HOME_BTN).click();
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

export default CheckoutCompletePage;
