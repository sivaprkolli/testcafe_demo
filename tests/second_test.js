import { Selector,XPathSelector } from 'testcafe';
import constants from './constants';
import {step} from 'testcafe-reporter-allure-plus/dist/utils';

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
        // ... any other key: value property as custom metadata
      })
      ('Verify login success', async t => {
      await step("Type value in the username inputbox", t, t.typeText('#user-name', "standard_user"));
      await step("Type value in the password inputbox", t, t.typeText('#password', "secret_sauce"));
      await step("Click on login button", t, t.click('#login-button'));
      await step("verify products header", t, t.expect(Selector('.title').innerText).eql('Products'));
});

test('Verify list of products', async (t) => {
      await step("Type value in the username inputbox", t, t.typeText('#user-name', "standard_user"));
      await step("Type value in the password inputbox", t, t.typeText('#password', "secret_sauce"));
      await step("Click on login button", t, t.click('#login-button'));
    const products_list = await Selector(".inventory_item_name").count;
    await console.log(products_list)
}); 