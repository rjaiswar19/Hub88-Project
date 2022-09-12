Introduction :
E2E test automation is proprietary API/UI automation framework for Hub88 ,its designed to cover functional testing using Cypress

Installation :
 Install Node.Js
 Git clone - git clone https://github.com/rjaiswar19/Hub88-Project.git
 Cypress installation - npm install
 
Project Structure:
 cypress/fixtures :Fixtures package are used to store all static code, data and configuration that can be used by our test cases.
 cypress/fixtures/TestData : Static test data that can be used by test cases in respective product folder.
 cypress/fixtures/Utility : Various shared utilities for test suite execution
 cypress/e2e/APIAutomation :Integration package holds all API Automation Test cases. Test cases stored under APIAUtomation folder by default available under Cypress Test Runner
 cypress/e2e/ UIAutomation: Automation Test Cases of UI Automation Test Cases.
 cypress/support : Holds all page classes that are used by our test cases
 cypress/support/DomElements : Element identifier like CSS Selector page classes Page.
 cypress.config.js : This file is used to store the projectId and any configuration values from available Configuration options in Cypress and specrunner details
 package.json : This file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies. It can also contain other metadata such as a project description, the version of the project in a particular distribution, license information, even configuration data. Scripts tag under this files have the Keys that are used while exeucting on CI platform.
 
Test Case Writing:
The design of individual tests was strongly influenced by the Page Object Model, which is a common design pattern used in browser automation testing. The pattern requires three types of classes:
Page classes, which expose an API to locate, manipulate, and retrieve the state of elements on the page. Support Classes, which contain methods to avoid code redundancy, such methods are written by clubbing set of actions frequently performed in a series. Test classes under Integration, which perform the UI manipulation to execute the tests and evaluate the results using the page classes.


Execution:
Locally
 Open Cypress Test Runner using command - npx cypress open.
 All available test cases will get displayed in the Test Runner.
 Double click on the Test Cases user wants to execute.

