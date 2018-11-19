var PageObject = require("../modules/pageObject");
    
var loginPage = function(_tf_config, lg_element) {
    return new PageObject({
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
        doLogin: function(login_name, login_pass) {
            login_name = login_name || _tf_config.user_name;
            login_pass = login_pass || _tf_config.user_password;
            pages.login
                .setUsername(login_name)
                .setPassword(login_pass);

            browser.wait(function() {
                return pages.login.shouldWeLogin(login_name, login_pass);
            });

            pages.login.elems.login_button.click();
            return this;
        },
        shouldWeLogin: function(login_name, login_pass) {
            return pages.login.elems.password.getAttribute("value").then(function(text) {
                return text === login_pass;
            }) && pages.login.elems.username.getAttribute("value").then(function(text) {
                return text === login_name;
            });
        },
        login: function(login_name, login_pass) {
            browser.ignoreSynchronization = true;
            login_name = login_name || _tf_config.user_name;
            login_pass = login_pass || _tf_config.user_password;
            pages.login.elems.username.isPresent().then(function(present) {
                if (present) {
                    pages.login.doLogin(login_name, login_pass);
                } 
            });
            lg_element = lg_element || element(By.partialLinkText(login_name.toUpperCase()));
            expect(lg_element.isPresent()).toBe(true);
        }
   });
};

module.exports = loginPage;