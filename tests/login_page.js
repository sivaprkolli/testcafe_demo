import {Selector, t} from 'testcafe';
import {step} from 'testcafe-reporter-allure-plus/dist/utils';
class LoginPage{

    loginFormElements={
        userNameInputBox:"#user-name",
        passwordInputBox:"#password",
        loginButton:"#login-button"
    }

    productsPageElements={
        productsTitle:".title"
    }

    async clickOnElement(locator){
        await t.click(Selector(locator))
    }

    async stepClickOnElement(locator){
        await step("Click on button", t, t.click(locator));
    }

    async stepTypeValue(locator, data){
        await step("Type value in the inputbox", t, t.typeText(locator, data));
    }

    async typeValue(locator, data){
       await t.typeText(locator, data)
    }

    async login(username, password){
        await this.typeValue(this.loginFormElements.userNameInputBox, username)
        await this.typeValue(this.loginFormElements.passwordInputBox, password)
        await this.clickOnElement(this.loginFormElements.loginButton)
    }

    async loginUsingStep(username, password){
        await this.stepTypeValue(this.loginFormElements.userNameInputBox, username)
        await this.stepTypeValue(this.loginFormElements.passwordInputBox, password)
        await this.stepClickOnElement(this.loginFormElements.loginButton)
    }



}

//module.exports = new LoginPage();
export default new LoginPage();