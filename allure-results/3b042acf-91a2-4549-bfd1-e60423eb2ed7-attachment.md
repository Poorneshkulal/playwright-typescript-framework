# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: regression\AmazonE2E.spec.ts >> Amazon E2E >> Search Product And Add To Cart
- Location: tests\regression\AmazonE2E.spec.ts:10:7

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
