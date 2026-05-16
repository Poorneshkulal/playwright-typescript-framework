# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: regression\Auth.spec.ts >> Authentication Scenarios >> Unregistered Email
- Location: tests\regression\Auth.spec.ts:13:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.fill: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('#ap_email')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - link "Amazon .in" [ref=e6] [cursor=pointer]:
      - /url: /ref=ap_frn_logo
      - img "Amazon" [ref=e7]
      - text: .in
    - generic [ref=e12]:
      - heading "Sign in or create account" [level=1] [ref=e13]
      - paragraph [ref=e14]: Enter mobile number or email
      - generic [ref=e16]:
        - textbox "Enter mobile number or email" [active] [ref=e18]
        - generic [ref=e20] [cursor=pointer]:
          - button "Continue" [ref=e21]
          - generic [ref=e22]: Continue
      - paragraph [ref=e23]:
        - text: By continuing, you agree to Amazon's
        - link "Conditions of Use" [ref=e24] [cursor=pointer]:
          - /url: /gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=200545940
        - text: and
        - link "Privacy Notice" [ref=e25] [cursor=pointer]:
          - /url: /gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=200534380
        - text: .
      - generic [ref=e26]:
        - separator [ref=e27]
        - generic [ref=e28]: Buying for work?
        - link "Create a free business account" [ref=e29] [cursor=pointer]:
          - /url: /business/register/org/landing?ref_=ab_reg_signin_unifiedauth
  - generic [ref=e30]:
    - generic [ref=e33]:
      - link "Conditions of Use" [ref=e34] [cursor=pointer]:
        - /url: /gp/help/customer/display.html/ref=ap_desktop_footer_cou?ie=UTF8&nodeId=200545940
      - link "Privacy Notice" [ref=e35] [cursor=pointer]:
        - /url: /gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&nodeId=200534380
      - link "Help" [ref=e36] [cursor=pointer]:
        - /url: /help
    - generic [ref=e37]: © 1996–2026, Amazon.com, Inc. or its affiliates
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
  23 |     await this.signIn.click();
  24 |   }
  25 | 
  26 |   async enterEmailAndContinue(emailAddress: string) {
> 27 |     await this.email.fill(emailAddress);
     |                      ^ Error: locator.fill: Test timeout of 60000ms exceeded.
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