'use strict';

steps.scopeDelivery = exports;

exports.deliverWork = function () {
    it('Click "Deliver Work to Deal / Scope" button', function () {
        pages.scopeDelivery.deliverWork();
    });
};

addStep(
    exports, 'Search for deal from slot for contribution', function (i, slot) {
        pages.scopeDelivery.searchDealsForContribution(
            i, hash.entityDataSlotsByType.deal[slot].id
        );
    }
);

exports.searchForDealFromDealSlotForAllContributions = function (dealSlot) {
    it(
        'Search for deal from slot "' + dealSlot + '" for all contributions',
        function () {
            pages.scopeDelivery.searchDealsForAllContributions(
                hash.entityDataSlotsByType.deal[dealSlot].id
            );
        }
    );
};

exports.searchDealsForAllContributions = function (terms) {
    it('Search deals for all contributions (' + terms + ')', function () {
        pages.scopeDelivery.searchDealsForAllContributions(terms);
    });
};

exports.searchDealsForContribution = function (contributionIndex, terms) {
    it('Search deals (' + terms + ') ' +
        'for contribution #' + (contributionIndex + 1), function () {
        pages.scopeDelivery.searchDealsForContribution(contributionIndex, terms);
    });
};

exports.searchDealsForContributionFromDealSlot = function (i, dealSlot) {
    it('Search deals for contribution #' + (i + 1), function () {
        pages.scopeDelivery.searchDealsForContribution(i, hash.entityDataSlotsByType.deal[dealSlot].id);
    });
};


exports.selectDealSearchResultByIndex = function (i) {
    it('Select deal search result #' + (i + 1), function () {
        pages.scopeDelivery.selectDealSearchResultByIndex(i);
    });
};

addBasicStep(exports, pages.scopeDelivery, 'Validate checkbox state');

exports.clickScopeDeliveryCheckbox = function (contributionIndex, scopeIndex) {
    it(
        'Click scope delivery checkbox #' + (scopeIndex + 1) +
        ' for contribution #' + (contributionIndex + 1), function () {
            pages.scopeDelivery.clickScopeDeliveryCheckbox(
                contributionIndex, scopeIndex
            );
        }
    );
};

exports.clickScopeDeliveryCheckbox = function (contributionIndex, scopeIndex) {
    it(
        'Click scope delivery checkbox #' + (scopeIndex + 1) +
        ' for contribution #' + (contributionIndex + 1), function () {
            pages.scopeDelivery.clickScopeDeliveryCheckbox(
                contributionIndex, scopeIndex
            );
        }
    );
};

exports.save = function () {
    it('Save Scope Delivery changes', function () {
        pages.scopeDelivery.save();
    });
};

exports.validateContributionDealIdFromDealSlot = function (i, dealSlot) {
    it('Validate deal ID of contribution #' + (i + 1), function () {
        pages.scopeDelivery.validateContributionDealId(
            i, hash.entityDataSlotsByType.deal[dealSlot].id
        );
    });
};

exports.validateContributionScopeName = function (i, name) {
    it('Validate deal scope name of contribution #' + (i + 1), function () {
        pages.scopeDelivery.validateContributionScopeName(i, name);
    });
};

exports.updateScopeDelivery = function () {
    it("Click on update scope delivery button ", function () {
        pages.scopeDelivery.updateTheScopeDelivery();
    });
};

exports.clickOnRemoveScopeDelivery = function () {
    it("Click on remove button to remove the scope delivery ", function () {
        pages.scopeDelivery.clickOnTheRemoveScopeDelivery();
    });
};

exports.checkErrorMessageScopeDeliveryConflict = function (message) {
    it("Check the error message for scope delivery conflict ", function () {
        pages.scopeDelivery.checkTheErrorMessageScopeDeliveryConflict();
    });
};

addBasicStep(exports, pages.scopeDelivery, 'Expect validation message');


exports.getDealNumberCreatedInTabNumberAndUseToWorkDelivery = function (i) {
    it("Get deal number created in other tab and use it to work delivery ", function () {
        pages.deal.elems.dealBriefNumber.getText().then(function (promise) {
            console.log("Contract brief number promise is " + promise);
            pages.deal.printTheDealNumber();
            pages.base.focusOnTheNewOpenedTab(i);
            pages.deal.printTheDealNumber();
            pages.scopeDelivery.searchDealsForContribution(0, promise);
            pages.scopeDelivery.selectDealSearchResultByIndex(0);
            pages.scopeDelivery.clickScopeDeliveryCheckbox(0, 0);
            pages.scopeDelivery.clickScopeDeliveryCheckbox(0, 1);
            pages.scopeDelivery.save();
        });
    });
};

exports.getDealNumberCreatedInTabNumberAndUseToWorkDeliveryWithScopeIndex = function (i, indexMin, indexMax) {
    it("Get deal number created in other tab and use it to work delivery ", function () {
        pages.deal.elems.dealBriefNumber.getText().then(function (promise) {
            console.log("Contract brief number promise is " + promise);
            pages.deal.printTheDealNumber();
            pages.base.focusOnTheNewOpenedTab(i);
            pages.deal.printTheDealNumber();
            pages.scopeDelivery.searchDealsForContribution(0, promise);
            pages.scopeDelivery.selectDealSearchResultByIndex(0);
            for (var j = indexMin; j <= indexMax; j++) {
                pages.scopeDelivery.clickScopeDeliveryCheckbox(0, indexMax);
            }
            pages.scopeDelivery.save();
        });
    });
};

exports.getDealNumberCreatedInTabNumberAndUseToWorkDeliveryWithoutSave = function (i) {
    it("Get deal number created in other tab and use it to work delivery ", function () {
        pages.deal.elems.dealBriefNumber.getText().then(function (promise) {
            console.log("Contract brief number promise is " + promise);
            pages.deal.printTheDealNumber();
            pages.base.focusOnTheNewOpenedTab(i);
            pages.deal.printTheDealNumber();
            pages.scopeDelivery.searchDealsForContribution(0, promise);
            pages.scopeDelivery.selectDealSearchResultByIndex(0);
            pages.scopeDelivery.clickScopeDeliveryCheckbox(0, 0);
        });
    });
};


exports.getDealNumberCreatedInTabNumberAndUseToWorkDeliveryWithOneScope = function (i) {
    it("Get deal number created in other tab and use it to work delivery ", function () {
        pages.deal.elems.dealBriefNumber.getText().then(function (promise) {
            console.log("Contract brief number promise is " + promise);
            pages.deal.printTheDealNumber();
            pages.base.focusOnTheNewOpenedTab(i);
            pages.deal.printTheDealNumber();
            pages.scopeDelivery.searchDealsForContribution(0, promise);
            pages.scopeDelivery.selectDealSearchResultByIndex(0);
            pages.scopeDelivery.clickScopeDeliveryCheckbox(0, 0);
            pages.scopeDelivery.save();
        });
    });
};

exports.selectFromDeliveredWorkFilterDropDownContractPeriodWithIndexNumberI = function (i) {
    it("Select from delivered work filter drop down contract period with index number " + i, function () {
        pages.scopeDelivery.clickOnContractPeriodFilterFromDeliveredWork();
        pages.scopeDelivery.selectContractPeriodSearchResultByIndexFromFilteredWorkDelivery(i);
    });
};

exports.selectFromDeliveredWorkFilterDropDownScopeWithIndexNumberI = function (i) {
    it("Select from delivered work filter drop down scope with index number " + i, function () {
        pages.scopeDelivery.clickOnScopeFilterFromDeliveredWork();
        pages.scopeDelivery.selectScopeSearchResultByIndexFromFilteredWorkDelivery(i);
    });
};

exports.checkTheTotalNumberOfWorks = function (count) {
    it("Check the total number of works ", function () {
        browser.driver.findElement(By.css("p[data-ng-show='dataHolder.workLogTotals.works'] span")).getText()
            .then(function (promise) {
                console.log("Total number of works are " + promise);
                expect(promise).toEqual(count);
            });
    });
};

exports.checkTheTotalNumberOfWorksAndConflictingWorksMessage = function (message) {
    it("Check the total number of works and conflicting works message", function () {
        browser.driver.findElement(By.css("p[data-ng-show='dataHolder.workLogTotals.works']")).getText()
            .then(function (promise) {
                console.log("Total number of works and conflicting works message is  " + promise);
                expect(promise).toEqual(message);
            });
    });
};
