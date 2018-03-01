'use strict';

pages.dealRtp = exports;

exports.rightsTermPeriodContainers = function() {
    return $$('.rights-term-container');
};

exports.rightsTermPeriodContainer = function(i) {
    return exports.rightsTermPeriodContainers().get(i);
};

exports.acquisitionPeriodContainer = function(i) {
    return exports.rightsTermPeriodContainer(i).$('.ng-isolate-scope');
};

exports.acquisitionPeriodScopesInput = function(i) {
    return exports.acquisitionPeriodContainer(i).element(by.model('$term'));
};

exports.clickAcquisitionPeriodScopesInput = function(i) {
    var inputElement = exports.acquisitionPeriodScopesInput(i);

    pages.base.scrollIntoView(inputElement);

    return asAlways(
        inputElement,
        'scrollIntoView', 'click', 'waitForAjax'
    );

};

exports.acquisitionPeriodScopesTypeaheadContainer = function(i) {
    return exports.acquisitionPeriodContainer(i).element(
        //by.model('acqRtp.deal_scope_id_holders')
        by.css('.tg-typeahead__suggestions')
    );
};

exports.selectAllSuggestedAcquisitionPeriodScopesOption = function(i) {
    return exports.acquisitionPeriodScopesTypeaheadContainer(i).element(
        // TODO: Select by binding instead of this.
        //by.cssContainingText
        by.css('.ng-binding')
    );
};

exports.selectAllSuggestedAcquisitionPeriodScopes = function(i) {
    var optionElement = exports.selectAllSuggestedAcquisitionPeriodScopesOption(i);

    pages.base.scrollIntoView(optionElement);

    return asAlways(
        optionElement,
        'scrollIntoView', 'click', 'waitForAjax'
    );
};

exports.applyAcquisitionPeriodScopeChangesButton = function(i) {
    return exports.acquisitionPeriodScopesTypeaheadContainer(i).element(
        by.cssContainingText('button', 'Apply')
    );
};

exports.applyAcquisitionPeriodScopeChanges = function(i) {
    var buttonElement = exports.applyAcquisitionPeriodScopeChangesButton(i);

    pages.base.scrollIntoView(buttonElement);

    return asAlways(
        buttonElement,
        'scrollIntoView', 'click', 'waitForAjax'
    );
};
