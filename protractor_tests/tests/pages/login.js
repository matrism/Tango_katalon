
var //config = require("config"),
    main_page = require("./main"),
    should_login = true,
    login_page = {
        url: "http://security-console.devportal-ci.dspdev.wmg.com/",//config.app_home
        username: {
            css: "#username",
            id: "username",
            value: ""
        },
        password: {
            css: "#password",
            id: "password",
            value: ""
        },
        button: {
            css: "button[type='submit']"
        },
        loginWith: function(login, pass) {
            this.username.value = login;
            this.password.value = pass;
        },
        check: function() {
            browser.ignoreSynchronization = true;
            browser.driver.get(main_page.url);
            browser.driver.getCurrentUrl().then(function(url) {
                
                //no login
                if (url.indexOf("/login") < 0) {
                    if (url.indexOf(main_page.url) < 0) {
                        browser.isElementPresent(by.css(main_page.h1.css)).then(function(exists) {
                            if (exists) {
                                element(by.css(main_page.h1.css)).then(function(elem) {
                                    elem.getText().then(function(text) {
                                        if (text.indexOf("503 Service Unavailable") >= 0) {
                                            throw(new Error("Service is not available"));
                                        } 
                                    });
                                });
                            } else {
                                should_login = false;
                                return true;
                            }
                        });
                    } else {
                        should_login = false;
                        return true;
                    }
                // login
                } 
            }).then(function() {
                if (should_login) {
                    login_page.loginWith('uaa_test_user01@wmgdsp.dev', 'No!daIN@124'); //login, password

                    element(by.id(login_page.username.id)).sendKeys(login_page.username.value); //login
                    element(by.id(login_page.password.id)).sendKeys(login_page.password.value);//password

                    browser.sleep(500);

                    element(by.css(login_page.button.css)).click();
                }

                browser.driver.getTitle().then(function(title) {
                    expect(title).toEqual('Security-console');
                });
            });
        }
    }; 

module.exports = login_page;