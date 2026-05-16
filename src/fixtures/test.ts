import { test as base } from "@playwright/test";
import { InternetHomePage } from "../pages/InternetHomePage";
import { InternetLoginPage } from "../pages/InternetLoginPage";
import { InternetCheckboxPage } from "../pages/InternetCheckboxPage";
import { InternetDropdownPage } from "../pages/InternetDropdownPage";
import { InternetDynamicLoadingPage } from "../pages/InternetDynamicLoadingPage";
import { InternetHoverPage } from "../pages/InternetHoverPage";
import { InternetAlertPage } from "../pages/InternetAlertPage";
import { InternetLoginWorkflow } from "../workflows/InternetLoginWorkflow";
import { InternetInteractionWorkflow } from "../workflows/InternetInteractionWorkflow";

type MyFixtures = {
  internetHomePage: InternetHomePage;
  internetLoginPage: InternetLoginPage;
  internetCheckboxPage: InternetCheckboxPage;
  internetDropdownPage: InternetDropdownPage;
  internetDynamicLoadingPage: InternetDynamicLoadingPage;
  internetHoverPage: InternetHoverPage;
  internetAlertPage: InternetAlertPage;
  internetLoginWorkflow: InternetLoginWorkflow;
  internetInteractionWorkflow: InternetInteractionWorkflow;
};

export const test = base.extend<MyFixtures>({
  internetHomePage: async ({ page }, use) => {
    await use(new InternetHomePage(page));
  },
  internetLoginPage: async ({ page }, use) => {
    await use(new InternetLoginPage(page));
  },
  internetCheckboxPage: async ({ page }, use) => {
    await use(new InternetCheckboxPage(page));
  },
  internetDropdownPage: async ({ page }, use) => {
    await use(new InternetDropdownPage(page));
  },
  internetDynamicLoadingPage: async ({ page }, use) => {
    await use(new InternetDynamicLoadingPage(page));
  },
  internetHoverPage: async ({ page }, use) => {
    await use(new InternetHoverPage(page));
  },
  internetAlertPage: async ({ page }, use) => {
    await use(new InternetAlertPage(page));
  },
  internetLoginWorkflow: async (
    { page, internetHomePage, internetLoginPage },
    use,
  ) => {
    await use(
      new InternetLoginWorkflow(page, internetHomePage, internetLoginPage),
    );
  },
  internetInteractionWorkflow: async (
    {
      page,
      internetHomePage,
      internetCheckboxPage,
      internetDropdownPage,
      internetHoverPage,
      internetDynamicLoadingPage,
    },
    use,
  ) => {
    await use(
      new InternetInteractionWorkflow(
        page,
        internetHomePage,
        internetCheckboxPage,
        internetDropdownPage,
        internetHoverPage,
        internetDynamicLoadingPage,
      ),
    );
  },
});

export { expect } from "@playwright/test";
