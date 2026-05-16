# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: regression\Cart.spec.ts >> Cart Management Scenarios >> Save for Later
- Location: tests\regression\Cart.spec.ts:32:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#twotabsearchtextbox')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('#twotabsearchtextbox')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - heading "Click the button below to continue shopping" [level=4] [ref=e9]
    - button "Continue shopping" [ref=e18] [cursor=pointer]
  - generic [ref=e21]:
    - link "Conditions of Use & Sale" [ref=e22] [cursor=pointer]:
      - /url: https://www.amazon.in/gp/help/customer/display.html/ref=footer_cou?ie=UTF8&nodeId=200545940
    - link "Privacy Notice" [ref=e23] [cursor=pointer]:
      - /url: https://www.amazon.in/gp/help/customer/display.html/ref=footer_privacy?ie=UTF8&nodeId=200534380
  - generic [ref=e24]: © 1996-2025, Amazon.com, Inc. or its affiliates
```

# Test source

```ts
  1  | import { Page, Locator, expect } from "@playwright/test";
  2  | import { BasePage } from "./BasePage";
  3  | 
  4  | export class HomePage extends BasePage {
  5  |   readonly searchBox: Locator;
  6  |   readonly searchButton: Locator;
  7  |   readonly noResultsMessage: Locator;
  8  |   readonly departmentDropdown: Locator;
  9  |   readonly sortDropdown: Locator;
  10 |   readonly priceFilter: Locator;
  11 |   readonly hamburgerMenu: Locator;
  12 |   readonly hamburgerMenuClose: Locator;
  13 |   readonly languageSelector: Locator;
  14 |   readonly footerLinks: Locator;
  15 | 
  16 |   constructor(page: Page) {
  17 |     super(page);
  18 |     this.searchBox = page.locator("#twotabsearchtextbox");
  19 |     this.searchButton = page.locator("#nav-search-submit-button");
  20 |     this.noResultsMessage = page.locator(".s-no-outline span.a-size-medium");
  21 |     this.departmentDropdown = page.locator("#searchDropdownBox");
  22 |     this.sortDropdown = page.locator("#s-result-sort-select");
  23 |     this.priceFilter = page
  24 |       .locator("div#priceRefinements span.a-list-item")
  25 |       .first();
  26 |     this.hamburgerMenu = page.locator("#nav-hamburger-menu");
  27 |     this.hamburgerMenuClose = page.locator(".nav-sprite.hmenu-close-icon");
  28 |     this.languageSelector = page.locator("#icp-nav-flyout");
  29 |     this.footerLinks = page.locator(".navFooterLinkCol");
  30 |   }
  31 | 
  32 |   async searchProduct(product: string) {
  33 |     await this.searchBox.fill(product);
  34 |     await this.searchButton.click();
  35 |   }
  36 | 
  37 |   async searchWithCategory(category: string, product: string) {
  38 |     await this.departmentDropdown.selectOption({ label: category });
  39 |     await this.searchProduct(product);
  40 |   }
  41 | 
  42 |   async verifySearchBoxVisible() {
> 43 |     await expect(this.searchBox).toBeVisible();
     |                                  ^ Error: expect(locator).toBeVisible() failed
  44 |   }
  45 | 
  46 |   async verifyNoResultsMessage(product: string) {
  47 |     await expect(this.noResultsMessage).toContainText("No results for");
  48 |   }
  49 | 
  50 |   async applyFirstPriceFilter() {
  51 |     await this.priceFilter.click();
  52 |   }
  53 | 
  54 |   async sortBy(sortOption: string) {
  55 |     // "Price: High to Low" usually corresponds to a specific value, but Playwright selectOption can work with labels.
  56 |     await this.sortDropdown.selectOption({ label: sortOption });
  57 |   }
  58 | 
  59 |   async openHamburgerMenu() {
  60 |     await this.hamburgerMenu.click();
  61 |   }
  62 | 
  63 |   async selectHamburgerCategory(categoryName: string) {
  64 |     await this.page
  65 |       .locator(`.hmenu-item:has-text("${categoryName}")`)
  66 |       .first()
  67 |       .click();
  68 |   }
  69 | 
  70 |   async clickLanguageSelector() {
  71 |     await this.languageSelector.click();
  72 |   }
  73 | 
  74 |   async verifyFooterVisible() {
  75 |     await expect(this.footerLinks.first()).toBeVisible();
  76 |   }
  77 | }
  78 | 
```