Feature: Shopping Cart Tests
    Tests covering the home page functionality

    Background:
        Given The "standard" user logs in
        Then The inventory page is displayed

    Scenario Outline: User purchases an item
        When The user selects the "<Item Name>" item
        Then The shopping cart icon should show "1" items
        When The user navigates to the shopping cart
        Then The cart should contain 1 items
        When The user continues to checkout
        And The "standard" user enters their info
        And The user clicks the finish button
        Then The checkout complete page is displayed
        When The user clicks the back home button
        Then The inventory page is displayed
        Examples:
            | Item Name                         |
            | Sauce Labs Backpack               |
            | Sauce Labs Bike Light             |
            | Sauce Labs Bolt T-Shirt           |
            | Sauce Labs Fleece Jacket          |
            | Sauce Labs Onesie                 |
            | Test.allTheThings() T-Shirt (Red) |