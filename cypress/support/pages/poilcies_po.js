import * as PolicyPageUI from '../interface/policies_ui';

export class Policy {
  
    verifyLink(link) {
        cy.xpath(PolicyPageUI.link).should('have.attr', 'href').and('include', link)
    }

    openFirstVerifiedLink() {
        cy.xpath(PolicyPageUI.link).click()
    }

    downloadPolicy(folder, name) {
        cy.get(PolicyPageUI.risk_link).should('have.attr', 'href').and('include', 'pdf')
        .then((href) => {
            cy.downloadFile(href, folder, name)
            console.log(href)
        })
    }

    checkFileExistance(){
        
    }
}
  