For Cucumber Json Report
testcafe chrome tests/first_test.js --reported cucumber-json --reporter-json-folder=cucumber-json-reports
node report-generator.js

For Allure Report

testcafe chrome tests/second_test.js --reporter allure-plus
allure generate allure/allure-results --clean -o allure/allure-report && allure open allure/allure-report



extra info:

https://www.npmjs.com/package/testcafe-reporter-cucumber-json

npm install --save testcafe-reporter-cucumber-json --force


npm install --save-dev testcafe-reporter-allure-plus --force

https://www.npmjs.com/package/testcafe-reporter-allure-plus

https://www.npmjs.com/package/testcafe-reporter-allure?activeTab=readme

allure generate allure/allure-results --clean -o allure/allure-report && allure open allure/allure-report