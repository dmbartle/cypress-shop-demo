Feature: Shopping cart tests
    Tests covering the home page functionality

    Background:
        Given The "standard" user logs in
        Then The inventory page is displayed

    Scenario: User purchases an item
        When The user selects the "Sauce Labs Backpack" item
        Then The shopping cart icon should show "1" items
        When The user navigates to the shopping cart
        Then The cart should contain 1 items
        When The user continues to checkout
        And The "standard" user enters their info
        And The user clicks the finish button
        Then The checkout complete page is displayed
        When The user clicks the back home button
        Then The inventory page is displayed