context('Data dive', () => {
  beforeEach(() => {
    cy.visit('https://elated-kalam-a3179f.netlify.app/')
  })

  // TODO: test that endpoints are hit?
  // TODO: mock getting nothing from backend and test that app handles it gracefully

  it('loads and displays data', () => {
    cy.log('displays data in widgets')
    cy.get('#city-name')
      .should('not.contain', 'Loading')
    cy.get('#demographics')
      .should('not.contain', 'Loading')
    cy.get('#covid-nyt')
      .should('not.contain', 'Loading')
    cy.get('#race')
      .should('not.contain', 'Loading')

    cy.log('displays a map marker for every category')
    cy.get('.leaflet-marker-pane [src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png"]')
      .should('be.visible')
    cy.get('.leaflet-marker-pane [src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-grey.png"]')
      .should('be.visible')
    cy.get('.leaflet-marker-pane [src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png"]')
      .should('be.visible')
    cy.get('.leaflet-marker-pane [src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png"]')
      .should('be.visible')
  })
})
