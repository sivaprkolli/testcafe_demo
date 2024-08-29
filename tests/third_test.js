import { Selector } from 'testcafe';
import {step} from 'testcafe-reporter-allure-plus/dist/utils';

fixture('Login Module')
    .page `https://devexpress.github.io/testcafe/example/`;

    test.meta({
        severity: 'Severity.TRIVIAL',
        issue: 'TEST-ISSUE',
        description: 'An example discription',
        epic: 'Example Epic Ticket',
        feature: 'Example Feature Ticket',
        story: 'Example Story Ticket',
        suite: 'Main Example Group',
        // ... any other key: value property as custom metadata
      })
      ("Example test with steps", async t => {
            await step("Add developer name to form", t, 
          t.typeText("#developer-name", "Jhon Smith")
        );
            await step("Submit form and check result", t,
          t.click("#submit-button")
            .expect(Selector("#article-header").innerText)
            .eql("Thank you, John Smith!")
        );
      });
