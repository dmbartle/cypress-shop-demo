import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../support/pageObjects/LoginPage';
import InventoryPage from '../../support/pageObjects/InventoryPage';

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();
const userData = require('../../fixtures/userData.json');

Given('The {string} user logs in', (userKey) => {
  cy.visit('');
  loginPage.isDisplayed();
  loginPage.login(userData[userKey]);
});

Then('The inventory page is displayed', () => {
  inventoryPage.isDisplayed();
});
