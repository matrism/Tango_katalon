'use strict';

pages.dealRtp = exports;

exports.rightsTermPeriodContainers = function() {
    return $$('.rights-term-container');
};

exports.rightsTermPeriodContainer = function(i) {
    return exports.rightsTermPeriodContainers().get(i);
};

exports.acquisitionPeriodContainer = function(i) {
    return exports.rightsTermPeriodContainer(i).$('.aquisition-period');
};

exports.acquisitionPeriodScopesInput = function(i) {
    return exports.acquisitionPeriodContainer(i).element(by.model('$term'));
};

exports.clickAcquisitionPeriodScopesInput = function(i) {
    return exports.acquisitionPeriodScopesInput(i).click();
};

exports.acquisitionPeriodScopesTypeaheadContainer = function(i) {
    return exports.acquisitionPeriodContainer(i).element(
        by.model('acqRtp.deal_scope_id_holders')
    );
};

exports.selectAllSuggestedAcquisitionPeriodScopesOption = function(i) {
    return exports.acquisitionPeriodScopesTypeaheadContainer(i).element(
        // TODO: Select by binding instead of this.
        by.cssContainingText('strong', 'Select All')
    );
};

exports.selectAllSuggestedAcquisitionPeriodScopes = function(i) {
    return exports.selectAllSuggestedAcquisitionPeriodScopesOption(i).click();
};

exports.applyAcquisitionPeriodScopeChangesButton = function(i) {
    return exports.acquisitionPeriodScopesTypeaheadContainer(i).element(
        by.cssContainingText('button', 'Apply')
    );
};

exports.applyAcquisitionPeriodScopeChanges = function(i) {
    return exports.applyAcquisitionPeriodScopeChangesButton(i).click();
};
