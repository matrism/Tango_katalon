"use strict";
if (pages.login === undefined) {
    pages.login = new ftf.loginPage(_tf_config, element(By.css(".brand .navbar-brand")));
	pages.login.check = function(options) {
		var el;
		options = options || {};
		if(options.should_be_logged_in === undefined) {
			options.should_be_logged_in = true;
		}
		el = element(By.id("DSP-LOGOUT"));
		pages.login.scrollIntoView(el);
		expect(el.isPresent()).toBe(options.should_be_logged_in);
	};
}

module.exports = pages.login;
