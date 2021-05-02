const textBoxUrl = Cypress.config().textBox; 
const checkBoxUrl = Cypress.config().checkBox; 
const webTablesUrl = Cypress.config().webTables; 
const linksUrl = Cypress.config().links; 
const uploadDownloadUrl = Cypress.config().uploadDownload; 
const practiceFormUrl = Cypress.config().practiceForm; 
const browserWindowsUrl = Cypress.config().browserWindows; 
const datePickerUrl = Cypress.config().datePicker; 
const sliderUrl = Cypress.config().slider; 
const selectMenuUrl = Cypress.config().selectMenu; 

export default class Common {
    constructor() {
        //super()
    }

    static get_homePageUrl(){
        cy.visit('/');
    }

    static get_textBoxUrl() {
        cy.visit('' + textBoxUrl);
    }

    static get_checkBoxUrl() {
        cy.visit('' + checkBoxUrl);
    }
    
    static get_webTablesUrl() {
        cy.visit('' + webTablesUrl);
    }

    static get_linksUrl() {
        cy.visit('' + linksUrl);
    }

    static get_uploadDownloadUrl() {
        cy.visit('' + uploadDownloadUrl);
    }

    static get_practiceFormUrl() {
        cy.visit('' + practiceFormUrl);
    }

    static get_browserWindowsUrl() {
        cy.visit('' + browserWindowsUrl);
    }

    static get_datePickerUrl() {
        cy.visit('' + datePickerUrl);
    }

    static get_sliderUrl() {
        cy.visit('' + sliderUrl);
    }

    static get_selectMenuUrl() {
        cy.visit('' + selectMenuUrl);
    }

}   // cy.clearCookies()