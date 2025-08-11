// Locators
const CHECKOUT_BTN = 'button[data-test="checkout"]';
const INVENTORY_ITEM = 'div[data-test="inventory-item"]';

class CartPage {
  clickCheckoutButton() {
    cy.get(CHECKOUT_BTN).click();
  }
  verifyShoppingCartCount(numItems) {
    cy.get(INVENTORY_ITEM).should('have.length', numItems);
  }
}

export default CartPage;
