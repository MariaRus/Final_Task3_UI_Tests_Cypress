import { expect, Page } from "@playwright/test";
import { AGE } from "../selectorsData";

export class AgeModule {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async ageCheck(value: string) {
        const ageRatingText = await this.page.locator(AGE).innerText();
        expect(ageRatingText).toEqual(value);
    }
    async ageCheckNeg(value: string) {
        const ageRatingText = await this.page.locator(AGE).innerText();
        expect(ageRatingText).not.toEqual(value);
    }
}
