import { Selector } from 'testcafe';
import {step} from 'testcafe-reporter-allure-plus/dist/utils';
import login_page from './login_page';
import constants from './constants';

fixture('Login Module')
.page `${constants.consts.url}`;

      test("Verify login success with valid username and password", async t => {
        await login_page.login("standard_user", "secret_sauce")
      });
