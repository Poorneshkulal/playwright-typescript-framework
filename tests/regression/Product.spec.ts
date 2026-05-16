import { test } from "../../src/fixtures/test";

test.describe("The Internet - Checkboxes Tests", () => {
  test("Verify Checkboxes are Present", async ({
    page,
    internetHomePage,
    internetCheckboxPage,
  }) => {
    await page.goto(process.env.BASE_URL || "https://the-internet.herokuapp.com/");
    await internetHomePage.navigateToCheckboxes();
    await internetCheckboxPage.verifyCheckboxesCount(2);
  });

  test("Check First Checkbox", async ({
    page,
    internetHomePage,
    internetCheckboxPage,
  }) => {
    await page.goto(process.env.BASE_URL || "https://the-internet.herokuapp.com/");
    await internetHomePage.navigateToCheckboxes();
    await internetCheckboxPage.uncheckFirstCheckbox();
    await internetCheckboxPage.checkFirstCheckbox();
    await internetCheckboxPage.verifyFirstCheckboxIsChecked();
  });

  test("Uncheck First Checkbox", async ({
    page,
    internetHomePage,
    internetCheckboxPage,
  }) => {
    await page.goto(process.env.BASE_URL || "https://the-internet.herokuapp.com/");
    await internetHomePage.navigateToCheckboxes();
    await internetCheckboxPage.checkFirstCheckbox();
    await internetCheckboxPage.uncheckFirstCheckbox();
    await internetCheckboxPage.verifyFirstCheckboxIsUnchecked();
  });

  test("Check Second Checkbox", async ({
    page,
    internetHomePage,
    internetCheckboxPage,
  }) => {
    await page.goto(process.env.BASE_URL || "https://the-internet.herokuapp.com/");
    await internetHomePage.navigateToCheckboxes();
    await internetCheckboxPage.checkSecondCheckbox();
    await internetCheckboxPage.verifySecondCheckboxIsChecked();
  });
});

