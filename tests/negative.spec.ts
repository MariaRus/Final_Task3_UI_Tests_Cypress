import { test } from "@playwright/test";
import { URLModule } from "../fixtures/modules/URLModule";
import { WeatherModule } from "../fixtures/modules/WeatherModule";
import { CurrencyModule } from "../fixtures/modules/CurrencyModule";
import { AgeModule } from "../fixtures/modules/AgeModule";
import { LogoModule } from "../fixtures/modules/LogoModule";
import { SearchModule } from "../fixtures/modules/SearchModule";
import {
    AGE_NEG,
    CURRENCY_NEG,
    SEARCH_INPUT_NEG,
    SEARCH_TEXT_NEG,
} from "../fixtures/negativeData";
import { URL_NEG } from "../fixtures/linksData";

test.describe("Test Suit #2. Negative tests", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });
    test("1. URL check", async ({ page }) => {
        const urlModule = new URLModule(page);
        await urlModule.urlCheckNeg(URL_NEG);
    });
    test("2. Weather check", async ({ page }) => {
        const weatherModule = new WeatherModule(page);
        await weatherModule.weatherCheckNeg();
    });
    test("3. Currency check", async ({ page }) => {
        const currencyModule = new CurrencyModule(page);
        await currencyModule.currencyCheckNeg(CURRENCY_NEG);
    });
    test("4. Age check", async ({ page }) => {
        const ageModule = new AgeModule(page);
        await ageModule.ageCheckNeg(AGE_NEG);
    });
    test("5. Logo check", async ({ page }) => {
        const logoModule = new LogoModule(page);
        await logoModule.logoCheckNeg(URL_NEG);
    });
    test("6. Search text check", async ({ page }) => {
        const searchModule = new SearchModule(page);
        await searchModule.searchTextCheckNeg(SEARCH_TEXT_NEG);
    });
    test("7. Search input check", async ({ page }) => {
        const searchModule = new SearchModule(page);
        await searchModule.searchInputType(SEARCH_INPUT_NEG);
        await searchModule.searchInputCheckNeg;
    });
});