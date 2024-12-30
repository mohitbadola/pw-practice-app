import { test, expect } from "@playwright/test";

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

test('locating child elements', async({page})=>{
    await page.locator('nb-card nb-radio :text-is("Option 1")').click()
    await page.locator('nb-card').locator('nb-radio').locator(':text-is("Option 2")').click()

    await page.locator('nb-card').getByRole('button', {name: "Sign In"}).first().click()

    await page.locator('nb-card').nth(3).getByRole('button').click()        //nth(3) = 4th nb-card(element) index starts from 0
})

test('locating parent elements', async({page})=>{
    await page.locator('nb-card', {hasText: "Using the Grid"}).getByRole('textbox', {name: "Email"}).click()
    await page.locator('nb-card', {has: page.locator('#inputEmail1')}).getByRole('textbox', {name: "Email"}).click()

    await page.locator('nb-card').filter({hasText: "Basic form"}).getByRole('textbox', {name: "Email"}).click()
    await page.locator('nb-card').filter({has: page.locator('.status-danger')}).getByRole('textbox', {name: "Password"}).click()

    await page.locator('nb-card').filter({has: page.locator('nb-checkbox')}).filter({hasText: "Sign in"}).getByRole('textbox', {name: "Email"}).click()

    await page.locator(':text-is("Using the Grid")').locator('..').getByRole('textbox', {name: "Email"}).click()

})

test('Reusing the locators', async({page})=>{
    const basicForm = page.locator('nb-card', {hasText: "Basic form"})
    const emailField = basicForm.getByRole('textbox', {name: "Email"})
    const passwordField = basicForm.getByRole('textbox', {name: "Password"})

    await emailField.fill('test@test.com')
    await passwordField.fill('Welcome123')
    await basicForm.locator('nb-checkbox').click()
    await basicForm.getByRole('button').click()

    await expect(emailField).toHaveValue('test@test.com')
})

