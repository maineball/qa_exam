import { Given, When, Then} from "cypress-cucumber-preprocessor/steps"

import goToPage from "../../pages/links"
import textboxPage from "../../pages/demoqa_elements/qademo_textbox_page"
import checkboxPage from "../../pages/demoqa_elements/qademo_checkbox_page"
import webTablesPage from "../../pages/demoqa_elements/qademo_webtables_page"
import linksPage from "../../pages/demoqa_elements/qademo_links_page"
import uploadDownloadPage from "../../pages/demoqa_elements/qademo_upload-download_page"
import formPage from "../../pages/demoqa_forms/qademo_forms_page"
import browserWindowsPage from "../../pages/demoqa_alerts-frame-windows/qademo_browser-windows_page"
import datePickerPage from "../../pages/demoqa_widgets/qademo_date-picker_page"
import sliderPage from "../../pages/demoqa_widgets/qademo_slider_page"
import selectMenuPage from "../../pages/demoqa_widgets/qademo_select-menu_page"


Given ('the user is in {word} page', (page) => {
    switch (page) {
        case 'Textbox':
            goToPage.get_textBoxUrl()
            break   
        case 'Checkbox':
            goToPage.get_checkBoxUrl()
            break
        case 'WebTables':
            goToPage.get_webTablesUrl()
            break
        case 'Links':
            goToPage.get_linksUrl()
            break
        case 'Upload-and-Download':
            goToPage.get_uploadDownloadUrl()
            break
        case 'Forms':
            goToPage.get_practiceFormUrl()
            break   
        case 'Browser-Windows':
            goToPage.get_browserWindowsUrl()
            break
        case 'Date-Picker':
            goToPage.get_datePickerUrl()
            break
        case 'Slider':
            goToPage.get_sliderUrl()
            break
        case 'Select-Menu':
            goToPage.get_selectMenuUrl()
            break                        
        default:
            goToPage.get_homePageUrl()
            return
            break    
    }
})


When ('the populated fields are submitted', () => {
    textboxPage.populate_textbox()
    textboxPage.submit_textbox()
})

Then ('the output should match the populated value', () => {
    textboxPage.validate_textbox_output()

})

Given ('I click the required checkbox', () => {
    checkboxPage.check_boxes()
    checkboxPage.validate_check_boxes()
})

Then ('the checkbox ticked is validated', () => {
    checkboxPage.validate_check_boxes()
})


Given ('the user update details for {word}', (user) => {
    webTablesPage.search_user(user)
    webTablesPage.edit_user() 
})

Then ('the details on the table should be updated for {word}', (user) => {
    webTablesPage.search_user(user)
    webTablesPage.validate_user(user)
})


Then ('the user clicks the {word} link', (link) => {
    linksPage.click_links(link)
})

Then ('the user gets the {word} response code', (code) => {
    linksPage.get_link_value(code)
})

Then ('the user uploads a file', () => {
    uploadDownloadPage.upload_file()
})

Then ('the user downloads a file', () => {
    uploadDownloadPage.download_file()
})

Then ('the user populates the form', () => {
    formPage.populate_form()
})

Then ('the details are validated', () => {
    formPage.validate_form()
})

Then ('the new {word} link is clicked', (link) => {
    browserWindowsPage.click_link(link)
})

Then ('the {} is opened', (link) => {
    browserWindowsPage.validate_click_link(link)
})

Then ('the slider value {int} is selected', (value) => {
    sliderPage.select_slider_value(value)
})

Then ('the slider value should be {int}', (value) => {
    sliderPage.validate_slider_value(value)
})

Then ('the user populates the field of the selection form', () => {
    selectMenuPage.select_menu_value()
})

Then ('the selection form is validated', () => {
    selectMenuPage.validate_menu_value()
})

Then ('the date is populated', () => {
    datePickerPage.select_date()
})

Then ('the date is validated', () => {
    datePickerPage.validate_select_date()
})



