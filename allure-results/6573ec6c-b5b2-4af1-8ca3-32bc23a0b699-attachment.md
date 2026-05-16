# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: regression\AmazonE2E.spec.ts >> The Internet - End-to-End Tests >> Complete Login Flow
- Location: tests\regression\AmazonE2E.spec.ts:4:7

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('#flash.success')
Timeout: 5000ms
- Expected substring  - 1
+ Received string     + 4

- You logged in successfully
+
+             You logged into a secure area!
+             ×
+           

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('#flash.success')
    9 × locator resolved to <div id="flash" data-alert="" class="flash success">…</div>
      - unexpected value "
            You logged into a secure area!
            ×
          "

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e4]:
    - text:  You logged into a secure area!
    - link "×" [ref=e5] [cursor=pointer]:
      - /url: "#"
  - generic [ref=e6]:
    - link "Fork me on GitHub":
      - /url: https://github.com/tourdedave/the-internet
      - img "Fork me on GitHub" [ref=e7] [cursor=pointer]
    - generic [ref=e9]:
      - heading "Secure Area" [level=2] [ref=e10]: Secure Area
      - heading "Welcome to the Secure Area. When you are done click logout below." [level=4] [ref=e11]
      - link "Logout" [ref=e12] [cursor=pointer]:
        - /url: /logout
  - generic [ref=e14]:
    - separator [ref=e15]
    - generic [ref=e16]:
      - text: Powered by
      - link "Elemental Selenium" [ref=e17] [cursor=pointer]:
        - /url: http://elementalselenium.com/
```

# Test source

```ts
  1  | import { Page, Locator, expect } from "@playwright/test";
  2  | import { BasePage } from "./BasePage";
  3  | 
  4  | export class InternetLoginPage extends BasePage {
  5  |   readonly usernameField: Locator;
  6  |   readonly passwordField: Locator;
  7  |   readonly loginButton: Locator;
  8  |   readonly loginMessage: Locator;
  9  |   readonly successMessage: Locator;
  10 |   readonly errorMessage: Locator;
  11 |   readonly logoutButton: Locator;
  12 | 
  13 |   constructor(page: Page) {
  14 |     super(page);
  15 |     this.usernameField = page.locator("#username");
  16 |     this.passwordField = page.locator("#password");
  17 |     this.loginButton = page.locator("button[type='submit']");
  18 |     this.loginMessage = page.locator(".subheader");
  19 |     this.successMessage = page.locator("#flash.success");
  20 |     this.errorMessage = page.locator("#flash.error");
  21 |     this.logoutButton = page.locator("a:has-text('Logout')");
  22 |   }
  23 | 
  24 |   async login(username: string, password: string) {
  25 |     await this.usernameField.fill(username);
  26 |     await this.passwordField.fill(password);
  27 |     await this.loginButton.click();
  28 |   }
  29 | 
  30 |   async verifyLoginPageVisible() {
  31 |     await expect(this.usernameField).toBeVisible();
  32 |     await expect(this.passwordField).toBeVisible();
  33 |   }
  34 | 
  35 |   async verifyLoginSuccess() {
  36 |     await expect(this.successMessage).toBeVisible();
> 37 |     await expect(this.successMessage).toContainText("You logged in successfully");
     |                                       ^ Error: expect(locator).toContainText(expected) failed
  38 |   }
  39 | 
  40 |   async verifyLoginFailed() {
  41 |     await expect(this.errorMessage).toBeVisible();
  42 |     await expect(this.errorMessage).toContainText("Your username is invalid!");
  43 |   }
  44 | 
  45 |   async logout() {
  46 |     await this.logoutButton.click();
  47 |   }
  48 | 
  49 |   async verifyLogoutMessage() {
  50 |     await expect(this.successMessage).toContainText("You logged out successfully");
  51 |   }
  52 | }
  53 | 
```