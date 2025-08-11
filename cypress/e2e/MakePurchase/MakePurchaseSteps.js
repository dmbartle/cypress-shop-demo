import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import CartPage from '../../support/pageObjects/CartPage';
import CheckoutOverviewPage from '../../support/pageObjects/CheckoutOverviewPage';
import CheckoutYourInfoPage from '../../support/pageObjects/CheckoutYourInfoPage';
import InventoryPage from '../../support/pageObjects/InventoryPage';
import CheckoutCompletePage from '../../support/pageObjects/CheckoutCompletePage';

const cartPage = new CartPage();
const checkoutCompletePage = new CheckoutCompletePage();
const checkoutOverviewPage = new CheckoutOverviewPage();
const checkoutYourInfoPage = new CheckoutYourInfoPage();
const inventoryPage = new InventoryPage();
const userData = require('../../fixtures/userData.json');

When(
  'The user selects the item {string} of cost {string}',
  (itemName, cost) => {
    inventoryPage.selectItem(itemName);
    cy.saveItemCost(cost);
  }
);

Then('The shopping cart icon should show {string} items', (numItems) => {
  inventoryPage.verifyShoppingCartCount(numItems);
});

When('The user navigates to the shopping cart', () => {
  inventoryPage.navigateToShoppingCart();
});

Then('The cart should contain {int} items', (numItems) => {
  cartPage.verifyInventoryItemCount(numItems);
});

Then(
  'verify shopping cart contains {string} of cost {string}',
  (itemName, cost) => {
    cartPage.verifyInventoryItem(itemName, cost);
  }
);
Then('The checkout should contain {int} items', (numItems) => {
  checkoutOverviewPage.verifyInventoryItemCount(numItems);
});

Then('verify checkout contains {string} of cost {string}', (itemName, cost) => {
  checkoutOverviewPage.verifyInventoryItem(itemName, cost);
});

When('The user continues to checkout', () => {
  cartPage.clickCheckoutButton();
});

When('The {string} user enters their info', (userKey) => {
  checkoutYourInfoPage.enterUserInfo(userData[userKey]);
});

Then('The price total shows the correct amounts', () => {
  cy.get('@itemTotal').then((itemTotal) => {
    checkoutOverviewPage.verifySubtotal(itemTotal);
    checkoutOverviewPage.verifyTax(itemTotal);
    checkoutOverviewPage.verifyTotal(itemTotal);
  });
});

When('The user clicks the finish button', () => {
  checkoutOverviewPage.clickFinish();
});

Then('The checkout complete page is displayed', () => {
  checkoutCompletePage.isDisplayed();
});

When('The user clicks the back home button', () => {
  checkoutCompletePage.clickBackHomeButton();
});
