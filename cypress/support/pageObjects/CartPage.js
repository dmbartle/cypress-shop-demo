// Locators
const CHECKOUT_BTN = 'button[data-test="checkout"]';
const INVENTORY_ITEM = 'div[data-test="inventory-item"]';
const INVENTORY_ITEM_NAME = 'div[data-test="inventory-item-name"]';
const INVENTORY_ITEM_PRICE = 'div[data-test="inventory-item-price"]';

const { regExpEscape } = require('../utils');

class CartPage {
  clickCheckoutButton() {
    cy.get(CHECKOUT_BTN).click();
  }

  verifyShoppingCartCount(numItems) {
    cy.get(INVENTORY_ITEM).should('have.length', numItems);
  }

  verifyCartContainsItem(itemName, cost) {
    // using exact match regex for the edge case where one items name
    // could be contained within a second item, e.g. "pen" and "pencil"
    const exactMatch = new RegExp(`^${regExpEscape(itemName)}$`);
    cy.get(INVENTORY_ITEM_NAME)
      .contains(exactMatch)
      .parents(INVENTORY_ITEM)
      .find(INVENTORY_ITEM_PRICE)
      .invoke('text')
      .should('eql', `$${cost}`);
  }
}

export default CartPage;
