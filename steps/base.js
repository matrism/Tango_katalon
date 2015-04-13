"use strict";
var ExpectedConditions = protractor.ExpectedConditions;
if(steps.base === undefined) {
	module.exports = steps.base = {};
}
// Interaction.
module.exports.scrollIntoView = function(elName, el) {
	it (
		"Scroll '" + elName + "' into view", function() {
			pages.base.scrollIntoView(el);
			expect(el.isDisplayed()).toBeTruthy();
		}
	);
};
module.exports.hoverElement = function(elName, el) {
	it (
		"Hover " + elName, function() {
			pages.base.scrollIntoView(el);
			expect(el.isDisplayed()).toBeTruthy();
			browser.actions().mouseMove(el).perform();
		}
	);
};
module.exports.clickElement = function(elName, el, wait) {
	it (
		"Click " + elName, function() {
			pages.base.scrollIntoView(el);
			if(!wait) {
				expect(el.getAttribute("disabled")).toBeFalsy();
			}
			else {
				browser.wait (
					ExpectedConditions.elementToBeClickable(el),
					wait
				);
			}
			el.click();
			pages.base.waitForAjax();
		}
	);
};
module.exports.waitForElementToBeDisplayed = function(elName, el) {
	it (
		"Wait for " + elName + " to be displayed", function() {
			browser.wait (
				ExpectedConditions.visibilityOf(el),
				_tf_config._system_.wait_timeout
			);
		}
	);
};
module.exports.dirtyCheckContinueEditing = function() {
	steps.base.clickElement (
		"continue editing button",
		pages.base.dirtyCheckContinueEditingButton()
	);
};
module.exports.dirtyCheckConfirmCancellation = function() {
	steps.base.clickElement (
		"confirm cancellation button",
		pages.base.dirtyCheckConfirmCancellationButton()
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
