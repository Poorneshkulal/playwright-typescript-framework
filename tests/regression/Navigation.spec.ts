import { test } from "../../src/fixtures/test";

test.describe("The Internet - Hovers Tests", () => {
  test("Hover Over First Figure", async ({
    page,
    internetHomePage,
    internetHoverPage,
  }) => {
    await page.goto(process.env.BASE_URL || "https://the-internet.herokuapp.com/");
    await internetHomePage.verifyHomePageVisible();

    await internetHomePage.navigateToHovers();
    await internetHoverPage.hoverOverFirstFigure();
    await internetHoverPage.verifyCaptionAppears();
  });

  test("Verify Hover Figures Count", async ({
    page,
    internetHomePage,
    internetHoverPage,
  }) => {
    await page.goto(process.env.BASE_URL || "https://the-internet.herokuapp.com/");
    await internetHomePage.navigateToHovers();
    await internetHoverPage.verifyFiguresCount(3);
  });

  test("Click Profile Link on Hover", async ({
    page,
    internetHomePage,
    internetHoverPage,
  }) => {
    await page.goto(process.env.BASE_URL || "https://the-internet.herokuapp.com/");
    await internetHomePage.navigateToHovers();
    await internetHoverPage.hoverOverFirstFigure();
    await internetHoverPage.verifyProfileLinkVisible();
    await internetHoverPage.clickProfileLink();
  });
});

