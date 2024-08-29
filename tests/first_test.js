import { Selector } from 'testcafe';
import constants from './constants';

fixture('Login Module')
    .page `${constants.consts.url}`;

test('Verify login success', async t => {
    await t
        .typeText('#user-name', `${constants.consts.username}`)
        .typeText('#password', `${constants.consts.password}`)
        .click('#login-button')
        .expect(Selector('.title').innerText).eql('Products');
});

test('Verify list of products', async (t) => {
     
    const products_list = await Selector(".inventory_item_name").count;
    await console.log(products_list)
}); 