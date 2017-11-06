"use strict";
var pph = require("../../../helpers/pph");
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
var pageStep = require('../../../helpers/basicPageStep');

steps.base = exports;

exports.itClickOnElement = function (el, elName) {
    it("Click on " + elName, function () {
        el.click();
        pages.base.waitForAjax();
    });
};

exports.itCheckIsRedirectToPage = function (pageName, expUrl) {
    it("User should be redirected to " + pageName, function () {
        browser.getCurrentUrl().then(function (url) {
            expect(url).toContain(expUrl);
        });
    });
};

exports.useEntityDataSlot = function (entityType, slotId) {
    it('Use "' + entityType + '" entity data slot "' + slotId + '"', function () {
        var slotsByType = (
            hash.entityDataSlotsByType = hash.entityDataSlotsByType || {}
        );

        var slotsOfThisType = slotsByType[entityType] = (
            slotsByType[entityType] || {}
        );

        var targetSlot = slotsOfThisType[slotId] = (
            slotsOfThisType[slotId] || {
                slotId: slotId,
            }
        );

        var currentSlotsByType = hash.currentEntityDataSlotsByType = (
            hash.currentEntityDataSlotsByType || {}
        );

        hash.currentEntityDataSlotsByType[entityType] = targetSlot;
    });
};

exports.clearCurrentEntityDataSlot = function (entityType) {
    it('Clear current "' + entityType + '" entity data slot', function () {
        var slot = hash.currentEntityDataSlotsByType[entityType];

        expect(slot).toBeTruthy();

        Object.keys(slot).forEach(function (key) {
            if (key === 'slotId') {
                return;
            }
            else {
                delete slot[key];
            }
        });
    });
};

exports.useBlankEntityDataSlot = function (entityType, slotId) {
    exports.useEntityDataSlot(entityType, slotId);
    exports.clearCurrentEntityDataSlot(entityType);
};

exports.goToHomePage = function () {
    it('Go to home page', function () {
        pages.base.open();
    });
};
module.exports.scrollIntoView = function (elName, el) {
    it(
        "Scroll '" + elName + "' into view", function () {
            pages.base.waitForAjax();
            pages.base.scrollIntoView(el);
            expect(el.isDisplayed()).toBeTruthy();
        }
    );
};
module.exports.hoverElement = function (elName, el) {
    it(
        "Hover " + elName, function () {
            pages.base.scrollIntoView(el);
            expect(el.isDisplayed()).toBeTruthy();
            browser.actions().mouseMove(el).perform();
        }
    );
};
module.exports.clickElement = function (elName, el, wait) {
    it(
        "Click " + elName, function () {
            pages.base.clickElement(elName, el, wait);
        }
    );
};
module.exports.waitForElementToBeDisplayed = function (elName, el, wait) {
    it(
        "Wait for " + elName + " to be displayed", function () {
            browser.wait(
                ExpectedConditions.visibilityOf(el),
                wait || _tf_config._system_.wait_timeout
            );
        }
    );
};
module.exports.waitForElementToBeClickable = function (elName, el, wait) {
    it(
        "Wait for " + elName + " to be clickable", function () {
            browser.wait(
                ExpectedConditions.elementToBeClickable(el),
                wait || _tf_config._system_.wait_timeout
            );
        }
    );
};
module.exports.selectRandomDropdownOption = function (elName, el, more) {
    var deferred = promise.defer();
    var notes = [];
    if (more.skipIfNotPresent) {
        notes.push("if present");
    }
    if (more.skipIfNotDisplayed) {
        notes.push("if displayed");
    }
    if (notes.length === 0) {
        notes = "";
    }
    else {
        notes = " (" + notes.join(", ") + ")";
    }
    it(
        "Select a different random " + elName + notes, function () {
            pages.base.selectRandomDropdownOption(el, more);
        }
    );
    return deferred.promise;
};

addBasicStep(exports, pages.base, 'Dirty check continue editing');

addBasicStep(exports, pages.base, 'Dirty check confirm cancellation');

module.exports.validateRedirection = function (pageName, expUrl) {
    it("User should be redirected to " + pageName, function () {
        browser.getCurrentUrl().then(function (url) {
            expect(url).toContain(expUrl);
        });
    });
};
exports.waitForAjax = function () {
    it('Wait for AJAX requests to finish', function () {
        pages.base.waitForAjax();
    });
};
exports.sleep = function (time) {
    it('Sleep for ' + time + 'ms', function () {
        browser.sleep(time);
    });
};
exports.refreshPage = function () {
    it('Refresh the page', function () {
        pages.base.refreshPage();
    });
};

exports.fail = function (description) {
    it(description || "This is a forced failure step", function () {
        throw new Error("This is a forced failure step.");
    });
};

pageStep('Pause');
pageStep('Orphan browser');

exports.clearDownloadsDirectory = function () {
    it('Clear downloads directory', function () {
        pages.base.clearDownloadsDirectory();
    });
};

exports.validateDownloadFileCount = function (value) {
    it('Validate download file count (' + value + ')', function () {
        pages.base.validateDownloadFileCount(value);
    });
};

exports.openTheNewTab = function (url) {
    it("Open a new tab with url", function () {
        pages.deal.waitForAjax();
        pages.base.openNewTab(url);
    });
};

exports.focusOnNewOpenedTab = function (i) {
    it("Focus on the new opened tab ", function () {
        pages.base.waitForAjax();
        pages.base.focusOnTheNewOpenedTab(i);
        console.log("tab" + i);
    });
};

exports.closeTheTabByIndex = function(index){
   it("Close the tab by index", function(){
      pages.base.closeTabByIndex(index);
   });
};

exports.scrollToBottom = function(index){
    it('Scroll to bottom and wait for Ajax', function(){
        for (let i = 0; i < index; i++) {
            browser.executeScript('window.scrollTo(0, document.body.scrollHeight)').then(function () {
                return pages.base.waitForAjax();
            });
        };
    });
};

exports.tabOpenfix = function(index){
    it('Tab Open Fix', function(){
        var el=element(by.css('.tg-main-search-nav input'));
        el.click();
    });
};

pageStep([
    'Open new tab',
    'Duplicate tab',
    'Switch to tab',
    'Close tab by index',
    'Close current tab and switch to',
    'Wait for modal',
    'Validate modal heading',
    'Validate modal message body',
    'Close modal',
    'Scroll to',
    'Validate tooltip message',
    'Expect modal pop up to be displayed',
    'Wait for modal',
    'Click modal primary button'
]);

addStep(exports, 'Store binding in test variable', function (binding, varName) {

    var idBinding = element(by.binding(binding));

    browser.wait(EC.visibilityOf(idBinding));

    idBinding.getText().then(function (value) {
        hash.testVariables[varName] = value;
    });

});
