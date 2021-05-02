import "../../support/commands";

const select_value = '#withOptGroup'
const select_one = '#selectOne'
const old_style = '#oldSelectMenu'
const multi_select = '#cars'

export default class SelectMenuPage {
    constructor() {
        //super()
    }
     
    
    static select_menu_value() {
        cy.fixture('select-menu.json').then(function(menu){
        cy.get(select_value).select(menu.select_value)
        .get(select_one).select(menu.select_one)
        .get(old_style).select(menu.old_style)
        .get(multi_select).select(menu.multi_select[0]).select(menu.multi_select[1])
        })
    }

    static validate_menu_value(value1, value2) {
        cy.fixture('select-menu.json').then(function(menu){
        cy.get(select_value).invoke('val').then((text) => {
            expect(menu.select_value).to.equal(text)})
        cy.get(select_value).invoke('val').then((text) => {
            expect(menu.select_one).to.equal(text)})    
        cy.get(old_style).invoke('val').then((text) => {
            expect(menu.old_style).to.equal(text)})
        cy.get(multi_select).invoke('val').then((text) => {
            expect(menu.multi_select[0]).contains(text)})    
        cy.get(multi_select).invoke('val').then((text) => {
            expect(menu.multi_select[1]).contains(text)})  
        })

    }


}