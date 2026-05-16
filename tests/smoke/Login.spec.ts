import { test } from "../../src/fixtures/test";

test.describe("The Internet - Smoke Tests", () => {
  test("Verify Home Page Loads", async ({
    page,
    internetHomePage,
  }) => {
    await page.goto(process.env.BASE_URL || "https://the-internet.herokuapp.com/");
    await internetHomePage.verifyHomePageVisible();
  });

  test("Verify Navigation to Login Page", async ({
    page,
    internetHomePage,
    internetLoginPage,
  }) => {
    await page.goto(process.env.BASE_URL || "https://the-internet.herokuapp.com/");
    await internetHomePage.navigateToFormAuth();
    await internetLoginPage.verifyLoginPageVisible();
  });

  test("Quick Login Smoke Test", async ({
    page,
    internetLoginPage,
  }) => {
    await page.goto(process.env.BASE_URL || "https://the-internet.herokuapp.com/login");
    await internetLoginPage.verifyLoginPageVisible();
    await internetLoginPage.login("tomsmith", "SuperSecretPassword!");
    await internetLoginPage.verifyLoginSuccess();
  });
});

