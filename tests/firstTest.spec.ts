import { test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4200/");
    await page.getByTitle("Forms").click();
    await page.getByText("Form layouts").click();
});

test('Locator syntax rules', async ({ page }) => {
    // By tag name
    // await page.locator('input').first().click();

    // By ID
    await page.locator('#inputEmail1').click();

    // By class value
    page.locator('.shape-rectangle');

    // By attribute
    page.locator('[placeholder="Email"]');

    // By full class value
    page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]');

    // Combining selectors
    page.locator('input[placeholder="Email"][nbinput]');

    // By XPath (not recommended)
    page.locator('//*[@id="inputEmail1"]');

    // By partial text match
    page.locator(':text("Using")');

    // By exact text match
    page.locator(':text-is("Using the Grid")');
});

test('User facing locators', async({page})=>{
    await page.getByRole('textbox', {name: "Email"}).first().click()
    await page.getByRole('button', {name: "Sign in"}).first().click()

    await page.getByLabel('Email').first().click()

    await page.getByPlaceholder('Jane Doe').click()

    await page.getByText('Using the Grid').click()

    await page.getByTestId('SignIn').click()

    // await page.getByTitle('IoT Dashboard').click()
})


