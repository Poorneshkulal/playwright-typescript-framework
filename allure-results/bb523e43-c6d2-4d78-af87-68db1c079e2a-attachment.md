# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\Login.spec.ts >> Smoke Tests >> Verify Login Page
- Location: tests\smoke\Login.spec.ts:10:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#ap_email')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
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
  1  | import { Locator, expect }
  2  | from '@playwright/test';
  3  |
  4  | export class ElementUtil {
  5  |
  6  |   static async click(locator: Locator) {
  7  |
  8  |     await locator.waitFor({
  9  |       state: 'visible'
  10 |     });
  11 |
  12 |     await locator.click();
  13 |   }
  14 |
  15 |   static async type(
  16 |     locator: Locator,
  17 |     value: string
  18 |   ) {
  19 |
  20 |     await locator.fill(value);
  21 |   }
  22 |
  23 |   static async verifyVisible(
  24 |     locator: Locator
  25 |   ) {
  26 |
  27 |     await expect(locator)
> 28 |       .toBeVisible();
     |        ^ Error: expect(locator).toBeVisible() failed
  29 |   }
  30 |
  31 |   static async verifyText(
  32 |     locator: Locator,
  33 |     expected: string
  34 |   ) {
  35 |
  36 |     await expect(locator)
  37 |       .toContainText(expected);
  38 |   }
  39 |
  40 |   static async hover(locator: Locator) {
  41 |
  42 |     await locator.hover();
  43 |   }
  44 | }
```
