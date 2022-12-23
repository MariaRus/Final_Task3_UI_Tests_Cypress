import { expect, Page } from "@playwright/test";
import { CATALOG, SEARCH, SEARCH_TEXT_ATTRIBUTE } from "../selectorsData";

export class SearchModule {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async searchTextCheck(value: string) {
        const searchText = await this.page.locator(SEARCH).getAttribute(SEARCH_TEXT_ATTRIBUTE);
        expect(searchText).toContain(value);
    }
    async searchTextCheckNeg(value: string) {
        const searchText = await this.page.locator(SEARCH).getAttribute(SEARCH_TEXT_ATTRIBUTE);
        expect(searchText).not.toContain(value);
    }
    async searchInputType(value: string) {
        await this.page.type(SEARCH, value);
    }
    async searchInputCheck() {
        await this.page.isVisible(CATALOG);
    }
    async searchInputCheckNeg() {
        await this.page.isHidden(CATALOG);
    }
}
