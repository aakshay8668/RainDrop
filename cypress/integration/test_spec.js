import {Policy} from "../support/pages/poilcies_po";
import * as data from '../fixtures/testData.json'

const po = new Policy();

context('Search on Google for Policies link and download the first file from policies page', () => {
    
    before(() => {
        cy.googleSearch(data.link)
    })

    it('Go on the Raindrop policies file and download the file', () => {
        po.verifyLink(data.link)
        po.openFirstVerifiedLink()
        po.downloadPolicy(data.downloadingFolder, data.fileName)
        po.checkFileExistance()
        cy.readFile(data.downloadingFolder +"/"+ data.fileName).should('exist')
    })

    after(() => {
        cy.end()
    })
})