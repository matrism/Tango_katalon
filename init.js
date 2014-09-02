'use strict';

describe("hello-protractor", function() {
    // mock the controller and include $injector to inject the mocks
    beforeEach(function() {
        //browser.wait(function() {
        //    console.log("here");
        //    element(by.id('username')).sendKeys('tangoTest1');
        //    element(by.id('password')).sendKeys('p@ssw0rd77');
        //    element(by.buttonText("Login")).click();
        //}, 2000);

        var currentUrl,
               urlRegex = "sso";



        var blah = browser.getCurrentUrl().then(function (url) {
            console.log("123");
            currentUrl = url;
        }).then(function() {
            console.log("here");
            return browser.wait(function() {
                return browser.getCurrentUrl().then(function(url) {
                    return urlRegex.test(url);
                });
            });
        });

        console.log(blah);
    });

    describe("index", function() {
        it("should display the correct title", function() {
            // in the video, I used the protractor.getInstance() which was removed shortly thereafter in favor of this browser approach
            browser.get('/#');
            //expect(browser.getTitle()).toBe('Music Publishing');
        });
    });
});