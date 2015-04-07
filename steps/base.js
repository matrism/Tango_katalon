"use strict";
if(steps.base === undefined) {
	module.exports = steps.base = {};
}
// Interaction.
module.exports.scrollIntoView = function(elName, el) {
	it (
		"Scroll '" + elName + "' into view", function() {
			pages.base.scrollIntoView(el);
			expect(el.isVisible()).toBeTruthy();
		}
	);
};
module.exports.hoverElement = function(elName, el) {
	it (
		"Hover " + elName, function() {
			pages.base.scrollIntoView(el);
			expect(el.isVisible()).toBeTruthy();
			protractor.actions().mouseMove(el).perform();
		}
	);
};
module.exports.clickElement = function(elName, el) {
	it (
		"Click " + elName, function() {
			pages.base.scrollIntoView(el);
			expect(el.getAttribute("disabled")).toBeFalsy();
			el.click();
			pages.base.waitForAjax();
		}
	);
};
// Validation.
module.exports.validateRedirection = function(pageName, expUrl) {
	it ("User should be redirected to " + pageName, function() {
		browser.getCurrentUrl().then(function(url) {
			expect(url).toContain(expUrl);
		});
	});
};
