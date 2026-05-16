import { test } from "../../src/fixtures/test";

test.describe("The Internet - Dropdown Tests", () => {
  test("Verify Dropdown is Visible", async ({
    page,
    internetHomePage,
    internetDropdownPage,
  }) => {
    await page.goto(process.env.BASE_URL || "https://the-internet.herokuapp.com/");
    await internetHomePage.navigateToDropdown();
    await internetDropdownPage.verifyDropdownIsVisible();
  });

  test("Select Option 1 from Dropdown", async ({
    page,
    internetHomePage,
    internetDropdownPage,
  }) => {
    await page.goto(process.env.BASE_URL || "https://the-internet.herokuapp.com/");
    await internetHomePage.navigateToDropdown();
    await internetDropdownPage.selectDropdownOption("1");
    await internetDropdownPage.verifyDropdownOptionSelected("1");
  });

  test("Select Option 2 from Dropdown", async ({
    page,
    internetHomePage,
    internetDropdownPage,
  }) => {
    await page.goto(process.env.BASE_URL || "https://the-internet.herokuapp.com/");
    await internetHomePage.navigateToDropdown();
    await internetDropdownPage.selectDropdownOption("2");
    await internetDropdownPage.verifyDropdownOptionSelected("2");
  });
});

