'use strict';

var base = pages.base;

pages.dealSocietyAgreementNumbers = exports;

exports.creatorToPublisher = (function () {
    var ctp = {};

    ctp.form = function () {
        return $('[data-ng-form="agreementNumbersCreatorForm"]');
    };

    ctp.creatorRows = function () {
        return ctp.form().all(by.repeater('creator in data.model.creators'));
    };

    ctp.creatorSearchTermsInput = function(i) {
        return ctp.creatorRows().get(i).element(by.model(
            'creator.creator_model'
        ));
    };

    ctp.enterCreatorSearchTerms = function (i, terms) {
        return asAlways(
            ctp.creatorSearchTermsInput(i),
            'scrollIntoView', 'clear'
        ).sendKeys(terms);
    };

    ctp.creatorSearchResultRows = function () {
        return element.all(by.repeater('match in matches'));
    };

    ctp.creatorSearchResultRowByDisplayName = function (name) {
        var els = ctp.creatorSearchResultRows().$$('.pull-left');

        browser.wait(EC.visibilityOfAny(els));

        return els.filter(function (el) {
            return pph.areEqual(pph.getAllText(el), name);
        }).first();
    };

    ctp.selectCreatorSearchResultByDisplayName = function (name) {
        return asAlways(
            ctp.creatorSearchResultRowByDisplayName(name),
            'scrollIntoView', 'click'
        );
    };

    ctp.societyAgreementNumberRows = function (iCreator) {
        return ctp.form().all(by.repeater(
            'societyAgreementCreator in ' +
            'creator.creator_society_agreement_numbers'
        ));
    };

    ctp.societyAgreementNumberInput = function (iCreator, iNum) {
        return ctp.societyAgreementNumberRows(iCreator).get(iNum).element(by.model(
            'societyAgreementCreator.agreement_number'
        ));
    };

    ctp.enterSocietyAgreementNumber = function (iCreator, iNum, num) {
        return asAlways(
            ctp.societyAgreementNumberInput(iCreator, iNum),
            'scrollIntoView', 'clear'
        ).sendKeys(num);
    };

    ctp.societyInput = function (iCreator, iNum) {
        return ctp.societyAgreementNumberRows(iCreator).get(iNum).element(by.model(
            'societyAgreementCreator.society_model'
        ));
    };

    ctp.enterSocietySearchTerms = function (iCreator, iNum, terms) {
        return asAlways(
            ctp.societyInput(iCreator, iNum),
            'scrollIntoView', 'clear'
        ).sendKeys(terms);
    };

    ctp.societySearchResultRows = function () {
        return element.all(by.repeater('match in matches'));
    };

    ctp.societySearchResultRowByName = function (name) {
        var els = ctp.societySearchResultRows().$$('.pull-left');

        browser.wait(EC.visibilityOfAny(els));

        return els.filter(function (el) {
            return pph.areEqual(pph.getAllText(el), name);
        }).first();
    };

    ctp.selectSocietySearchResultByName = function (name) {
        return asAlways(
            ctp.societySearchResultRowByName(name),
            'scrollIntoView', 'click'
        );
    };

    ctp.validateCreatorName = function (i, expected) {
        expect(asAlways(
            ctp.creatorSearchTermsInput(i),
            'scrollIntoView', 'getValue'
        )).toBe(expected);
    };

    ctp.validateSocietyAgreementNumber = function (iCreator, iNum, expected) {
        expect(asAlways(
            ctp.societyAgreementNumberInput(iCreator, iNum),
            'scrollIntoView', 'getValue'
        )).toBe(expected);
    };

    ctp.validateSocietyName = function (iCreator, iNum, expected) {
        expect(asAlways(
            ctp.societyInput(iCreator, iNum),
            'scrollIntoView', 'getValue'
        )).toBe(expected);
    };

    return ctp;
});

exports.publisherForm = function () {
    return $('[data-ng-form="societyAgreementsForm"]');
};

exports.saveButton = function () {
    return base.modalFooter().element(by.cssContainingText(
        'button', 'Save'
    ));
};

exports.save = function () {
    return asAlways(
        exports.saveButton(),
        'scrollIntoView', 'click', 'waitForAjax'
    );
};
