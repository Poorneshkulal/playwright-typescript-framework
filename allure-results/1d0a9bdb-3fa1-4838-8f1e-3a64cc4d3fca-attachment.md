# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: regression\AmazonE2E.spec.ts >> Amazon E2E >> Search Product And Add To Cart
- Location: tests\regression\AmazonE2E.spec.ts:10:7

# Error details

```
Error: page.goto: net::ERR_CONNECTION_TIMED_OUT at https://www.amazon.in/
Call log:
  - navigating to "https://www.amazon.in/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
    - generic [ref=e6]:
        - heading "This site can’t be reached" [level=1] [ref=e7]
        - paragraph [ref=e8]:
            - strong [ref=e9]: www.amazon.in
            - text: took too long to respond.
        - generic [ref=e10]:
            - paragraph [ref=e11]: "Try:"
            - list [ref=e12]:
                - listitem [ref=e13]: Checking the connection
                - listitem [ref=e14]:
                    - link "Checking the proxy and the firewall" [ref=e15] [cursor=pointer]:
                        - /url: "#buttons"
                - listitem [ref=e16]:
                    - link "Running Windows Network Diagnostics" [ref=e17] [cursor=pointer]:
                        - /url: javascript:diagnoseErrors()
        - generic [ref=e18]: ERR_CONNECTION_TIMED_OUT
    - generic [ref=e19]:
        - button "Reload" [ref=e21] [cursor=pointer]
        - button "Details" [ref=e22] [cursor=pointer]
```

# Test source

```ts
  1  | import { test }
  2  | from '@playwright/test';
  3  |
  4  | import { AmazonWorkflow }
  5  | from '../../src/workflows/AmazonWorkflow';
  6  |
  7  |
  8  | test.describe('Amazon E2E', () => {
  9  |
  10 |   test(
  11 |     'Search Product And Add To Cart',
  12 |
  13 |     async ({ page }) => {
  14 |
> 15 |       await page.goto('https://www.amazon.in/');
     |                  ^ Error: page.goto: net::ERR_CONNECTION_TIMED_OUT at https://www.amazon.in/
  16 |
  17 |       const workflow =
  18 |         new AmazonWorkflow(page);
  19 |
  20 |       await workflow.searchAndAddProduct(
  21 |         process.env.SEARCH_PRODUCT!
  22 |       );
  23 |   });
  24 | });
```
