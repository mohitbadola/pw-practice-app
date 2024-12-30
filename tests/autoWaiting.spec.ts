import {test, expect} from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://uitestingplayground.com/ajax')
    await page.getByText('Button Triggering AJAX Request').click()
});

test('auto waiting', async({page})=>{
    const successButton = page.locator('.bg-success')
    // await successButton.click()

    // const text1 = await successButton.textContent();
    // expect(text1).toEqual('Data loaded with AJAX get request.');

    // await successButton.waitFor({state: "attached"});
    // const text2 = await successButton.allTextContents()
    // expect(text2).toContain('Data loaded with AJAX get request.');

    await expect(successButton).toHaveText('Data loaded with AJAX get request.', {timeout: 20000})

})

test('alternative waits',async({page})=>{

    const successButton = page.locator('.bg-success')

    //__wait for element
    // await page.waitForSelector('.bg-success')

    //wait for particular request
    await page.waitForResponse('http://uitestingplayground.com/ajaxdata')

    //wait for network calls to be completed ('NOT RECOMMENDED')    
    // await page.waitForLoadState('networkidle')

    const text3 = await successButton.allTextContents()
    expect(text3).toContain('Data loaded with AJAX get request.')

})