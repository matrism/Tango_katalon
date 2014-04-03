var PageObject = require("../modules/pageObject");
    
var loginPage = function(_tf_config) {
    return new PageObject({
        url: _tf_config.urls.app_url,
        locators: {
            username: { css: "#username" },
            password: { css: "#password" },
            login_button: { css: "button[type='submit']" }
        },
        setUsername: function(username) {
            pages.login.elems.username.clear();
            pages.login.elems.username.sendKeys(username);
            return this;
        },
        setPassword: function(password) {
            pages.login.elems.password.clear();
            pages.login.elems.password.sendKeys(password);
            return this;
        },
        doLogin: function() {
            pages.login
                .setUsername(_tf_config.user_name)
                .setPassword(_tf_config.user_password);

            browser.wait(pages.login.shouldWeLogin);

            pages.login.elems.login_button.click();
            return this;
        },
        shouldWeLogin: function() {
            return pages.login.elems.password.getAttribute("value").then(function(text) {
                return text === _tf_config.user_password;
            }) && pages.login.elems.username.getAttribute("value").then(function(text) {
                return text === _tf_config.user_name;
            });
        },
        login: function() {
            pages.login.open(true);
            pages.login.elems.username.isPresent().then(function(present) {
                if (present) {
                    pages.login.doLogin();
                } 
            });
            expect(element(By.xpath("//span[contains(text(), " + _tf_config.user_name + ")]")).isPresent()).toBe(true);
        }
    });
};

module.exports = loginPage;
