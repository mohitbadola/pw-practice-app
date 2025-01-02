import { test, expect } from '@playwright/test';
import {NavigationPage} from '../page-objects/navigationPage'
import {formLayoutPage } from '../page-objects/formLayoutPage'
import { datePickerPage } from '../page-objects/datePickerPage';

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
  const onDatePickerPage = new datePickerPage(page)


  await navigateTo.formLayoutsPage()
  await onFormLayoutPage.submitUsingTheGridFormWithCredentialsAndSelectOption('test@test.com', 'Welcome1', 'Option 2')
  await onFormLayoutPage.submitUsingTheGridFormWithNameEmailAndCheckbox('Kau Kau', 'kaukau@gmail.com', true)
  
  await navigateTo.datePickerPage()
  await onDatePickerPage.selectCommonDatePickerDateFromToday(5)
  await onDatePickerPage.selectDatePickerWithRangeFromToday(6, 15)
  
})