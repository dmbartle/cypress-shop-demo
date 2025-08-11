Feature: Shopping Cart Tests
    Tests covering the home page functionality

    Background:
        Given The "standard" user logs in
        Then The inventory page is displayed

    Scenario Outline: User purchases an item
        When The user selects the item "<Item Name>" of cost "<Cost>"
        Then The shopping cart icon should show "1" items
        When The user navigates to the shopping cart
        Then The cart should contain 1 items
        And verify shopping cart contains "<Item Name>" of cost "<Cost>"
        When The user continues to checkout
        And The "standard" user enters their info
        Then The checkout should contain 1 items
        And verify checkout contains "<Item Name>" of cost "<Cost>"
        And The price total shows the correct amounts
        And The user clicks the finish button
        Then The checkout complete page is displayed
        When The user clicks the back home button
        Then The inventory page is displayed
        Examples:
            | Item Name                         | Cost  |
            | Sauce Labs Backpack               | 29.99 |
            | Sauce Labs Bike Light             | 9.99  |
            | Sauce Labs Bolt T-Shirt           | 15.99 |
            | Sauce Labs Fleece Jacket          | 49.99 |
            | Sauce Labs Onesie                 | 7.99  |
            | Test.allTheThings() T-Shirt (Red) | 15.99 |