/// <reference types="cypress" />
import Elements,{Fields} from '../../support/DomElements/Elements'
describe("Verify filter feature",()=>{

    it("When we click on page then the same game opened",()=>{
        cy.visit("https://hub88.io/games")
         cy.get(Fields.gamefirst).click()
         cy.get(Fields.gameName).should('have.text','Baccarat')
    })

    it("Verify total numbers of games loaded at the first when we open the page and when we click on Load more button",()=>{
        cy.visit("https://hub88.io/games").then(()=>{
            cy.get(Fields.contOfGames).should('have.length',20) 
        })
        cy.get(Fields.LoadMorebtn).click()
          .then(()=>{
            cy.get(Fields.contOfGames).should('have.length',40)
          })


    })

    it("filter game on the basis of filter and provider options which return no game",()=>{
        cy.visit("https://hub88.io/games")
        cy.get(Fields.providerbtn).click()
         .then(()=>{
            cy.get(Fields.TrueLabGaming).scrollIntoView().should('be.visible')
            cy.get(Fields.TrueLabGaming).scrollIntoView().click() 
            cy.get(Fields.TotalGameProvidedByTrueLab).should('have.length',17)
            cy.get(Fields.providerNameValue).should('have.text', 'TrueLab')

         })
         cy.get(Fields.filterOption).click()
         .then(()=>{
            cy.get(Fields.filterOptionBaccarat).scrollIntoView().should('be.visible')
            cy.get(Fields.filterOptionBaccarat).scrollIntoView().click() 
            cy.get(Fields.noGameFound).should('have.text',"We couldn't find the game you were looking for.")
         })

    })



})