// Locators
const ADD_TO_CART_BTN = 'button[data-test*="add-to-cart-"]';
const INVENTORY_ITEM = 'div[class="inventory_item"]';
const INVENTORY_ITEM_NAME = 'div[data-test="inventory-item-name"]';
const PAGE_TITLE = 'span[data-test="title"]';
const PRODUCT_SORT_CONTAINER = 'select[data-test="product-sort-container"]';
const SHOPPING_CART_BADGE = 'span[data-test="shopping-cart-badge"]';
const SHOPPING_CART_LINK = 'a[class="shopping_cart_link"]';

class InventoryPage {
  isDisplayed() {
    cy.get(PAGE_TITLE).contains('Products').should('be.visible');
    cy.get(INVENTORY_ITEM_NAME).should('be.visible');
    cy.get(PRODUCT_SORT_CONTAINER).should('be.visible');
  }

  selectItem(itemName) {
    // using exact match regex for the edge case where one items name
    // could be contained within a second item, e.g. "pen" and "pencil"
    const exactMatch = new RegExp(`^${itemName}$`);
    cy.get(INVENTORY_ITEM_NAME)
      .contains(exactMatch)
      .parents(INVENTORY_ITEM)
      .find(ADD_TO_CART_BTN)
      .click();
  }

  verifyShoppingCartCount(numItems) {
    cy.get(SHOPPING_CART_BADGE).should('contain.text', numItems);
  }

  navigateToShoppingCart() {
    cy.get(SHOPPING_CART_LINK).click();
  }
}

export default InventoryPage;
