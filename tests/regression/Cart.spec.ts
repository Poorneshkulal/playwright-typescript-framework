import { test } from "../../src/fixtures/test";

test.describe("The Internet - Dynamic Loading Tests", () => {
  test("Dynamic Loading Element Hidden", async ({
    page,
    internetHomePage,
    internetDynamicLoadingPage,
  }) => {
    await page.goto(process.env.BASE_URL || "https://the-internet.herokuapp.com/");
    await internetHomePage.verifyHomePageVisible();

    await internetHomePage.navigateToDynamicLoading();
    await internetDynamicLoadingPage.navigateToExample1();
    await internetDynamicLoadingPage.clickStartButton();
    await internetDynamicLoadingPage.waitForDynamicContentToLoad();
    await internetDynamicLoadingPage.verifyFinishMessageVisible();
  });

  test("Dynamic Loading Rendered After Delay", async ({
    page,
    internetHomePage,
    internetDynamicLoadingPage,
  }) => {
    await page.goto(process.env.BASE_URL || "https://the-internet.herokuapp.com/");
    await internetHomePage.verifyHomePageVisible();

    await internetHomePage.navigateToDynamicLoading();
    await internetDynamicLoadingPage.navigateToExample2();
    await internetDynamicLoadingPage.clickStartButton();
    await internetDynamicLoadingPage.waitForDynamicContentToLoad();
    await internetDynamicLoadingPage.verifyFinishMessageVisible();
  });
});

