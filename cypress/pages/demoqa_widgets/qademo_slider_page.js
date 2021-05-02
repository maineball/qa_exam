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

}