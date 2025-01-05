import { test } from '@playwright/test';
import { PageManager } from '../page-objects/pageManager'
import {faker} from '@faker-js/faker'

test.beforeEach(async({page}) => {
  await page.goto("/")
});

test('navigate to form page',{tag: ['@smoke', '@regression']}, async({page})=>{
  const pm = new PageManager(page)
    await pm.navigateTo().formLayoutsPage()
    await pm.navigateTo().datePickerPage()
    await pm.navigateTo().smartTablePage()
    await pm.navigateTo().toastrPage()
    await pm.navigateTo().tooltipPage()
})

test('parametrized methods @smoke', async({page})=>{
 const pm = new PageManager(page)
 const randomFullName = faker.person.fullName()
 const randomEmail = `${randomFullName.replace(' ','')}${faker.number.int(1000)}@test.com`

  await pm.navigateTo().formLayoutsPage()
  await pm.onFormLayoutsPage().submitUsingTheGridFormWithCredentialsAndSelectOption(process.env.USERNAME, process.env.PASSWORD, 'Option 2')

  await page.screenshot({path: 'screenshots/formsLayoutsPage.png'})
  const buffer = await page.screenshot()
  // console.log(buffer.toString('base64'))

  await pm.onFormLayoutsPage().submitUsingTheGridFormWithNameEmailAndCheckbox(randomFullName, randomEmail, true)

  await page.locator('nb-card', {hasText: "Inline form"}).screenshot({path: 'screenshots/inlineForm.png'})
  
  await pm.navigateTo().datePickerPage()
  await pm.onDatePickerPage().selectCommonDatePickerDateFromToday(5)
  await pm.onDatePickerPage().selectDatePickerWithRangeFromToday(6, 15)
  
})