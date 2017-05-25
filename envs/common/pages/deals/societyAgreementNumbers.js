'use strict';

var base = pages.base;

pages.dealSocietyAgreementNumbers = exports;

exports.creatorToPublisher = (function () {
    var ctp = {};

    ctp.form = function () {
        //return $('[data-ng-form="agreementNumbersCreatorForm"]');
        return $('.left-side');
    };

    ctp.formHeader = function () {
        return ctp.form().$('.form-header');
    };

    ctp.formHeading = function () {
        return ctp.formHeader().$('h5');
    };

    ctp.validateFormHeading = function (expected) {
        expect(pph.getAllText(ctp.formHeading())).toBe(expected);
    };

    ctp.focus = function () {
        return ctp.formHeading().click();
    };

    ctp.creatorRows = function () {
        return ctp.form().all(by.repeater('item in data.model.creatorSocietyAgreements.$getItems() track by item.id'));
    };

    ctp.creatorSearchTermsInput = function(i) {
        return ctp.creatorRows().get(i).element(
            //by.model('creator.creator_model')
            by.css('[tg-model-class-validation="item.creator"] input')
        );
    };

    ctp.enterCreatorSearchTerms = function (i, terms) {
        return asAlways(
            ctp.creatorSearchTermsInput(i), 'scrollIntoView', 'click', 'clear'
        ).sendKeys(terms);
    };

    ctp.creatorSearchResultRows = function () {
        return element.all(by.css('.tg-typeahead__suggestions-group-item'));
    };

    ctp.noCreatorSearchResultsMessage = function () {
        return $('[ng-if="!$dataSets[0].queried.matches.length"]');
    };

    ctp.expectNoCreatorSearchResults = function () {
        return asAlways(
            ctp.noCreatorSearchResultsMessage(),
            'waitUntilVisible'
        );
    };

    ctp.creatorSearchResultRowByDisplayName = function (name) {
        var els = ctp.creatorSearchResultRows().$$('.tg-typeahead__item-left.ng-binding');

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

    ctp.societyAgreementNumberRows = function (i) {
        return ctp.creatorRows().get(i).all(by.repeater(
            //'societyAgreementCreator in ' +
            //'creator.creator_society_agreement_numbers'
            "societyAgreementCreator in item.societyAgreements.$getItems() track by societyAgreementCreator.id"
        ));
    };

    ctp.societyAgreementNumberInput = function (iCreator, iNum) {
        return ctp.societyAgreementNumberRows(iCreator).get(iNum).element(
            by.model('societyAgreementCreator.agreementNumber')
        );
    };

    ctp.enterSocietyAgreementNumber = function (iCreator, iNum, num) {
        return asAlways(
            ctp.societyAgreementNumberInput(iCreator, iNum),
            'scrollIntoView', 'click', 'clear'
        ).sendKeys(num);
    };

    ctp.societyInput = function (iCreator, iNum) {
        return ctp.societyAgreementNumberRows(iCreator).get(iNum).element(by.css(
            '[tg-org-typeahead-model="societyAgreementCreator.society"] input'
        ));
    };

    ctp.enterSocietySearchTerms = function (iCreator, iNum, terms) {
        return asAlways(
            ctp.societyInput(iCreator, iNum), 'scrollIntoView', 'click', 'clear'
        ).sendKeys(terms);
    };

    ctp.societySearchResultRows = function () {
        return element.all(by.repeater('$match in $dataSet.queried.matches | limitTo:$dataSet.queried.limit'));
    };

    ctp.societySearchResultRowByName = function (name) {
        var els = ctp.societySearchResultRows().$$('.tg-typeahead__item-left');

        browser.wait(EC.visibilityOfAny(els));

        return els.filter(function (el) {
            return pph.areEqual(pph.getAllText(el), name);
        }).first();
    };

    ctp.societySearchResultDisabled = function (name) {
        var els = ctp.element(by.css('.tg-typeahead__suggestions-group'));

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

    ctp.expectSocietySearchResultToBeDisallowed = function (name) {
        var el = asAlways(
            ctp.societySearchResultDisabled(name), 'scrollIntoView'
        );

        expect(
            el.element(by.css('.tg-typeahead__suggestions-group .disabled').first())
        ).toBeTruthy();
    };

    ctp.addCreatorLink = function () {
        return $('[ng-click="data.addCreatorToChain()"]');
    };

    ctp.addCreatorLinkEnabled = function () {
        return pph.matchesCssSelector(
            ctp.addCreatorLink(), ':not(.muted)'
        );
    };

    ctp.addCreatorLinkState = function () {
        return promise.all([
            ctp.addCreatorLinkEnabled().then(function (enabled) {
                return enabled? 'enabled' : 'disabled';
            })
        ]);
    };

    ctp.validateAddCreatorLinkState = function (state) {
        expect(ctp.addCreatorLinkState()).toContain(state);
    };

    ctp.addCreator = function () {
        return asAlways(ctp.addCreatorLink(), 'scrollIntoView', 'click');
    };

    ctp.validateCreatorRowCount = function (expected) {
        expect(ctp.creatorRows().count()).toBe(expected);
    };

    ctp.creatorName = function (i) {
        return asAlways(
            ctp.creatorSearchTermsInput(i), 'scrollIntoView', 'getValue'
        );
    };

    ctp.creatorNames = function () {
        return ctp.creatorRows().count().then(function (count) {
            var names = [];

            _.times(count, function (i) {
                ctp.creatorName(i).then(function (name) {
                    names.push(name);
                });
            });

            return names;
        });
    };

    ctp.creatorSetIndexByCreatorName = function (name) {
        return pph.indexOf(ctp.creatorNames(), name);
    };

    ctp.findCreatorSet = function (creatorName, varName) {
        return ctp.creatorSetIndexByCreatorName(creatorName).then(function (i) {
            pages.base.scrollIntoView(ctp.creatorSearchTermsInput(i));

            hash.testVariables[varName] = i;
        });
    };

    ctp.creatorSearchTermsFieldState = function (iCreator, iNum) {
        var el = asAlways(
            ctp.creatorSearchTermsInput(iCreator, iNum), 'scrollIntoView'
        );

        return pph.matchesCssSelector(el, '.error').then(function (errors) {
            return errors? 'invalid' : 'valid';
        });
    };

    ctp.validateCreatorSearchTermsFieldState = function (i, expected) {
        expect(ctp.creatorSearchTermsFieldState(i)).toBe(expected);
    };

    ctp.validateSocietyAgreementNumberRowCount = function (iCreator, expected) {
        expect(pph.subtract(
            ctp.societyAgreementNumberRows(i).count(), 1
        )).toBe(expected);
    };

    ctp.societyAgreementNumber = function (iCreator, iNum) {
        return asAlways(
            ctp.societyAgreementNumberInput(iCreator, iNum),
            'scrollIntoView', 'getValue'
        );
    };

    ctp.validateSocietyAgreementNumber = function (iCreator, iNum, expected) {
        expect(ctp.societyAgreementNumber(iCreator, iNum)).toBe(expected);
    };

    ctp.societyAgreementNumberFieldState = function (iCreator, iNum) {
        var el = asAlways(
            ctp.societyAgreementNumberInput(iCreator, iNum), 'scrollIntoView'
        );

        return pph.matchesCssSelector(el, '.ng-valid').then(function (valid) {
            return valid? 'valid' : 'invalid';
        });
    };

    ctp.validateSocietyAgreementNumberFieldState = function (
        iCreator, iNum, expected
    ) {
        expect(ctp.societyAgreementNumberFieldState(iCreator, iNum)).toBe(
            expected
        );
    };

    ctp.societyName = function (iCreator, iNum) {
        return asAlways(
            ctp.societyInput(iCreator, iNum), 'scrollIntoView', 'getValue'
        );
    };

    ctp.validateSocietyName = function (iCreator, iNum, expected) {
        expect(ctp.societyName(iCreator, iNum)).toBe(expected);
    };

    ctp.societyFieldState = function (iCreator, iNum) {
        var el = asAlways(
            ctp.societyInput(iCreator, iNum), 'scrollIntoView'
        );

        return pph.matchesCssSelector(el, '.error').then(function (errors) {
            return errors? 'invalid' : 'valid';
        });
    };

    ctp.validateSocietyFieldState = function (iCreator, iNum, expected) {
        expect(ctp.societyFieldState(iCreator, iNum)).toBe(expected);
    };

    ctp.formEnabled = function () {
        return pph.or(
            //pph.not(ctp.creatorSearchTermsInput(0).getAttribute('disabled')),

            pph.not(
                ctp.societyAgreementNumberInput(0, 0).getAttribute('disabled')
            )

            //pph.not(ctp.societyInput(0, 0).getAttribute('disabled'))
        );
    };

    ctp.formActive = function () {
        return pph.matchesCssSelector(ctp.form(), '.active');
    };

    ctp.formState = function () {
        return promise.all([
            ctp.formEnabled().then(function (enabled) {
                return enabled? 'enabled' : 'disabled';
            }),

            ctp.formActive().then(function (active) {
                return active? 'active' : 'inactive';
            })
        ]);
    };

    ctp.validateFormState = function (expected) {
        expect(ctp.formState()).toContain(expected);
    };

    ctp.clickCreatorSearchTermsField = function (i) {
        return asAlways(
            ctp.creatorSearchTermsInput(i), 'scrollIntoView', 'click'
        );
    };

    ctp.deleteCreatorButton = function (i) {
        return ctp.creatorRows().get(i).$('.creator-remove');
    };

    ctp.deleteCreator = function (i) {
        ctp.clickCreatorSearchTermsField(i);
        steps.base.sleep(1000);
        return asAlways(ctp.deleteCreatorButton(i), 'scrollIntoView', 'click');
    };

    ctp.deleteSocietyAgreementNumberButton = function (iCreator, iNum) {
        return ctp.societyAgreementNumberRows(iCreator).get(iNum).$(
            '.agreement-remove'
        );
    };

    ctp.deleteSocietyAgreementNumber = function (iCreator, iNum) {
        ctp.clickCreatorSearchTermsField(iCreator);

        return asAlways(
            ctp.deleteSocietyAgreementNumberButton(iCreator, iNum),
            'scrollIntoView', 'click'
        );

    };

    ctp.formHeaderTooltipButton = function () {
        return ctp.formHeader().$('i[tooltip]');
    };

    ctp.validateFormHeaderTooltip = function (message) {
        asAlways(ctp.formHeaderTooltipButton(), 'scrollIntoView', 'hover');

        return pages.base.validateTooltipMessage(message);
    };

    return ctp;
});

exports.publisher = (function () {
    var p = {};

    p.form = function () {
        //return $('[data-ng-form="societyAgreementsForm"]');
        return $('.right-side');
    };

    p.formHeader = function () {
        return p.form().$('.form-header');
    };

    p.formHeading = function () {
        return p.formHeader().$('h5');
    };

    p.validateFormHeading = function (expected) {
        expect(pph.getAllText(p.formHeading())).toBe(expected);
    };

    p.societyAgreementNumberRows = function () {
        return p.form().all(by.repeater(
            'societyAgreement in data.model.societyAgreements.$getItems()'
        ));
    };

    p.societyAgreementNumberInput = function(i) {
        return p.societyAgreementNumberRows().get(i).element(by.model(
            'societyAgreement.agreementNumber'
        ));
    };

    p.enterSocietyAgreementNumber = function (i, num) {
        return asAlways(
            p.societyAgreementNumberInput(i),
            'scrollIntoView', 'click', 'clear'
        ).sendKeys(num);
    };

    p.societyInput = function (i) {
        return p.societyAgreementNumberRows().get(i).element(by.css(
            '[tg-org-typeahead-model="societyAgreement.societyCorrelation"] input'
        ));
    };

    p.enterSocietySearchTerms = function (i, terms) {
        return asAlways(
            p.societyInput(i), 'scrollIntoView', 'click', 'clear'
        ).sendKeys(terms);
    };

    p.societySearchResultRows = function () {
        //return element.all(by.repeater('match in matches'));
        return element.all(by.css('.tg-typeahead__suggestions-group-item'));
    };

    p.noSocietySearchResultsMessage = function () {
        return $('[ng-if="!$dataSets[0].queried.matches.length"]');
    };

    p.expectNoSocietySearchResults = function () {
        return asAlways(
            p.noSocietySearchResultsMessage(),
            'waitUntilVisible'
        );
    };

    p.societySearchResultRowByName = function (name) {
        var els = p.societySearchResultRows().$$('.tg-typeahead__item-left');

        browser.wait(EC.visibilityOfAny(els));

        return els.filter(function (el) {
            return pph.areEqual(pph.getAllText(el), name);
        }).first();
    };

    p.selectSocietySearchResultByName = function (name) {
        return asAlways(
            p.societySearchResultRowByName(name),
            'scrollIntoView', 'click'
        );
    };

    p.validateSocietyAgreementNumberRowCount = function (expected) {
        expect(pph.subtract(p.societyAgreementNumberRows().count(), 1)).toBe(
            expected
        );
    };

    p.validateSocietyAgreementNumber = function (i, expected) {
        expect(asAlways(
            p.societyAgreementNumberInput(i),
            'scrollIntoView', 'getValue'
        )).toBe(expected);
    };

    p.societyAgreementNumberFieldState = function (i) {
        var el = asAlways(p.societyAgreementNumberInput(i), 'scrollIntoView');

        return pph.matchesCssSelector(el, '.ng-valid').then(function (valid) {
            return valid? 'valid' : 'invalid';
        });
    };

    p.validateSocietyAgreementNumberFieldState = function (i, expected) {
        expect(p.societyAgreementNumberFieldState(i)).toBe(expected);
    };

    p.validateSocietyName = function (i, expected) {
        expect(asAlways(
            p.societyInput(i), 'scrollIntoView', 'getValue'
        )).toBe(expected);
    };

    p.societyFieldState = function (i) {
        var el = asAlways(p.societyInput(i), 'scrollIntoView');

        return pph.matchesCssSelector(el, '.error').then(function (errors) {
            return errors? 'invalid' : 'valid';
        });
    };

    p.validateSocietyFieldState = function (i, expected) {
        expect(p.societyFieldState(i)).toBe(expected);
    };

    p.formEnabled = function () {
        return pph.or(
            pph.not(p.societyAgreementNumberInput(0, 0).getAttribute('disabled')),
            pph.not(p.societyInput(0, 0).getAttribute('disabled'))
        );
    };

    p.formActive = function () {
        return pph.matchesCssSelector(p.form(), '.active');
    };

    p.formState = function () {
        return promise.all([
            p.formEnabled().then(function (enabled) {
                return enabled? 'enabled' : 'disabled';
            }),

            p.formActive().then(function (active) {
                return active? 'active' : 'inactive';
            })
        ]);
    };

    p.validateFormState = function (expected) {
        expect(p.formState()).toContain(expected);
    };

    p.clickSocietyAgreementNumberField = function (iCreator, iNum) {
        return asAlways(
            p.societyAgreementNumberInput(iCreator, iNum),
            'scrollIntoView', 'click'
        );
    };

    p.deleteSocietyAgreementNumberButton = function (i) {
        return p.societyAgreementNumberRows().get(i).$('.agreement-remove');
    };

    p.deleteSocietyAgreementNumber = function (i) {
        p.clickSocietyAgreementNumberField(i);
        steps.base.sleep(1000);

        return asAlways(
            p.deleteSocietyAgreementNumberButton(i),
            'scrollIntoView', 'click'
        );
    };

    p.formHeaderTooltipButton = function () {
        return p.formHeader().$('i[tooltip]');
    };

    p.validateFormHeaderTooltip = function (message) {
        asAlways(p.formHeaderTooltipButton(), 'scrollIntoView', 'hover');

        return pages.base.validateTooltipMessage(message);
    };

    return p;
});

exports.modalHeaderTooltipButton = function () {
    return pages.base.modalHeader().$('i[tooltip]');
};

exports.validateModalHeaderTooltip = function (message) {
    asAlways(exports.modalHeaderTooltipButton(), 'scrollIntoView', 'hover');

    return pages.base.validateTooltipMessage(message);
};

exports.saveButton = function () {
    return base.modalFooter().element(by.cssContainingText(
        'button', 'Save'
    ));
};

exports.saveButtonState = function () {
    var el = asAlways(exports.saveButton(), 'scrollIntoView');

    return el.getAttribute('disabled').then(function (disabled) {
        return disabled? 'disabled' : 'enabled';
    });
};

exports.validateSaveButtonState = function (expected) {
    expect(exports.saveButtonState()).toBe(expected);
};

exports.save = function () {
    return asAlways(
        exports.saveButton(),
        'scrollIntoView', 'click', 'waitForAjax'
    );
    steps.base.sleep(3000);
};
