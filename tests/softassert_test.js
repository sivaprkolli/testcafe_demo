import { t } from 'testcafe';
import {step} from 'testcafe-reporter-allure-plus/dist/utils';

class SoftAssert {
    constructor() {
        this.errors = [];
    }

    async assertEqual(actual, expected, message) {
        try {
            await t.expect(actual).eql(expected, message);
        } catch (error) {
            this.errors.push(error);
        }
    }

    async stepAssertEqual(verify_message, t, actual, expected, message) {
        try {
            //await t.expect(actual).eql(expected, message);
            await step(verify_message, t, t.expect(actual).eql(expected, message));
        } catch (error) {
            this.errors.push(error);
        }
    }

    async assertContains(actual, expected, message) {
        try {
            await t.expect(actual).contains(expected, message);
        } catch (error) {
            this.errors.push(error);
        }
    }


    async assert_all() {
        if (this.errors.length > 0) {
            throw new Error(this.errors.map(e => e.errMsg).join('\n'));
        }
    }
}

export default SoftAssert;
