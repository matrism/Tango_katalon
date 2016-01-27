'use strict';

steps.scopeDelivery = exports;

exports.deliverWork = function() {
    it('Click "Deliver Work to Deal / Scope" button', function() {
        pages.scopeDelivery.deliverWork();
    });
};

exports.searchForDealFromDealSlotForAllContributions = function(dealSlot) {
    it(
        'Search for deal from slot "' + dealSlot + '" for all contributions',
        function() {
            pages.scopeDelivery.searchDealsForAllContributions(
                hash.entityDataSlotsByType.deal[dealSlot].id
            );
        }
    );
};

exports.searchDealsForAllContributions = function(terms) {
    it('Search deals for all contributions (' + terms + ')', function() {
        pages.scopeDelivery.searchDealsForAllContributions(terms);
    });
};

exports.searchDealsForContribution = function(contributionIndex, terms) {
    it('Search deals (' + terms + ') ' +
        'for contribution #' + (contributionIndex + 1), function() {
        pages.scopeDelivery.searchDealsForContribution(contributionIndex, terms);
    });
};

exports.selectDealSearchResultByIndex = function(i) {
    it('Select deal search result #' + (i + 1), function() {
        pages.scopeDelivery.selectDealSearchResultByIndex(i);
    });
};

exports.clickScopeDeliveryCheckbox = function(contributionIndex, scopeIndex) {
    it(
        'Click scope delivery checkbox #' + (scopeIndex + 1) +
        ' for contribution #' + (contributionIndex + 1), function() {
            pages.scopeDelivery.clickScopeDeliveryCheckbox(
                contributionIndex, scopeIndex
            );
        }
    );
};

exports.save = function() {
    it('Save Scope Delivery changes', function() {
        pages.scopeDelivery.save();
    });
};

exports.validateContributionDealIdFromDealSlot = function(i, dealSlot) {
    it('Validate deal ID of contribution #' + (i + 1), function() {
        pages.scopeDelivery.validateContributionDealId(
            i, hash.entityDataSlotsByType.deal[dealSlot].id
        );
    });
};

exports.validateContributionScopeName = function(i, name) {
    it('Validate deal scope name of contribution #' + (i + 1), function() {
        pages.scopeDelivery.validateContributionScopeName(i, name);
    });
};
