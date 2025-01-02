import {Page, expect} from '@playwright/test'
import {NavigationPage} from '../page-objects/navigationPage'
import {FormLayoutPage } from '../page-objects/formLayoutPage'
import { DatePickerPage } from '../page-objects/datePickerPage';


export class PageManager{
    private readonly page: Page
    private readonly navigationPage: NavigationPage
    private readonly formLayoutsPage: FormLayoutPage
    private readonly datepickerPage: DatePickerPage

    constructor(page: Page){
        this.page = page
        this.navigationPage = new NavigationPage(page)
        this.formLayoutsPage = new FormLayoutPage(page)
        this.datepickerPage = new DatePickerPage(page)
    }

    navigateTo(){
        return this.navigationPage
    }

    onFormLayoutsPage(){
        return this.formLayoutsPage
    }

    onDatePickerPage(){
        return this.datepickerPage
    }
}