import { SignUpElements } from "./signup.elements";
import { CommonPageMethods } from "../../common-page/common-page.methods";
export class SignupMethods{
    static insertUsername(username){
        SignUpElements.textboxes.username.invoke("val",username);
    }

    static insertPassword(password){
        SignUpElements.textboxes.password.invoke("val",password);
    }

    static clickOnSignupButton(){
        SignUpElements.buttons.signup.click();
    }

    static signup(username, password){
        this.insertUsername(username);
        this.insertPassword(password);
        this.clickOnSignupButton();
    }

    static verifySignupSuccessfulMessageIsDisplayed() {
    CommonPageMethods.verifyAlert("Sign up successful.");
    }

    static verifyThatThisUserAlreadyExistsMessageIsDisplayed() {
    CommonPageMethods.verifyAlert("This user already exist.");
    }
}