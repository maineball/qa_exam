import "../../support/commands";

const click_tab = '#tabButton'
const click_window = '#windowButton'
const click_window_msg = '#messageWindowButton'

export default class BrowserWindowsPage {
    constructor() {
        //super()
    }

    static click_link() {
        if (link == 'tab') {
//
        } else if (link == 'window') {
        } else {
//
        }
    }

    static populate_form() {
        cy.fixture('form.json').then(function(form){
            cy.get(first_name).type(form.first_name)
            cy.get(last_name).type(form.last_name)
            cy.get(email).type(form.email)
            cy.get(gender).click({force: true})
            cy.get(mobile).type(form.mobile)
            // cy.get('#datepicker').click()
            //.type(form.dob)
            // cy.get(dob).invoke('val').then((text) => {
            //     expect('PUT Bday').to.equal(text);
            // })
            cy.get(upload).attachFile('picture.jpeg')
            cy.get(submit).type(form.first_name)
            })
    }

    static validate_form() {
        cy.fixture('form.json').then(function(form){
            cy.get('table').contains('td', form.first_name)
            cy.get('table').contains('td', form.last_name)
            cy.get('table').contains('td', form.email)
            cy.get('table').contains('td', form.gender)
            cy.get('table').contains('td', form.mobile)
            // cy.get('table').contains('td', form.dob)
            cy.get('table').contains('td', form.picture)

    // //click the date picker
    // cy.get('#datepicker').click();
    // //choose previous month
    // cy.contains('Prev').click();
    // //choose next month 
    // cy.contains('Next').click();
    // //choose date 24
    // cy.contains('24').click();

        })
    }

}