/// <reference types ="Cypress" />

//This is a test and it's going to work :)... eventually
//This is a test and it's going to work :)... eventually
describe("aS", () => {
  beforeEach(() => {
    cy.visit("https://en.wikipedia.org/wiki/Main_Page");
  });

  it("aa", () => {
    cy.xpath('//div[@id="mp-tfa"]/p[1]').click();
    cy.url().should("eq", "https://en.wikipedia.org/wiki/Main_Page");
    cy.xpath('//div[@id="mp-tfa"]/p[1]').click();
    cy.url().should("eq", "https://en.wikipedia.org/wiki/Main_Page");
    cy.xpath('//div[@id="mp-tfa"]/p[1]/b[1]/a[1]').click();
    cy.url().should("eq", "https://en.wikipedia.org/wiki/Main_Page");
    cy.xpath('//div[@id="mw-content-text"]/div[1]/p[2]').click();
    cy.url().should(
      "eq",
      "https://en.wikipedia.org/wiki/Constantine_III_(Western_Roman_emperor)"
    );
    cy.xpath('//div[@id="mw-content-text"]/div[1]/p[2]/a[4]').click();
    cy.url().should(
      "eq",
      "https://en.wikipedia.org/wiki/Constantine_III_(Western_Roman_emperor)"
    );
  });
});

