import "../../support/commands";

const slider = 'input[type=range]'
const slider_value = '#sliderValue'

export default class SliderPage {
    constructor() {
        //super()
    }
        
    static select_slider_value(value) {
        cy.get(slider).invoke('val', value).trigger('change')
    }

    static validate_slider_value(value) {
        cy.get(slider_value).invoke('val').then((text) => {
        expect(value).to.equal(text);    
        })
    }


//



    static generate_signing_page(stub) {
        this.fill_password(stub)
        this.fill_bank_details()
        this.fill_card_details()
        this.check_edoc_consent()
        if (stub == 'accepted') {
            this.click_unaffordable_no()
            this.skip_verify_email()
            this.submit_signing_page_accptd()
            this.fill_digital_sign()
            this.fill_pin()
            this.accept_loan()
            this.submit_loan()
        } else {
            this.submit_signing_page()
        }
    }

    static click_unaffordable_no() { //accepted flow
        cy.get(unaffordable).click()
    }
    
    static fill_password(stub) {
        cy.fixture('customer.json').then(function(customer){
        if (stub == 'accepted') {
            cy.get(password_accptd).type(customer.password)
            .get(confirm_pw_accptd).type(customer.password)
        } else {
            cy.get(password).type(customer.password)
            .get(confirm_password).type(customer.password)
            }
        })
    }

    static fill_bank_details() {
        cy.fixture('bank.details.json').then(function(bank){
            cy.get(account_holder).type(bank.account_name)
            .get(sort_code_one).type(bank.sort_code[0])
            .get(sort_code_two).type(bank.sort_code[1])
            .get(sort_code_three).type(bank.sort_code[2])
            .get(account_number).type(bank.account_number)
        })
    }

    static fill_card_details() {
        cy.fixture('bank.details.json').then(function(bank){
            cy.get(card_holder).type(bank.account_name)
            .get(card_number).type(bank.card_number)
            .get(expiry_month).select(bank.expiry_date[0])
            .get(expiry_year).select(bank.expiry_date[1])
            .get(cvv).type(bank.cvv)
        })
    }

    static check_edoc_consent() {
        cy.get(edoc_consent).click()
    }

    static check_edoc_consent_accepted() {
        cy.get(edoc_consent_accptd).click()
    }

    static skip_verify_email() {
        cy.get(skip_verify_email).click()
    }

    static submit_signing_page() {
        cy.get(submit).click()
        .wait(20000) //20 sec
    }

    static submit_signing_page_accptd() {
        cy.get(submit_accptd).click()
    }

    static fill_digital_sign() {
        cy.fixture('customer.json').then(function(customer){
            cy.get(digital_sign).type(customer.last_name)
        })
    }
    
    static fill_pin() {
        cy.get(hiddenpin).invoke('val').then(text => {
        const hidden = text
        cy.get(pin).type(hidden) 
        })
    }

    static accept_loan() {
        cy.get(accept_loan).click({force: true})
    }

    static submit_loan() {
        cy.get(submit_loan).should('be.visible').click()
    }

}