// logs into the tango application
// should be first spec to be run, as it logs in for all following tests
describe("Tango :: Login", function() {
    it("should login to SSO", function() {
        browser.ignoreSynchronization = true;
        browser.manage().timeouts().implicitlyWait(1000);

        browser.get('/');

        expect(element(by.id("username")).isPresent()).toBeTruthy();
        //console.log(element(by.id("username")));
        element(by.id('username')).sendKeys('tangoTest1');
        element(by.id('password')).sendKeys('P@ssw0rd78');
        element(by.css('button[type=submit]')).click();

        browser.ignoreSynchronization = false;
    });
});