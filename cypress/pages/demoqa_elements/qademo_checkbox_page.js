//This is the page for Elements - Checkbox

import "../../support/commands";

const checkbox_command = '//*[@id="tree-node"]/ol/li/ol/li[1]/ol/li[2]/span/label/span[1]/svg'
const checkbox_vue = '//*[@id="tree-node"]/ol/li/ol/li[2]/ol/li[1]/ol/li[3]/span/label/span[1]/svg'
const checkbox_classified = '//*[@id="tree-node"]/ol/li/ol/li[2]/ol/li[2]/ol/li[3]/span/label/span[1]/svg'
const checkbox_general = '//*[@id="tree-node"]/ol/li/ol/li[2]/ol/li[2]/ol/li[4]/span/label/span[1]/svg'
const checkbox_excel = '//*[@id="tree-node"]/ol/li/ol/li[3]/ol/li[2]/span/label/span[1]/svg'


export default class CheckboxPage {
    constructor() {
        //super()
    }

    static check_boxes() {
        cy.get(checkbox_command).check()
        cy.get(checkbox_vue).check()
        cy.get(checkbox_classified).check()
        cy.get(checkbox_general).check()
        cy.get(checkbox_excel).check()
    }
        
    static validate_check_boxes() {
        cy.get(checkbox_command).should('be.checked')
        cy.get(checkbox_vue).should('be.checked')
        cy.get(checkbox_classified).should('be.checked')
        cy.get(checkbox_general).should('be.checked')
        cy.get(checkbox_excel).should('be.checked')
    }


}