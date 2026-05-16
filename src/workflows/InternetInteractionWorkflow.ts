import { Page } from "@playwright/test";
import { InternetHomePage } from "../pages/InternetHomePage";
import { InternetCheckboxPage } from "../pages/InternetCheckboxPage";
import { InternetDropdownPage } from "../pages/InternetDropdownPage";
import { InternetHoverPage } from "../pages/InternetHoverPage";
import { InternetDynamicLoadingPage } from "../pages/InternetDynamicLoadingPage";

export class InternetInteractionWorkflow {
  constructor(
    private page: Page,
    private internetHomePage: InternetHomePage,
    private internetCheckboxPage: InternetCheckboxPage,
    private internetDropdownPage: InternetDropdownPage,
    private internetHoverPage: InternetHoverPage,
    private internetDynamicLoadingPage: InternetDynamicLoadingPage,
  ) {}

  async completeCheckboxInteractionFlow() {
    await this.internetHomePage.navigateToCheckboxes();
    await this.internetCheckboxPage.verifyCheckboxesCount(2);
    await this.internetCheckboxPage.uncheckFirstCheckbox();
    await this.internetCheckboxPage.verifyFirstCheckboxIsUnchecked();
    await this.internetCheckboxPage.checkFirstCheckbox();
    await this.internetCheckboxPage.verifyFirstCheckboxIsChecked();
  }

  async completeDropdownSelectionFlow() {
    await this.internetHomePage.navigateToDropdown();
    await this.internetDropdownPage.verifyDropdownIsVisible();
    await this.internetDropdownPage.selectDropdownOption("1");
    await this.internetDropdownPage.verifyDropdownOptionSelected("1");
    await this.internetDropdownPage.selectDropdownOption("2");
    await this.internetDropdownPage.verifyDropdownOptionSelected("2");
  }

  async completeHoverInteractionFlow() {
    await this.internetHomePage.navigateToHovers();
    await this.internetHoverPage.verifyFiguresCount(3);
    await this.internetHoverPage.hoverOverFirstFigure();
    await this.internetHoverPage.verifyCaptionAppears();
  }

  async completeDynamicLoadingFlow(example: number = 1) {
    await this.internetHomePage.navigateToDynamicLoading();
    
    if (example === 1) {
      await this.internetDynamicLoadingPage.navigateToExample1();
    } else {
      await this.internetDynamicLoadingPage.navigateToExample2();
    }
    
    await this.internetDynamicLoadingPage.clickStartButton();
    await this.internetDynamicLoadingPage.waitForDynamicContentToLoad();
    await this.internetDynamicLoadingPage.verifyFinishMessageVisible();
  }
}
