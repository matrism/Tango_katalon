"use strict";
if (steps.base === undefined) {
    steps.base = {
		scrollIntoView: function(elName, el) {
			it (
				"Scroll '" + elName + "' into view", function() {
					pages.base.scrollIntoView(el);
					expect(el.isVisible()).toBeTruthy();
				}
			);
		},
        itClickOnElement: function(elName, el, options) {
			options = options || {};
            it ("Click on " + elName, function() {
				pages.base.scrollIntoView(el);
				expect(el.getAttribute("disabled")).toBeFalsy();
				el.click();
                pages.base.waitForAjax();
            });
        },
        itCheckIsRedirectToPage: function(pageName, expUrl) {
            it ("User should be redirected to " + pageName, function() {
                browser.getCurrentUrl().then(function(url) {
                    expect(url).toContain(expUrl);
                });
            });
        }
    };
}

module.exports = steps.base;
