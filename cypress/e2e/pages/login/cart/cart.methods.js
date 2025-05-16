
import { Logger } from "../../../util/logger";
import { CommonPageMethods } from "../../common-page/common-page.methods";
import { LoginMethods } from "../login.methods";
import { CartElements } from "./cart.elements";

//Nazareth Agüero Alvarado
export class CartMethods{
    static clickOnDeleteLink(productName){
        CartElements.links.delete(productName).click();
    }

    static verifyProductAdded(productName){
        CartElements.links.delete(productName).should("be.visible")
    }

    static verifyCartPageIsShown(){
        cy.url().should("include", "cart.html")
    }

    static clickOnPlaceOrderButton(){
        CartElements.buttons.placeOrder.click()
    }

   static deleteProducts() {
        cy.intercept('POST', 'https://api.demoblaze.com/deleteitem').as('deleteItem')
        cy.get('a[onclick*="deleteItem"]').each(($link) => {
        cy.wrap($link).click(); // 
        cy.wait('@deleteItem'); 
      });
    }

    static empyCart(username, password){
        Logger.subStep("Navigate to Demoblaze application")
        CommonPageMethods.navigateToDemoBlaze();
        Logger.subStep("Log out")
        CommonPageMethods.logout();
        Logger.subStep("Clic on Home option")
        CommonPageMethods.clickOnHomeOption();
        Logger.subStep("Clic on Login option")
        CommonPageMethods.clickOnLoginOption();
        Logger.subStep('Login with his credentials ' + username, password)
        LoginMethods.login(username, password)
        Logger.subStep("Clic on Cart option")
        CommonPageMethods.clickOnCartOption();
        Logger.subStep("Delete products from cart")
        this.deleteProducts();
    }
}