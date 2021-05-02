import "../../support/commands";

const created = '#created'
const no_content = '#no-content'
const moved = '#moved'
const bad_request = '#bad-request'
const unauthorized = '#unauthorized'
const forbidden = '#forbidden'
const invalid_url = '#invalid-url'
const link_response = '#linkResponse'

export default class LinksPage {
    constructor() {
        //super()
    }

    static click_links(link) {
        switch (link) {
            case 'Created':
                cy.get(created).click()
                break   
            case 'No-Content':
                cy.get(no_content).click()
                break
            case 'Moved':
                cy.get(moved).click()
                break
            case 'Bad-Request':
                cy.get(bad_request).click()
                break
            case 'Unauthorized':
                cy.get(unauthorized).click()
                break
            case 'Forbidden':
                cy.get(forbidden).click()
                break  
            case 'Not-Found':
                cy.get(invalid_url).click()
                break       
            default:
                return ('No page found')
                break      
        }
    }

    static get_link_value(code) {
        cy.get(link_response).should('be.visible').contains(code)
    }

}