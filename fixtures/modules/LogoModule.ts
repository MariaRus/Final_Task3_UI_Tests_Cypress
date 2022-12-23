import { expect, Page } from "@playwright/test";
import { LOGO } from "../selectorsData";

export class LogoModule {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async logoCheck(value: string) {
        await this.page.locator(LOGO).click();
        const CURRENT_URL = this.page.url();
        expect(CURRENT_URL).toEqual(value);
    }
    async logoCheckNeg(value: string) {
        await this.page.locator(LOGO).click();
        const CURRENT_URL = this.page.url();
        expect(CURRENT_URL).not.toEqual(value);
    }
}
