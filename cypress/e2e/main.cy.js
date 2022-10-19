describe('Loads the correct page', () => {
	const path = require("path");
	const downloadsFolder = Cypress.config("downloadsFolder");

	it('Home page has the heading and input box', () => {
		cy.visit('http://localhost:3000/')
		cy.get('.heading-wrapper').contains('QR code generator')
		cy.get('.heading-wrapper').contains('Generate QR code')
		cy.get('.input-block').should('exist')
	})

	it('Creates QR', () => {		
		cy.visit('http://localhost:3000/')

		// has input box and button on load
		cy.get('.input-block').should('exist')
		cy.get('.url-box').should('have.focus').type('google.com')
		cy.get('.primary-btn').should('have.text', 'Generate QR').click()

		// QR is generated and has the buttons and QR image
		cy.get('.qr-block-wrapper').should('exist')
		cy.get('.qr-block-wrapper').find("img").should('be.visible')

		// download button downloads image
		cy.get('.dld-btn').should('have.text', 'Download your QR').click()
		
		cy.readFile(path.join(downloadsFolder, 'download.png')).should("exist");

		// on clicking cancel it takes you back to generate components
		cy.get('.cancel-btn').click()
		cy.get('.input-block').should('exist')
		cy.get('.url-box').should('have.text', '')
	})

	it('Throws error when generating QR with empty string',() => {
		cy.visit('http://localhost:3000/')
		cy.get('.url-box').should('have.text', '')
		cy.get('.primary-btn').click()
		cy.on('window:alert', (str) => {
			expect(str).to.equal('enter text please')
		})
	})
})