# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\Login.spec.ts >> Smoke Tests >> Verify Login Page
- Location: tests\smoke\Login.spec.ts:4:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('#nav-link-accountList')
    - waiting for" https://www.amazon.in/" navigation to finish...
    - navigated to "https://www.amazon.in/"

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
  4  | export class LoginPage extends BasePage {
  5  |   readonly signIn: Locator;
  6  |   readonly email: Locator;
  7  |   readonly continueButton: Locator;
  8  |   readonly password: Locator;
  9  |   readonly signInSubmitButton: Locator;
  10 |   readonly errorMessage: Locator;
  11 | 
  12 |   constructor(page: Page) {
  13 |     super(page);
  14 |     this.signIn = page.locator("#nav-link-accountList");
  15 |     this.email = page.locator("#ap_email");
  16 |     this.continueButton = page.locator("#continue");
  17 |     this.password = page.locator("#ap_password");
  18 |     this.signInSubmitButton = page.locator("#signInSubmit");
  19 |     this.errorMessage = page.locator(".a-alert-content");
  20 |   }
  21 | 
  22 |   async openLoginPage() {
> 23 |     await this.signIn.click();
     |                       ^ Error: locator.click: Test timeout of 60000ms exceeded.
  24 |   }
  25 | 
  26 |   async enterEmailAndContinue(emailAddress: string) {
  27 |     await this.email.fill(emailAddress);
  28 |     await this.continueButton.click();
  29 |   }
  30 | 
  31 |   async verifyLoginPage() {
  32 |     await expect(this.email).toBeVisible();
  33 |   }
  34 | 
  35 |   async verifyPasswordPage() {
  36 |     await expect(this.password).toBeVisible();
  37 |   }
  38 | 
  39 |   async verifyErrorMessage(expectedMessage: string) {
  40 |     await expect(this.errorMessage).toContainText(expectedMessage);
  41 |   }
  42 | }
  43 | 
```