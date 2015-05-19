"use strict";
var pph = require("../helpers/pph");
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
steps.base = exports;
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
			var notDisabledCssSelector = ":not([disabled], .disabled)";
			pages.base.scrollIntoView(el);
			if(wait === true) {
				wait = _tf_config._system_.wait_timeout;
			}
			if(!wait) {
				expect(pph.matchesCssSelector(el, notDisabledCssSelector)).toBe(true);
			}
			else {
				browser.wait (
					function() {
						return pph.matchesCssSelector(el, notDisabledCssSelector);
					},
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
		"Wait for " + elName + " to be clickable", function() {
			browser.wait (
				ExpectedConditions.elementToBeClickable(el),
				wait || _tf_config._system_.wait_timeout
			);
		}
	);
};
module.exports.selectRandomDropdownOption = function(elName, el, more) {
	var deferred = promise.defer();
	var notes = [];
	if(more.skipIfNotPresent) {
		notes.push("if present");
	}
	if(more.skipIfNotDisplayed) {
		notes.push("if displayed");
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
	return deferred.promise;
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
module.exports.validateRedirection = function(pageName, expUrl) {
	it ("User should be redirected to " + pageName, function() {
		browser.getCurrentUrl().then(function(url) {
			expect(url).toContain(expUrl);
		});
	});
};
exports.sleep = function(time) {
    it('Sleep for ' + time + 'ms', function() {
        browser.sleep(time);
    });
};
exports.refreshPage = function() {
    it('Refresh the page', function() {
        pages.base.refreshPage();
    });
};
