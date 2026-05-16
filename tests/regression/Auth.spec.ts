import { test } from "../../src/fixtures/test";

test.describe("The Internet - Login Tests", () => {
  test("Successful Login with Valid Credentials", async ({
    page,
    internetLoginPage,
  }) => {
    await page.goto(process.env.BASE_URL || "https://the-internet.herokuapp.com/login");
    await internetLoginPage.verifyLoginPageVisible();
    await internetLoginPage.login("tomsmith", "SuperSecretPassword!");
    await internetLoginPage.verifyLoginSuccess();
  });

  test("Failed Login with Invalid Username", async ({
    page,
    internetLoginPage,
  }) => {
    await page.goto(process.env.BASE_URL || "https://the-internet.herokuapp.com/login");
    await internetLoginPage.login("invaliduser", "SuperSecretPassword!");
    await internetLoginPage.verifyLoginFailed();
  });

  test("Failed Login with Wrong Password", async ({
    page,
    internetLoginPage,
  }) => {
    await page.goto(process.env.BASE_URL || "https://the-internet.herokuapp.com/login");
    await internetLoginPage.login("tomsmith", "WrongPassword");
    await internetLoginPage.verifyLoginFailed();
  });

  test("Successful Logout", async ({ page, internetLoginPage }) => {
    await page.goto(process.env.BASE_URL || "https://the-internet.herokuapp.com/login");
    await internetLoginPage.login("tomsmith", "SuperSecretPassword!");
    await internetLoginPage.verifyLoginSuccess();
    await internetLoginPage.logout();
    await internetLoginPage.verifyLogoutMessage();
  });
});

