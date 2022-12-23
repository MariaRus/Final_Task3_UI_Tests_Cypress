import { Page } from "@playwright/test";
import { WEATHER } from "../selectorsData";

export class WeatherModule {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async weatherCheck() {
        await this.page.isEnabled(WEATHER);
    }
    async weatherCheckNeg() {
        await this.page.isDisabled(WEATHER);
    }
}
