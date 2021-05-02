import "../../support/commands";

const upload = '#uploadFile'
const download = '#downloadButton'

export default class UploadDownloadPage {
    constructor() {
        //super()
    }

    static upload_file() {
        cy.get(upload).attachFile('table.json');
    }

    static download_file() {
        cy.get(download).click()
    }

}