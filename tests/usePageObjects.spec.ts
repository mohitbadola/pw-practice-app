import { test, expect } from '@playwright/test';
import {NavigationPage} from '../page-objects/navigationPage'
import {formLayoutPage } from '../page-objects/formLayoutPage'

test.beforeEach(async({page}) => {
  await page.goto("http://localhost:4200/")
});

test('navigate to form page', async({page})=>{
    const navigateTo = new NavigationPage(page)
    await navigateTo.formLayoutsPage()
    await navigateTo.datePickerPage()
    await navigateTo.smartTablePAge()
    await navigateTo.toastrPage()
    await navigateTo.tooltipPage()
})

test('parametrized methods', async({page})=>{
  const navigateTo = new NavigationPage(page)
  const onFormLayoutPage = new formLayoutPage(page)


  await navigateTo.formLayoutsPage()
  await onFormLayoutPage.submitUsingTheGridFormWithCredentialsAndSelectOption('test@test.com', 'Welcome1', 'Option 2')
  await onFormLayoutPage.submitUsingTheGridFormWithNameEmailAndCheckbox('Kau Kau', 'kaukau@gmail.com', true)
})