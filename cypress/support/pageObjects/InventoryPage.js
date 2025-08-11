// Locators
const PAGE_TITLE = 'span[data-test="title"]';
const INVENTORY_ITEM_NAME = 'div[data-test="inventory-item-name"]';
const PRODUCT_SORT_CONTAINER = 'select[data-test="product-sort-container"]';

class InventoryPage {
  isDisplayed() {
    cy.get(PAGE_TITLE).contains('Products').should('be.visible');
    cy.get(INVENTORY_ITEM_NAME).should('be.visible');
    cy.get(PRODUCT_SORT_CONTAINER).should('be.visible');
  }
}

export default InventoryPage;
