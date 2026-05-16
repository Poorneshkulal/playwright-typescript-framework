# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: visual\HomePageVisual.spec.ts >> Visual Tests >> Homepage Screenshot Validation
- Location: tests\visual\HomePageVisual.spec.ts:7:7

# Error details

```
Error: A snapshot doesn't exist at D:\Playwrightscript\amazon-playwright-framework\tests\visual\HomePageVisual.spec.ts-snapshots\homepage-chromium-win32.png, writing actual.
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
  12 |       await page.goto('https://www.amazon.in/');
  13 |
  14 |       expect(
  15 |         await page.screenshot()
> 16 |       ).toMatchSnapshot(
     |         ^ Error: A snapshot doesn't exist at D:\Playwrightscript\amazon-playwright-framework\tests\visual\HomePageVisual.spec.ts-snapshots\homepage-chromium-win32.png, writing actual.
  17 |         'homepage.png'
  18 |       );
  19 |   });
  20 | });
```
