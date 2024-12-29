import { test } from "@playwright/test";

// test.beforeAll(() => {
// });

test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4200/");
});

test.describe("suite1", () => {
    test.beforeEach(async ({ page }) => {
        await page.getByTitle("Forms").click();
    });

    test("the first test", async ({ page }) => {
        await page.getByText("Form layouts").click();
        // await page.getByPlaceholder('Jane Doe').fill('Kaukau');
    });

    test("navigate to datepicker page", async ({ page }) => {
        await page.getByText("Datepicker").click();
    });
});

test.describe("suite2", () => {
    test("the first test1", async ({ page }) => {
        await page.getByText("Forms").click();
        await page.getByText("Form layouts").click();
        await page.getByPlaceholder("Jane Doe").fill("Kaukau");
    });

    test("navigate to charts", async ({ page }) => {
        await page.getByTitle("Charts").first().click();
    });
});