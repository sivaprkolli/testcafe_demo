import {Selector, t} from 'testcafe';
//import XPathSelector from '../util/xpath'
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

    async typeValue(locator, data){
       await t.typeText(locator, data)
    }

    async login(username, password){
        await this.typeValue(this.loginFormElements.userNameInputBox, username)
        await this.typeValue(this.loginFormElements.passwordInputBox, password)
        await this.clickOnElement(this.loginFormElements.loginButton)
    }

}

//module.exports = new LoginPage();
export default new LoginPage();