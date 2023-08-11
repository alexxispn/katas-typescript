# Checkout System Kata

Implement a program that simulates a checkout system for a store. Given a list of products as strings representing items
in a customer's basket, the program should calculate and return the total price of the basket. Each product has a fixed
price, and some products have special discount offers.

| Item | Price | Special Offer |
|------|-------|---------------|
| A    | 50    | 3 for 130     |
| B    | 30    | 2 for 45      |
| C    | 20    |               |
| D    | 15    |               |

## Examples

- Input: `AA`
  Output: 100

- Input: `AABCDADDCD`
  Output: 260

- Input: `AAABBBCCCDDD`
  Output: 310
