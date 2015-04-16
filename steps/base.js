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
			if(wait === true) {
				wait = _tf_config._system_.wait_timeout;
			}
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
module.exports.waitForElementToBeDisplayed = function(elName, el, wait) {
	it (
		"Wait for " + elName + " to be displayed", function() {
			browser.wait (
				ExpectedConditions.visibilityOf(el),
				wait || _tf_config._system_.wait_timeout
			);
		}
	);
};
module.exports.waitForElementToBeClickable = function(elName, el, wait) {
	it (
		"Wait for " + elName + " to be displayed", function() {
			browser.wait (
				ExpectedConditions.elementToBeClickable(el),
				wait || _tf_config._system_.wait_timeout
			);
		}
	);
};
module.exports.selectRandomDropdownOption = function(elName, el, more) {
	var notes = [];
	if(more.skipIfNotPresent) {
		notes.push("skip if field is not present");
	}
	if(more.skipIfNotDisplayed) {
		notes.push("skip if field is not displayed");
	}
	if(notes.length === 0) {
		notes = "";
	}
	else {
		notes = " (" + notes.join(", ") + ")";
	}
	it (
		"Select a different random " + elName + notes, function() {
			pages.base.selectRandomDropdownOption(el, more);
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
