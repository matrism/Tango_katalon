// logs into the tango application
// should be first spec to be run, as it logs in for all following tests
describe("Tango :: Login", function() {
    iit("should login to SSO", function() {
        browser.ignoreSynchronization = true;
        browser.manage().timeouts().implicitlyWait(10000);

        browser.get('/logout');

        element(by.id('username')).sendKeys('tangoTest1');
        element(by.id('password')).sendKeys('P@ssw0rd78');
        element(by.css('button[type=submit]')).click();

        browser.ignoreSynchronization = false;
    });
});