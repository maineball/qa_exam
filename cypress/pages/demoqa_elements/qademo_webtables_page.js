import "../../support/commands";

const searchbox = '#searchBox'
const edit_record = '#edit-record-2'
const last_name = '#lastName'
const age = '#age'
const salary = '#salary'
const submit = '#submit'

export default class WebTablesPage {
    constructor() {
        //super()
    }

    static search_user(user) { 
        cy.get(searchbox).type(user)
        .get(edit_record).click()
        cy.wait(1000)
    }

    static edit_user() { 
        cy.fixture('table.json').then(function(details){
            cy.get(last_name).clear().type(details.last_name)
            .get(age).clear().type(details.age)
            .get(salary).clear().type(details.salary)
        })
        cy.get(submit).click()
        cy.get(searchbox).clear()

    }

    static validate_user() { 
        cy.fixture('table.json').then(function(details){
            cy.get(last_name).should('have.value', details.last_name)
            .get(age).should('have.value', details.age)
            .get(salary).should('have.value', details.salary)
        })
    }

}