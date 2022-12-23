import { test } from "@playwright/test";
import { URLModule } from "../fixtures/modules/URLModule";
import { WeatherModule } from "../fixtures/modules/WeatherModule";
import { CurrencyModule } from "../fixtures/modules/CurrencyModule";
import { AgeModule } from "../fixtures/modules/AgeModule";
import { LogoModule } from "../fixtures/modules/LogoModule";
import { SearchModule } from "../fixtures/modules/SearchModule";
import { URL } from "../fixtures/linksData";
import {
    AGE_EXPECT,
    CURRENCY_EXPECT,
    SEARCH_INPUT_EXPECT,
    SEARCH_TEXT_EXPECT,
} from "../fixtures/expectationsData";

test.describe("Test Suit #1. Positive tests", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });
    test("1. URL check", async ({ page }) => {
        const urlModule = new URLModule(page);
        await urlModule.urlCheck(URL);
    });
    test("2. Weather check", async ({ page }) => {
        const weatherModule = new WeatherModule(page);
        await weatherModule.weatherCheck();
    });
    test("3. Currency check", async ({ page }) => {
        const currencyModule = new CurrencyModule(page);
        await currencyModule.currencyCheck(CURRENCY_EXPECT);
    });
    test("4. Age check", async ({ page }) => {
        const ageRatingModule = new AgeModule(page);
        await ageRatingModule.ageCheck(AGE_EXPECT);
    });
    test("5. Logo check", async ({ page }) => {
        const logoModule = new LogoModule(page);
        await logoModule.logoCheck(URL);
    });
    test("6. Search text check", async ({ page }) => {
        const searchModule = new SearchModule(page);
        await searchModule.searchTextCheck(SEARCH_TEXT_EXPECT);
    });
    test("7. Search input check", async ({ page }) => {
        const searchModule = new SearchModule(page);
        await searchModule.searchInputType(SEARCH_INPUT_EXPECT);
        await searchModule.searchInputCheck();
    });
});