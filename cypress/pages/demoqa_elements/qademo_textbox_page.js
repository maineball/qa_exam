//This is the page for Elements - Textbox

import "../../support/commands";

const full_name = '#userName'
const email = '#userEmail'
const curr_address = '#currentAddress'
const perm_address = '#permanentAddress'
const submit = '#submit'
const display_name = '#name'
const display_email = '#email'
const display_curr_address = '#currentAddress'
const display_perm_address = '#permanentAddress'

export default class TextboxPage {
    constructor() {
        //super()
    }

    static populate_textbox() {
        cy.fixture('textbox.json').then(function(details){
        cy.get(full_name).type(details.full_name)
        .get(email).type(details.email)
        .get(curr_address).type(details.current_address)
        .get(perm_address).type(details.permanent_address)
        })
    }

    static submit_textbox() { 
        cy.get(submit).click()
    }

    static validate_textbox_output() { 
        cy.fixture('textbox.json').then(function(details){
        cy.get(display_name).should('be.visible').contains(details.full_name)
        .get(display_email).should('be.visible').contains(details.email)
        cy.get(display_curr_address).find(display_curr_address).contains(details.curr_address)
        //.get(display_curr_address).should('be.visible').contains(details.curr_address)
        //should('have.text', details.current_address)
        //.get(display_curr_address).should('be.visible').contains(details.current_address)
        //.get(display_perm_address).should('be.visible').contains(details.permanent_address)
        //should('have.text', details.permanent_address)
        })       
    }

}