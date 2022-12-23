import { expect, Page } from "@playwright/test";
import { CURRENCY } from "../selectorsData";

export class CurrencyModule {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async currencyCheck(value: string) {
        const currencyText = await this.page.locator(CURRENCY).innerText();
        expect(currencyText).toContain(value);
    }
    async currencyCheckNeg(value: string) {
        const currencyText = await this.page.locator(CURRENCY).innerText();
        expect(currencyText).not.toContain(value);
    }
}
