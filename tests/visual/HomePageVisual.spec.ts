import { test, expect } from "../../src/fixtures/test";

test.describe("The Internet - Visual Regression Tests", () => {
  test("Home Page Screenshot", async ({ page, internetHomePage }) => {
    await page.goto("/");
    expect(await page.screenshot()).toMatchSnapshot("internet-home-page.png");
  });

  test("Login Page Screenshot", async ({ page }) => {
    await page.goto("/login");
    expect(await page.screenshot()).toMatchSnapshot("internet-login-page.png");
  });

  test("Checkboxes Page Screenshot", async ({ page }) => {
    await page.goto("/checkboxes");
    expect(await page.screenshot()).toMatchSnapshot("internet-checkboxes-page.png");
  });

  test("Dropdown Page Screenshot", async ({ page }) => {
    await page.goto("/dropdown");
    expect(await page.screenshot()).toMatchSnapshot("internet-dropdown-page.png");
  });
});

