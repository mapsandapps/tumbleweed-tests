context('Front page', () => {
  beforeEach(() => {
    cy.visit('https://elated-kalam-a3179f.netlify.app/')
  })

  it('loads and displays data', () => {
    cy.get('#masks-text')
      .should('not.contain', 'Loading')
      .find('.percent').should('not.contain', 'NaN')
    cy.get('#interviews')
      .should('not.contain', 'Interviews: 0')
    cy.get('#roadside-attractions')
      .should('not.contain', 'Roadside Attractions: 0')
  })

})
