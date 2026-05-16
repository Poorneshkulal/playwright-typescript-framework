import { test } from "../../src/fixtures/test";

test.describe("The Internet - End-to-End Tests", () => {
  test("Complete Login Flow", async ({
    page,
    internetHomePage,
    internetLoginPage,
  }) => {
    // Navigate to home
    await page.goto(process.env.BASE_URL || "https://the-internet.herokuapp.com/");
    await internetHomePage.verifyHomePageVisible();

    // Navigate to login
    await internetHomePage.navigateToFormAuth();
    await internetLoginPage.verifyLoginPageVisible();

    // Perform login
    await internetLoginPage.login("tomsmith", "SuperSecretPassword!");
    await internetLoginPage.verifyLoginSuccess();

    // Perform logout
    await internetLoginPage.logout();
    await internetLoginPage.verifyLogoutMessage();
  });

  test("Complete Checkbox Interaction Flow", async ({
    page,
    internetHomePage,
    internetCheckboxPage,
  }) => {
    // Navigate to home
    await page.goto(process.env.BASE_URL || "https://the-internet.herokuapp.com/");
    await internetHomePage.verifyHomePageVisible();

    // Navigate to checkboxes
    await internetHomePage.navigateToCheckboxes();
    await internetCheckboxPage.verifyCheckboxesCount(2);

    // Uncheck then check first checkbox
    await internetCheckboxPage.uncheckFirstCheckbox();
    await internetCheckboxPage.verifyFirstCheckboxIsUnchecked();
    await internetCheckboxPage.checkFirstCheckbox();
    await internetCheckboxPage.verifyFirstCheckboxIsChecked();
  });

  test("Complete Dropdown Interaction Flow", async ({
    page,
    internetHomePage,
    internetDropdownPage,
  }) => {
    // Navigate to home
    await page.goto(process.env.BASE_URL || "https://the-internet.herokuapp.com/");
    await internetHomePage.verifyHomePageVisible();

    // Navigate to dropdown
    await internetHomePage.navigateToDropdown();
    await internetDropdownPage.verifyDropdownIsVisible();

    // Select options
    await internetDropdownPage.selectDropdownOption("1");
    await internetDropdownPage.verifyDropdownOptionSelected("1");

    await internetDropdownPage.selectDropdownOption("2");
    await internetDropdownPage.verifyDropdownOptionSelected("2");
  });

  test("Complete Hover Interaction Flow", async ({
    page,
    internetHomePage,
    internetHoverPage,
  }) => {
    // Navigate to home
    await page.goto(process.env.BASE_URL || "https://the-internet.herokuapp.com/");
    await internetHomePage.verifyHomePageVisible();

    // Navigate to hovers
    await internetHomePage.navigateToHovers();
    await internetHoverPage.verifyFiguresCount(3);

    // Hover and verify
    await internetHoverPage.hoverOverFirstFigure();
    await internetHoverPage.verifyCaptionAppears();
  });

  test("Complete Dynamic Loading Flow", async ({
    page,
    internetHomePage,
    internetDynamicLoadingPage,
  }) => {
    // Navigate to home
    await page.goto(process.env.BASE_URL || "https://the-internet.herokuapp.com/");
    await internetHomePage.verifyHomePageVisible();

    // Navigate to dynamic loading
    await internetHomePage.navigateToDynamicLoading();
    await internetDynamicLoadingPage.navigateToExample1();

    // Start loading and wait
    await internetDynamicLoadingPage.clickStartButton();
    await internetDynamicLoadingPage.waitForDynamicContentToLoad();
    await internetDynamicLoadingPage.verifyFinishMessageVisible();
  });
});

