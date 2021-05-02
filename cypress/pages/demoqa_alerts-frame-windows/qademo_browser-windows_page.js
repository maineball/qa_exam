import "../../support/commands";

const click_tab = '#tabButton'
const click_window = '#windowButton'
const click_window_msg = '#messageWindowButton'

export default class BrowserWindowsPage {
    constructor() {
        //super()
    }

    static click_link(link) {
        if (link == 'tab') {
            cy.get(click_tab).click()
        } else if (link == 'window') {
            cy.get(click_window).click()
        } else {
            cy.get(click_window_msg).click()
        }
    }

    static validate_click_link(link) {
        cy.wait(5000)
    //Accessing windows are not supported in Cypress
    }
}