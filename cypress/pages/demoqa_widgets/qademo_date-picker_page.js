import "../../support/commands";

const select_date = '#datePickerMonthYearInput'
const date_time = 'dateAndTimePickerInput'

export default class DatePickerPage {
    constructor() {
        //super()
    }

    static select_date() {
        cy.get(select_date).clear().type('10/21/1991')
        .get(date_time).clear().type('October 21, 1991 8:00 AM')
    }


    static validate_select_date() {
        cy.get(select_date).contains('10/21/1991')
        .get(date_time).contains('October 21, 1991 8:00 AM')
    }

        
}