# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\Login.spec.ts >> Smoke Tests >> Verify Login Page
- Location: tests\smoke\Login.spec.ts:10:7

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "/", waiting until "load"

```

# Test source

```ts
  1  | import { test }
  2  | from '@playwright/test';
  3  |
  4  | import { LoginWorkflow }
  5  | from '../../src/workflows/LoginWorkflow';
  6  |
  7  |
  8  | test.describe('Smoke Tests', () => {
  9  |
  10 |   test(
  11 |     'Verify Login Page',
  12 |
  13 |     async ({ page }) => {
  14 |
> 15 |       await page.goto('/');
     |                  ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  16 |
  17 |       const workflow =
  18 |         new LoginWorkflow(page);
  19 |
  20 |       await workflow.openLogin();
  21 |   });
  22 | });
```
