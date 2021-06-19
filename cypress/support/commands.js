

Cypress.Commands.add('googleSearch', (text) => {
    cy.visit('/')
    cy.get('[name="q"]').type(text)
    cy.xpath('(//*[@value="Google Search"])[2]').click()
})