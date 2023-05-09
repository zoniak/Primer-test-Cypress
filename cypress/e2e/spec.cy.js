

describe('My First Test', () => {
  it('clicks the link "a"', () => {
    cy.visit('https://carlosgozalbes.github.io/')
    cy.get('a').eq(1).click()
  })
})