'use strict';

pages.manualStatement = exports;

exports.openStatementBlind = function () {
    element(by.cssContainingText('.accordion-heading', 'Statement Information')).click();
};

exports.expectStatementValueToBe = function (label, val) {

    var parentElem = element(by.cssContainingText('.control-label', label)).element(by.xpath('..'));

    expect(parentElem.$('.controls').getText()).toEqual(val);
};

exports.backToStatementsViewLink = function () {
    return element(by.cssContainingText('a', 'Back to Statements View'));
};

exports.clickBackToStatementsViewLink = function () {
    exports.backToStatementsViewLink().click();
    pages.base.waitForAjax();
};

exports.statementsRepeater = function () {
    return element.all(by.repeater('statement in statements'));
};

exports.blindsByStatementId = function (id) {
    var blind = exports.statementsRepeater().filter(function(elem){
        var statementIdElement = elem.$('.statement-id');

        return statementIdElement.getText().then(function(text){
            return text === id;
        });
    });

    return blind;
};

exports.openBlindByStatementId = function (id) {
    var blind = exports.blindsByStatementId(id).first();

    blind.$('.accordion-toggle').click();
};

exports.openFirstBlind = function () {
    var statements = exports.statementsRepeater(),
        blind;

    browser.wait(EC.visibilityOfAny(statements));
    blind = statements.first();

    browserClick(blind.$('.accordion-toggle'));
};

exports.activeBlind = function () {
    return $('.accordion-body.in');
};

exports.editButton = function () {
    return exports.activeBlind().$('.btn-toggle');
};

exports.clickEditButton = function () {
    return exports.editButton().click();
};

exports.saveButton = function () {
    return exports.activeBlind().$('.control-buttons .btn-primary');
};

exports.expectSaveButtonToBeDisabled = function () {
    var btn = exports.saveButton();

    expect(btn.isEnabled()).not.toBeTruthy();
};

exports.expectSaveButtonToBeEnabled = function () {
    var btn = exports.saveButton();

    expect(btn.isEnabled()).toBeTruthy();
};

exports.editField = function (labelText, val) {
    var label = exports.activeBlind().element(by.cssContainingText('strong', labelText)),
        parentElem = label.element(by.xpath('..')),
        input = parentElem.$('[data-ng-model]');

    input.sendKeys(val);
};

exports.clickSaveButton = function () {
    exports.saveButton().click();
    pages.base.waitForAjax();
};

