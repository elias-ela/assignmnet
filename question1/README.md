# Cypress Test Automation Project
## Overview

This project contains end-to-end (E2E) test automation scripts using Cypress. The tests cover UI interactions for https://magento.so4waretes6ngboard.com

The following test cases are automated,

**Test Case (A):** Registration flow with login validation.<br>

**Test Case (B):** Place an order with multiple products.<br>

**Test Case (C):** Add products to Wishlist and checkout from the Wishlist.<br>

**Test Case (D):** Search and validate results.<br>


## Getting Started

### Prerequisites

Ensure you have the following installed:

 - Node.js (LTS version)

 - npm

## Project Setup
1. Clone the repository and install dependencies:
```
git clone https://github.com/elias-ela/bamboo.git
cd bamboo/question1
```
2. Install dependencies:
```
npm install
```
3. Set up environment variables:
- Create a `.env` file in the root directory.
- Add the following line:
  ```
  BASE_URL=https://magento.softwaretestingboard.com
  FIRSTNAME=''
  LASTNAME=''
  EMAIL=''
  PASSWORD=''
  ```
4. Run Cypress tests:
- Open Cypress GUI:
  ```
  npm run open
  ```
- Run tests in headless mode:
  ```
  npm test
  ```
- Run Tests with Specific Browser:
  ```
  npm test --browser chrome
  ```
- Run a Specific Test File:
  ```
  npm test -- --spec cypress/e2e/login.cy.js
  ```
5. View test reports:
- Run Tests and Generate Report:
  ```
  npm test --reporter mochawesome
  ```
  Reports are saved in the `reports/` folder.

## Key Features
- **Page Object Model (POM)**: for better maintainability.
- **External JSON Data**: Fetching test data from `cypress/fixtures/testData.json`.
- **Mochawesome Reporting**: Generates HTML and JSON reports.
- **Environment Variables**: Secure handling of sensitive information.

## Possible Issues

 - Just incase there is a failure please re-run the test using a different account information. (*which can be updated in the `.env` file*)
 - Best to use new account information when executing placeorder and account registration test cases.
  
