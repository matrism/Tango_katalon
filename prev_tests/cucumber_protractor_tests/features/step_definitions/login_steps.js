// Use the external Chai As Promised to deal with resolving promises in
// expectations.
module.exports = function() {
    var main_page = require('../support/pages/main_page'),
    login_page = require('../support/pages/login_page');
    this.World = require('../support/world').World,

    this.Given(/^user is logged in$/, function(/*text, login, password,*/ next) {
        var W = this;
        
        this.visit(main_page.url).then(function() {
            W.browser.driver.getCurrentUrl().then(function(url) {
                if (url.indexOf("/login") < 0) {
                    W.browser.driver.isElementPresent(W.By.css(main_page.h1.css)).then(function(exists) {
                        if (exists) {
                            W.getElement(main_page.h1.css, "css").then(function(elem) {
                                elem.getText().then(function(text) {
                                    if (text.indexOf("503 Service Unavailable") >= 0) {
                                        next(new Error("Service is not available"));
                                    } 
                                });
                            });
                        } 
                    });
                    if (next) {
                        next();
                    }
                } 
            });
        }).then(function(){
            login_page.loginWith('uaa_test_user01@wmgdsp.dev', 'No!daIN@124'); //login, password

            W.getElement(login_page.username.id, 'id').sendKeys(login_page.username.value); //login
            W.getElement(login_page.password.id, 'id').sendKeys(login_page.password.value);//password
            
            W.browser.sleep(500);

            W.getElement(login_page.button.css, 'css').click();
            
            W.browser.driver.getTitle().then(function(title) {
                W.expect(title).to.equal('Security-console');
            });
        }).then(function() {
            if (next) {
                next();
            }
        });
    });
    
    this.When(/^click on user icon menu$/, function() {
        by;
    }) 
};