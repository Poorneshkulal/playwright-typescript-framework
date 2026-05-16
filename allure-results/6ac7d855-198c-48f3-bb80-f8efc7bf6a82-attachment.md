# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: visual\HomePageVisual.spec.ts >> Visual Tests >> Homepage Screenshot Validation
- Location: tests\visual\HomePageVisual.spec.ts:7:7

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect }
  2  | from '@playwright/test';
  3  |
  4  |
  5  | test.describe('Visual Tests', () => {
  6  |
  7  |   test(
  8  |     'Homepage Screenshot Validation',
  9  |
  10 |     async ({ page }) => {
  11 |
> 12 |       await page.goto('/');
     |                  ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  13 |
  14 |       expect(
  15 |         await page.screenshot()
  16 |       ).toMatchSnapshot(
  17 |         'homepage.png'
  18 |       );
  19 |   });
  20 | });
```
