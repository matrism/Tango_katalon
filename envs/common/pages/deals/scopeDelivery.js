'use strict';

var ExpectedConditions = protractor.ExpectedConditions;

pages.scopeDelivery = exports;

exports.deliverWorkButton = function () {
    return element(by.cssContainingText(
        'button', 'Deliver Work to Deal / Scope'
    ));
};

exports.scopeDeliveryTabElement = function () {
    return element(by.css("ul.nav.nav-tabs.tg-sticky-header.m-is-sticky li.ng-scope:nth-child(3) a"))
};

exports.deliverWork = function () {
    return exports.deliverWorkButton().click();
};

exports.dealSearchForAllContributionsInput = function () {
    return $('[data-ng-if="modularEditModels.model.length > 1"]').element(
        by.model('$term')
    );
};

exports.searchDealsForAllContributions = function (terms) {
    var element = exports.dealSearchForAllContributionsInput();
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(terms);
};

exports.dealSearchInput = function (i) {
    return $$('.scope-delivery__search-deal input').get(i);
};

exports.searchDealsForContribution = function (i, terms) {
    var element = exports.dealSearchInput(i);
    pages.base.scrollIntoView(element);
    return element.sendKeys(terms);
};

exports.dealSearchResults = function () {
    pages.base.waitForAjax();
    return $$('.tg-typeahead__suggestions-group-item-inner');
};

exports.dealSearchResult = function (i) {
    var elements = exports.dealSearchResults();
    browser.wait(ExpectedConditions.visibilityOfAny(elements));
    return elements.get(i);
};

exports.selectDealSearchResultByIndex = function (i) {
    var element = exports.dealSearchResult(i),
        clickPromise;

    clickPromise = element.click();
    pages.base.waitForAjax();

    return clickPromise;
};

exports.editModeContributionRows = function () {
    return element.all(by.repeater(
        'creatorContribution in modularEditModels.model'
    ));
};

exports.editModeContributionRow = function (i) {
    var elements = exports.editModeContributionRows();
    browser.wait(ExpectedConditions.visibilityOfAny(elements));
    return elements.get(i);
};

exports.dealSearchForContributionInput = function (i) {
    return exports.editModeContributionRow(i).$(
        '[data-tg-typeahead-selected="' +
        'addDealTo(match.model, [creatorContribution]); $internal.$clear();' +
        '"]'
    ).element(by.model('$term'));
};

exports.searchDealsForContribution = function (i, terms) {
    var el = exports.dealSearchForContributionInput(i);

    asAlways(el, 'scrollIntoView', 'click', 'clear');

    return el.sendKeys(terms);
};

exports.scopeDeliveryCheckboxes = function (i) {
    return exports.editModeContributionRow(i).all(by.model(
        'dealScope.state.selected'
    ));
};

exports.scopeDeliveryCheckbox = function (contributionIndex, scopeIndex) {
    return exports.scopeDeliveryCheckboxes(contributionIndex).get(scopeIndex);
};

exports.checkboxEnabled = function (iContribution, iScope) {
    var el = exports.scopeDeliveryCheckbox(iContribution, iScope);

    pages.base.scrollIntoView(el);

    return el.isEnabled();
};

exports.validateCheckboxState = function (iContribution, iScope, expected) {
    switch (expected) {
        case 'enabled':
        case 'disabled':
            expect(exports.checkboxEnabled(iContribution, iScope)).toBe(
                expected === 'enabled'
            );
            break;

        default:
            throw new Error('Unknown state: ' + expected);
            break;
    }
};

exports.clickScopeDeliveryCheckbox = function (contributionIndex, scopeIndex) {
    var element = exports.scopeDeliveryCheckbox(
        contributionIndex, scopeIndex
    );

    pages.base.scrollIntoView(element);

    pages.base.waitForAjax();

    browser.wait(ExpectedConditions.elementToBeClickable(element));

    return element.click().then(function () {
        pages.base.waitForAjax();
    });
};

exports.modularEditContainer = function () {
    return $('[data-tg-modular-edit-id="scopeDelivery"]');
};

exports.modularEditControls = function () {
    return exports.modularEditContainer().$('.CONTROLS');
};

exports.saveButton = function () {
    return exports.modularEditControls().element(
        by.cssContainingText('button', 'Save')
    );
};

exports.save = function () {
    return exports.saveButton().click().then(function () {
        pages.base.waitForAjax();
    });
};

exports.contributionRows = function () {
    return $$('.scope-delivery-row').filter(function (element) {
        return element.isDisplayed();
    });
};

exports.contributionDealIdBinding = function (i) {
    return exports.contributionRows().get(i).element(by.binding(
        '::linkedDeal.deal.contractBriefNumber'
    ));
};

exports.contributionScopeDeliveryDetails = function (i) {
    var element = exports.contributionDealIdBinding(i);

    pages.base.scrollIntoView(element);

    return element.getText().then(function (value) {
        var reResults = /^Deal - (.+?) .+? \/ (.+?) \(.+?\)$/.exec(value);

        if (!reResults) {
            throw new Error("Could not parse contribution scope delivery details string.");
        }

        return {
            dealId: reResults[1],
            scopeName: reResults[2],
        };
    });
};

exports.contributionDealId = function (i) {
    return exports.contributionScopeDeliveryDetails(i).then(function (values) {
        return values.dealId;
    });
};

exports.validateContributionDealId = function (i, value) {
    expect(exports.contributionDealId(i)).toBe(value);
};

exports.contributionScopeName = function (i) {
    return exports.contributionScopeDeliveryDetails(i).then(function (values) {
        return values.scopeName;
    });
};

exports.validateContributionScopeName = function (i, value) {
    expect(exports.contributionScopeName(i)).toBe(value);
};

exports.validationMessage = function (message) {
    return element.all(by.cssContainingText('div, span', message)).filter(
        pph.isDisplayed
    ).first();
};

exports.expectValidationMessage = function (expected) {
    var el = exports.validationMessage(expected),

        isDisplayed = pph.isDisplayed(el).then(function (displayed) {
            if (displayed) {
                pages.base.scrollIntoView(el);
            }

            return displayed;
        });

    return expect(isDisplayed).toBeTruthy();
};


