'use strict';

var pph = require('../../../../helpers/pph'),
    ExpectedConditions = protractor.ExpectedConditions,
    promise = protractor.promise;

if (pages.deal === undefined) {
    exports = module.exports = pages.deal = new ftf.pageObject({
        locators: {
            dealBriefNumber: {css: "div.header-info div.metadata-box:nth-child(6) p.info.ng-binding"},
            continueButton: {css: "div.page-footer button[data-ng-click='next()']"},
            saveDealButton: {css: "div.page-footer button[data-ng-click='done()']"},
            generalHeader: {css: ".nav-tabs>li:nth-child(1)>a"},
            termsHeader: {css: ".nav-tabs>li:nth-child(2)>a"},
            payeesHeader: {css: ".nav-tabs>li:nth-child(3)>a"},
            contractPeriodsScopesHeaderLink: {css: "a[ui-sref='deal.view.terms.cpAndScopes']"},
            contractPeriodsTitle: {css: "div[data-ng-form='termsForm'] div.row div.span3.column:nth-child(1) h3"},
            rightsTermPeriodsHeaderLink: {css: "a[ui-sref='deal.view.terms.rtp']"},
            addAnotherRightsTermPeriodLink: {css: "a[ng-click='addRightsTermPeriodSet()']"},
            dealGeneralSummaryHeader: {css: "a[ui-sref='deal.view.general.summary']"},
            scopeHeader: {css: ".scope-heading"},
            incomeRates: {css: ".nav-tabs>li:nth-child(5)>a"},
            dealPayeesSummaryHeader: {css: "div.deal-payee__label"},
            dealTermsSummaryHeader: {css: "a[ui-sref='deal.view.terms.cpAndScopes']"},
            finderDealsHeaderLink: {css: "a[data-ng-class='{ active: form.show.section.fdt }']"},
            finderDealsTitle: {css: "div[data-ng-form='finderDealsForm']"},
            relatedDealsHeaderLink: {css: "a[data-ng-click='showRelatedDealsPage()']"},
            relatedDealsTitle: {css: "div.related-section.ng-scope h2"},
            dealSummaryHeaderLink: {css: "a[data-ng-click='showDealSummaryPage()']"},
            dealSummaryTitle: {css: "div.FORM.summary-section.clearfix.ng-scope h2"}
        },


        //TODO DSP locators are bad , dom can change between wait calls and locators keep a cached version

        termPeriodsHeaderlink: function () {
            return $$('a.pull-left');
        },


        scopeHeaderElements: function () {
            return $$('.scope-heading');

        },

        errorHeader: function () {

            return $$(".text-error").first();
        }
        ,
        errorIcons: function () {
            return $$(".fa.fa-exclamation-triangle.error-icon");

        },

        errorRR: function () {

            return $$(".text-error").last();
        },

        warnerLogo: function () {
            return element(by.css("#DSP-LOGO"));
        },

        //END OF LOCATORS

        continueToNextPage: function () {
            browser.wait(ExpectedConditions.elementToBeClickable(pages.deal.elems.continueButton));
            pages.deal.elems.continueButton.click();
            pages.deal.waitForAjax();
        },

        saveNewDeal: function () {
            pages.deal.elems.saveDealButton.click();
        },

        expectContinueButtonEnabled: function () {
            expect(pages.deal.elems.continueButton.isEnabled());
        },

        goToGeneralDealDetails: function () {
            pages.deal.elems.generalHeader.click();
            pages.deal.waitForAjax();
        },

        goToTermsDealDetails: function () {
            pages.deal.elems.termsHeader.click();
        },

        goToTheContractPeriodsAndScopesHeaderLink: function () {
            pages.deal.elems.contractPeriodsScopesHeaderLink.click();
        },

        goToTheRightsTermPeriodsHeaderLink: function () {
            var el = pages.deal.termPeriodsHeaderlink().get(1);
            el.click();

        },

        goToPayeesDealDetails: function () {
            pages.base.scrollIntoView(pages.deal.elems.payeesHeader);
            pages.deal.elems.payeesHeader.click();
        },

        goToFinderDealTerms: function () {
            pages.deal.elems.finderDealsHeaderLink.click();
        },

        goToRelatedDealsGeneral: function () {
            pages.deal.elems.relatedDealsHeaderLink.click();
        },

        goToDealSummaryGeneral: function () {
            pages.deal.elems.dealSummaryHeaderLink.click();
        },

        printTheDealNumber: function () {
            pages.deal.elems.dealBriefNumber.getText().
            then(function (promise) {
                console.log("Deal number printed is " + promise);
            });
        },

        clickIncomeRatesLink: function () {
            pages.base.scrollIntoView(pages.deal.elems.incomeRates);
            browser.wait(ExpectedConditions.visibilityOf(pages.deal.elems.incomeRates));
            browser.wait(ExpectedConditions.elementToBeClickable(pages.deal.elems.incomeRates));
            pages.deal.elems.incomeRates.click();


        },

        clickFirstScopeHeader: function () {
            var el = pages.deal.scopeHeaderElements().first();

            browser.wait(EC.visibilityOf(el));

            pages.base.scrollTo('top');

            pages.base.scrollIntoView(el);

            return el.click();
        },

        clickLastScopeHeader: function () {
            var el = pages.deal.scopeHeaderElements().last();

            browser.wait(EC.visibilityOf(el));

            pages.base.scrollTo('top');

            pages.base.scrollIntoView(el);

            return el.click();
        },

        errorHeaderIsVisible: function () {

            return this.errorHeader().isDisplayed();
        },


        errorIconsAreVisible: function () {
            var bool = false;


            this.errorIcons.each(function (el) {
                if (!bool) {
                    bool = el.isDisplayed();

                }


            });

            return bool;

        },
        errorRRIsVisible: function () {

            return this.errorRR().isDisplayed();

        },

        publisherShareSetChainContainers: function () {
            return $$('.ps-section');
        },

        addSocietyAgreementNumbersToPssChainLink: function (i) {
            return exports.publisherShareSetChainContainers().get(i).element(
                by.cssContainingText('a', 'Add Society Agreement Numbers')
            );
        },

        addSocietyAgreementNumbersToPssChain: function (i) {
            asAlways(
                exports.addSocietyAgreementNumbersToPssChainLink(i),
                'scrollIntoView', 'click'
            );

            return pages.base.waitForAjax();
        },

        validateSocietyAgreementNumbersLinkPresence: function (i, which, expected) {
            var els = {
                    add: exports.addSocietyAgreementNumbersToPssChainLink(i),
                    view: exports.viewPssChainSocietyAgreementNumbersLink(i)
                },

                el = els[which];

            expect(Object.keys(els)).toContain(which);

            if(expected) {
                pages.base.scrollIntoView(el);
            }

            expect(pph.isDisplayed(el)).toBe(expected);
        },

        viewPssChainSocietyAgreementNumbersLink: function (i) {
            return exports.publisherShareSetChainContainers().get(i).element(
                by.cssContainingText('a', 'View Society Agreement Numbers')
            );
        },

        viewPssChainSocietyAgreementNumbers: function (i) {
            asAlways(
                exports.viewPssChainSocietyAgreementNumbersLink(i),
                'scrollIntoView', 'click'
            );

            return pages.base.waitForAjax();
        },
        goToTab: function (name) {
            var tab = element(by.cssContainingText('ul.nav-tabs li', name));

            tab.click();
        },
});

    exports.addExternalContactLink = function () {
        var link = element(by.cssContainingText('.btn-link', 'Add External Contact'));
        return link;
    };

    exports.clickAddExternalContactLink = function () {
        var link = exports.addExternalContactLink();

        pages.base.scrollIntoView(link);
        link.click();
    };

    exports.externalContactsEditor = function () {
        var editor = modularEdit.byId('externalContacts');
        return editor;
    };

    exports.externalContacts = function () {
        var editor = exports.externalContactsEditor();
        return editor.all(by.repeater('contact in modularEditModels.model'));
    };

    exports.addExternalContact = function (role, name) {
        var contact = exports.externalContacts().last(),
            nameTypeahead = typeahead(contact.element(by.model('contact.model')), true);

        contact.$('select').click();
        contact.$$('select option').filter(pph.matchTextExact(role)).click();

        nameTypeahead.select(name);
    };

    exports.saveExternalContacts = function () {
        var editor = exports.externalContactsEditor();

        editor.save();
    };

    exports.internalContactsEditor = function () {
        var editor = modularEdit.byId('internalContacts');
        return editor;
    };

    exports.addInternalContactLink = function () {
        var link = element(by.cssContainingText('.btn-link', 'Add Internal Contact'));
        return link;
    };

    exports.clickAddInternalContactLink = function () {
        var link = exports.addInternalContactLink();

        pages.base.scrollIntoView(link);
        link.click();
    };

    exports.internalContacts = function () {
        var editor = exports.internalContactsEditor();

        return editor.all(by.repeater('internalContact in modularEditModels.contacts'));
    };

    exports.addInternalContact = function (role, name) {
        var contacts = exports.internalContacts(),
            nameEl,
            roleEl;

        exports.internalContacts().count().then(function(num){
            var contact = contacts.get(num-1);

            nameEl = typeahead(contact.element(by.model('internalContact.model')));
            roleEl = typeahead(contact.element(by.model('internalContact.roles')));

            nameEl.select(name);
            roleEl.select(role, true);
        });
    };

    exports.saveInternalContacts = function () {
        var editor = exports.internalContactsEditor();

        editor.save();
    };

    exports.generalLeftEditor = function () {
        var editor = modularEdit.byId('generalLeft');
        return editor;
    };

    exports.contractingPartiesTypeahead = function () {
        var editor = exports.generalLeftEditor(),
            el = editor.element(by.model('modularEditModels.contractingParties'));

        return typeahead(el);
    };

    exports.addContractingParties = function () {
        var editor = exports.generalLeftEditor(),
            input = exports.contractingPartiesTypeahead(),
            parties = _.toArray(arguments);

        editor.edit();

        _.each(parties, function (name) {
            input.select(name);
        });

        editor.save();
    };

    exports.expectNumberOfContractingPartiesToBe = function (num) {
        var editor = exports.generalLeftEditor(),
            parties = editor.all(by.repeater('party in modularEditModels.contractingParties'));

        expect(parties.count()).toEqual(num);
    };

    exports.expectNumberOfExternalContactsToBe = function (num) {
        var contacts = exports.externalContacts();

        expect(contacts.count()).toEqual(num);
    };

    exports.expectNumberOfInternalContactsToBe = function (num) {
        var contacts = exports.internalContacts();

        expect(contacts.count()).toEqual(num);
    };


}
