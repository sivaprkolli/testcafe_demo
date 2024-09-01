import { Selector } from 'testcafe';
import login_page from './login_page';
import constants from './constants';
import SoftAssert from './softassert_test';
import {step} from 'testcafe-reporter-allure-plus/dist/utils';


// import { proxy, flush } from '@alfonso-presa/soft-assert';
// import { expect, assert } from 'chai';
// const softExpect = proxy(expect);
// const softAssert = proxy(assert);


fixture('Login Module')
.page `${constants.consts.url}`;

      
test.meta({
    severity: 'Severity.TRIVIAL',
    issue: 'TEST-ISSUE',
    description: 'A login discription',
    epic: 'Login Epic Ticket',
    feature: 'Login Feature Ticket',
    story: 'Login Story Ticket',
    suite: 'Login Example Group',
  })
("Verify login success with valid username and password", async t => {
        const softAssert = new SoftAssert();

        await login_page.login("standard_user", "secret_sauce")
        await softAssert.assertEqual(Selector('.title').innerText, 'product', "Both are not same")
        await softAssert.assertEqual(Selector('.title').innerText, 'products', "Both are not same")
        await softAssert.assertEqual(Selector('.title').innerText, 'Products', "Both are not same")
        await softAssert.stepAssertEqual("Verify products title",t, Selector('.title').innerText, 'Products', "Both are not same")

        /*
           await softAssert.assertEqual("Verify products title",Selector('.title').innerText, 'product', "Both are not same")
        await softAssert.assertEqual("Verify products title",Selector('.title').innerText, 'products', "Both are not same")
        await softAssert.assertEqual("Verify products title",t, Selector('.title').innerText, 'Products', "Both are not same")
        */
      });
