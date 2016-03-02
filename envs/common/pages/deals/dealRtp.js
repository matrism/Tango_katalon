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
    var inputElement = exports.acquisitionPeriodScopesInput(i);

    pages.base.scrollIntoView(inputElement);

    return inputElement.click();
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
    var optionElement = exports.selectAllSuggestedAcquisitionPeriodScopesOption(i);

    pages.base.scrollIntoView(optionElement);

    return optionElement.click();
};

exports.applyAcquisitionPeriodScopeChangesButton = function(i) {
    return exports.acquisitionPeriodScopesTypeaheadContainer(i).element(
        by.cssContainingText('button', 'Apply')
    );
};

exports.applyAcquisitionPeriodScopeChanges = function(i) {
    var buttonElement = exports.applyAcquisitionPeriodScopeChangesButton(i);

    pages.base.scrollIntoView(buttonElement);

    return buttonElement.click();
};
