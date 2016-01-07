'use strict';

var _ = require('lodash'),
    ExpectedConditions = protractor.ExpectedConditions;

if (pages.editDealContractPeriod === undefined) {
    pages.editDealContractPeriod = new ftf.pageObject({

        locators: {
            //mdrc
            mdrcTitle: {css: "div[data-ng-form='cpEditForm'] div.section-header-borderless.mdrc"},
            firstMdrcForm: {css: "div.mdrc-list.minimum-delivery div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(1)"},
            editFirstMdrcIcon: {css: "div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(1) button.mdrc-edit-pencil i.fa.fa-pencil"},
            firstMdrcTitle: {css: "div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(1) h3.contract-period-header.ng-binding"},
            firstMdrcMinimumLabel: {css: "div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(1) div[data-ng-show='mdrc.min_new_work_quantity || mdrcs.min_new_work_quantity_percent || mdrc.work_percent']"},
            firstMdrcMinimumText: {css: "div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(1) div[data-ng-show='mdrc.work_percent']"},
            firstCommercialReleaseLabel: {css: "div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(1) div[data-ng-show='mdrc.com_release_major_territory != 0 || mdrc.commercial_release_quantity || mdrc.release_territories.territories.length > 0'] div p"},
            firstQuantityForCommercialReleaseText: {css: "div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(1) div[data-ng-show='mdrc.commercial_release_quantity']"},
            firstMajorTerritoryText: {css: "div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(1) div[data-ng-show='mdrc.com_release_major_territory != 0']"},
            firstTerritoriesListText: {css: "div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(1) div[data-ng-show='mdrc.release_territories.territories != 0']"},
            firstLabelsText: {css: "div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(1) div[data-ng-show='mdrc.labels != 0']"},
            firstMinimumStatutoryMechanicalRateLabel: {css: "div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(1) div[data-ng-show='mdrc.min_stat_mech_rate_percent'] p"},
            firstMinimumStatutoryText: {css: "div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(1) div[data-ng-show='mdrc.min_stat_mech_rate_percent'] div.span3 > strong"},
            firstInNoEventLessThanText: {css: "div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(1) div[data-ng-show='mdrc.no_less_than']"},
            firstDeliveryScheduleLabel: {css: "div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(1) div[data-ng-show='mdrc.delivery_schedule.frequency && mdrc.delivery_schedule.quantity'] p"},
            firstDeliveryScheduleText: {css: "div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(1) div[data-ng-show='mdrc.delivery_schedule.frequency && mdrc.delivery_schedule.quantity'] div.span3"},
            firstDateLabel: {css: "div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(1) div[data-ng-show='(mdrc.completed_date && (mdrc.deemed_complete || !mdrc.deemed_complete))'] p"},
            firstDateText: {css: "div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(1) div[data-ng-show='(mdrc.completed_date && (mdrc.deemed_complete || !mdrc.deemed_complete))'] div.span3"},
            firstShortfallLabel: {css: "div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(1) div[data-ng-show='(mdrc.deemed_complete) && mdrc.shortfall'] p"},
            firstShortfallText: {css: "div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(1) div[data-ng-show='(mdrc.deemed_complete) && mdrc.shortfall'] div.span3"},
            editIncompleteMdrc: {css: "div.mdrc-list.minimum-delivery div[class*='mdrc-form']:not([class*='active']) button[data-ng-class='{ active: !mdrc.is_completed && !mdrc.showDeemedCompleteDetails }']"},
            editDeemedCompleteMdrc: {css: "div.mdrc-list.minimum-delivery div[class*='mdrc-form']:not([class*='active']) button[data-ng-class='{ active: mdrc.is_completed && mdrc.showDeemedCompleteDetails }']"},
            editCompleteMdrc: {css: "div.mdrc-list.minimum-delivery div[class*='mdrc-form']:not([class*='active']) button[data-ng-class='{ active: mdrc.is_completed && !mdrc.showDeemedCompleteDetails }']"},
            editMdrcQuantity: {css: "div.mdrc-list.minimum-delivery div[class*='mdrc-form']:not([class*='active']) input#quantity"},
            editMdrcMinimumWorkContribution: {css: "div.mdrc-list.minimum-delivery div[class*='mdrc-form']:not([class*='active']) input#workPercent"},
            editMdrcQuantityForCommercialRelease: {css: "div.mdrc-list.minimum-delivery div[class*='mdrc-form']:not([class*='active']) input#commercialReleaseQuantity"},
            editMdrcMajorTerritoriesForCommercialRelease: {css: "div.mdrc-list.minimum-delivery div[class*='mdrc-form']:not([class*='active']) input#territories"},
            editMdrcTerritoriesField: {css: "div.mdrc-list.minimum-delivery div[class*='mdrc-form']:not([class*='active']) div.tg-territory div[ng-class='tgTypeaheadWrapClass']"},
            editMdrcTerritoriesInputField: {css: "div.mdrc-list.minimum-delivery div[class*='mdrc-form']:not([class*='active']) div.tg-territory input[ng-model='$term']"},
            editMdrcTerritoriesDropDown: {css: "div.mdrc-list.minimum-delivery div[class*='mdrc-form']:not([class*='active']) div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"},
            editMdrcYesCommercialReleaseByMajorLabel: {css: "div.mdrc-list.minimum-delivery div[class*='mdrc-form']:not([class*='active']) button[data-ng-model='mdrc.release_label']:nth-child(1)"},
            editMdrcNoCommercialReleaseByMajorLabel: {css: "div.mdrc-list.minimum-delivery div[class*='mdrc-form']:not([class*='active']) button[data-ng-model='mdrc.release_label']:nth-child(2)"},
            editMdrcLabelsElement: {css: "div.mdrc-list.minimum-delivery div[class*='mdrc-form']:not([class*='active']) div[data-ng-model='mdrc.labels'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            editMdrcLabelsDropDownData: {css: "div.mdrc-list.minimum-delivery div[class*='mdrc-form']:not([class*='active']) ul.tg-typeahead__suggestions.ng-scope"},
            editMdrcYesSelfRecord: {css: "div.mdrc-list.minimum-delivery div[class*='mdrc-form']:not([class*='active']) button[data-ng-model='mdrc.self_record']:nth-child(1)"},
            editMdrcNoSelfRecord: {css: "div.mdrc-list.minimum-delivery div[class*='mdrc-form']:not([class*='active']) button[data-ng-model='mdrc.self_record']:nth-child(2)"},
            editMdrcPercentOfMinStatutoryRate: {css: "div.mdrc-list.minimum-delivery div[class*='mdrc-form']:not([class*='active']) input#minMechanicalRate"},
            editMdrcInNoEventLessThan: {css: "div.mdrc-list.minimum-delivery div[class*='mdrc-form']:not([class*='active']) input[data-ng-model='mdrc.no_less_than']"},
            editMdrcYesProportionalRecoupmentAllowed: {css: "div.mdrc-list.minimum-delivery div[class*='mdrc-form']:not([class*='active']) button[data-ng-model='mdrc.proportional_recoupment']:nth-child(1)"},
            editMdrcNoProportionalRecoupmentAllowed: {css: "div.mdrc-list.minimum-delivery div[class*='mdrc-form']:not([class*='active']) button[data-ng-model='mdrc.proportional_recoupment']:nth-child(2)"},
            editMdrcYesSeeContractForAdditionalMdrcComplexities: {css: "div.mdrc-list.minimum-delivery div[class*='mdrc-form']:not([class*='active']) button[data-ng-model='mdrc.additional_complexity']:nth-child(1)"},
            editMdrcNoSeeContractForAdditionalMdrcComplexities: {css: "div.mdrc-list.minimum-delivery div[class*='mdrc-form']:not([class*='active']) button[data-ng-model='mdrc.additional_complexity']:nth-child(2)"},
            editMdrcDeliverySchedule: {css: "div.mdrc-list.minimum-delivery div[class*='mdrc-form']:not([class*='active']) input[data-ng-model='mdrc.delivery_schedule.quantity']"},
            editMdrcEveryWeeks: {css: "div.mdrc-list.minimum-delivery div[class*='mdrc-form']:not([class*='active']) input[data-ng-model='mdrc.delivery_schedule.frequency']"},
            editMdrcDateCompleted: {css: "div.mdrc-list.minimum-delivery div[class*='mdrc-form']:not([class*='active']) div#dateCompleted input[data-ng-model='date']"},
            editMdrcShortfallAmount: {css: "div.mdrc-list.minimum-delivery div[class*='mdrc-form']:not([class*='active']) input#shortfall"},
            editMdrcForgivenShortfallButton: {css: "div.mdrc-list.minimum-delivery div[class*='mdrc-form']:not([class*='active']) div.btn-group.shortfall-action button:nth-child(1)"},
            editMdrcCarriedForwardShortfallButton: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem div.btn-group.shortfall-action button:nth-child(2)"},
            editMdrcSaveButton: {css: "div.mdrc-list.minimum-delivery div[class*='mdrc-form']:not([class*='active']) button[data-ng-click='form.terms.activeCp.freshlyAdded ? saveCommitment(form.terms.activeCp.id, mdrc.id, mdrcForm.$valid) : updateDeal(mdrcForm.$valid, form.deal, activeForm, dealUpdateCallbackFunction)']"},
            editMdrcCancelLink: {css: "div.mdrc-list.minimum-delivery div[class*='mdrc-form']:not([class*='active']) a[data-ng-click='cancelCommitmentChanges(form.terms.activeCp.id, mdrc.id);']"},
            editMdrcDeleteButton: {css: "div.mdrc-list.minimum-delivery div[class*='mdrc-form']:not([class*='active']) button[data-ng-click='showDeleteCommitmentModal(mdrc.id, form.terms.activeCp.id, modularInitView)']"},
            editMdrcRemoveFirstTerritoryIcon: {css: "div.mdrc-list.minimum-delivery div[class*='mdrc-form']:not([class*='active']) div.territoriesContainer div:nth-child(1) button[ng-click='removeSelectedTerritory(item.id)']"},
            editMdrcRemoveFirstLabelIcon: {css: "div.mdrc-list.minimum-delivery div[class*='mdrc-form']:not([class*='active']) div[ng-class='tgTypeaheadWrapClass'] div.ng-scope:nth-child(1) span[ng-click='!$isDisabled() && $removeTag($tag)']"},
            deleteContractPeriodModalDialog: {css: "div.modal-dialog.ng-scope div.modal-footer button[data-ng-click='data.deleteCp()']"},
            cancelDeleteContractPeriodModalDialog: {css: "div.modal-dialog.ng-scope div.modal-footer button[data-ng-click='cancel()']"},
            modalDialogCp: {css: "div.modal-dialog.ng-scope"}
        },

        selectTheContractPeriodNumberI: function (i) {
            browser.driver.findElement(By.css("ul.deal-list li[data-ng-click='setActiveContractPeriod(cp.id)']:nth-child(" + i + ")")).click();
        },

        checkTheContractPeriodNumberIIsDisplayed: function (i) {
            browser.driver.findElement(By.css("ul.deal-list li[data-ng-click='setActiveContractPeriod(cp.id)']:nth-child(" + i + ") i.fa.fa-times.ng-scope")).isDisplayed();
        },

        clickOnTheDeleteContractPeriodNumberI: function (i) {
            pages.base.scrollIntoView(element(by.css("ul.deal-list li[data-ng-click='setActiveContractPeriod(cp.id)']:nth-child(" + i + ")")));
            browser.actions().mouseMove(element(by.css("ul.deal-list li[data-ng-click='setActiveContractPeriod(cp.id)']:nth-child(" + i + ")"))).perform();
            browser.actions().mouseMove(element(by.css("ul.deal-list li[data-ng-click='setActiveContractPeriod(cp.id)']:nth-child(" + i + ") i.fa.fa-times.ng-scope"))).perform();
            //browser.actions().click(element(by.css("ul.deal-list li[data-ng-click='setActiveContractPeriod(cp.id)']:nth-child(" + i + ")"))).perform();
            browser.actions().click(element(by.css("ul.deal-list li[data-ng-click='setActiveContractPeriod(cp.id)']:nth-child(" + i + ") i.fa.fa-times.ng-scope"))).perform();
            //browser.driver.findElement(by.css("ul.deal-list li[data-ng-click='setActiveContractPeriod(cp.id)']:nth-child(" + i + ") i.fa.fa-times.ng-scope")).click();
        },

        confirmDeleteContractPeriodModalDialog: function () {
            pages.base.scrollIntoView(pages.editDealContractPeriod.elems.deleteContractPeriodModalDialog);
            browser.actions().mouseMove(pages.editDealContractPeriod.elems.deleteContractPeriodModalDialog).perform();
            browser.actions().click(pages.editDealContractPeriod.elems.deleteContractPeriodModalDialog).perform();
            //pages.editDealContractPeriod.elems.deleteContractPeriodModalDialog.click();
          },

        validateTheFirstIncompleteMdrcTitle: function () {
            pages.editDealContractPeriod.elems.firstMdrcTitle.getText().
                then(function (promise) {
                    console.log("Mdrc title  is: " + promise);
                    expect(promise).toContain("Works");
                    expect(promise).toContain("Incomplete");
                });
        },

        validateTheFirstDeemedCompleteMdrcTitle: function () {
            pages.editDealContractPeriod.elems.firstMdrcTitle.getText().
                then(function (promise) {
                    console.log("Mdrc title  is: " + promise);
                    expect(promise).toContain("Works");
                    expect(promise).toContain("Deemed Complete");
                });
        },

        validateTheFirstCompleteMdrcTitle: function () {
            pages.editDealContractPeriod.elems.firstMdrcTitle.getText().
                then(function (promise) {
                    console.log("Mdrc title  is: " + promise);
                    expect(promise).toContain("Works");
                    expect(promise).toContain("Complete");
                });
        },

        validateTheIMdrcTitle: function (i, type) {
            browser.driver.findElement(By.css("div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(" + i + ") h3.contract-period-header.ng-binding")).getText().
                then(function (promise) {
                    console.log("Mdrc title  is: " + promise);
                    expect(promise).toContain("Works");
                    expect(promise).toContain(type);
                });
        },

        validateTheMdrcMinimumLabelValueI: function (i) {
            browser.driver.findElement(By.css("div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(" + i + ") div[data-ng-show='mdrc.min_new_work_quantity || mdrcs.min_new_work_quantity_percent || mdrc.work_percent']")).getText().
                then(function (promise) {
                    console.log("MDRC minimum label text value is " + promise);
                    expect(promise).toEqual("Minimums:");
                });
        },

        validateTheMdrcMinimumTextValueI: function (i) {
            browser.driver.findElement(By.css("div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(" + i + ") div[data-ng-show='mdrc.work_percent']")).getText().
                then(function (promise) {
                    console.log("MDRC minimum right text value is " + promise);
                    expect(promise).toContain("minimum Work contribution");
                });
        },

        validateTheMdrcCommercialReleaseLabelValueI: function (i) {
            browser.driver.findElement(By.css("div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(" + i + ") div[data-ng-show='mdrc.com_release_major_territory != 0 || mdrc.commercial_release_quantity || mdrc.release_territories.territories.length > 0'] div p")).getText().
                then(function (promise) {
                    console.log("MDRC commercial release label is " + promise);
                    expect(promise).toEqual("Commercial Release:");
                });
        },

        validateTheMdrcQuantityForCommercialReleaseTextValueI: function (i) {
            browser.driver.findElement(By.css("div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(" + i + ") div[data-ng-show='mdrc.commercial_release_quantity']")).getText().
                then(function (promise) {
                    console.log("MDRC quantity for Commercial Release right text value is " + promise);
                    expect(promise).toContain("Works are required for commercial release");

                });
        },

        validateTheMdrcMajorTerritoryTextCommercialReleaseTextValueI: function (i) {
            browser.driver.findElement(By.css("div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(" + i + ") div[data-ng-show='mdrc.com_release_major_territory != 0']")).getText().
                then(function (promise) {
                    console.log("MDRC major territories Commercial Release right text value is " + promise);
                    expect(promise).toContain("Required in");
                    expect(promise).toContain("major territory");
                });
        },

        validateTheMdrcTerritoriesListTextCommercialReleaseTextValueI: function (i) {
            browser.driver.findElement(By.css("div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(" + i + ") div.tg-territory-label")).getText().
                then(function (promise) {
                    console.log("MDRC territories list Commercial Release right text value is " + promise);
                    expect(promise).toContain("Countr");
                });
        },

        validateTheMdrcLabelsTextCommercialReleaseTextValueI: function (i) {
            browser.driver.findElement(By.css("div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(" + i + ") div[data-ng-show='mdrc.labels != 0']")).getText().
                then(function (promise) {
                    console.log("MDRC labels Commercial Release right text value is " + promise);
                    expect(promise).toContain("Approved labels:")
                });
        },

        validateTheMdrcMinimumStatutoryMechanicalRateLabelValueI: function (i) {
            browser.driver.findElement(By.css("div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(" + i + ") div[data-ng-show='mdrc.min_stat_mech_rate_percent'] p")).getText().
                then(function (promise) {
                    console.log("MDRC minimum statutory mechanical rate label is " + promise);
                    expect(promise).toEqual("Minimum Statutory\nMechanical Rate:");
                });
        },

        validateTheMdrcMinimumStatutoryTextValueI: function (i) {
            browser.driver.findElement(By.css("div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(" + i + ") div[data-ng-show='mdrc.min_stat_mech_rate_percent'] div.span3")).getText().
                then(function (promise) {
                    console.log("MDRC minimum statutory right text value is " + promise);
                    expect(promise).toContain("allowed");
                });
        },

        validateTheMdrcInNoEventLessThanTextValueI: function (i) {
            browser.driver.findElement(By.css("div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(" + i + ") div[data-ng-show='mdrc.no_less_than']")).getText().
                then(function (promise) {
                    console.log("MDRC in no event less than right text value is " + promise);
                    expect(promise).toContain("In No Event Less Than");
                });
        },

        validateTheMdrcDeliveryScheduleLabelValueI: function (i) {
            browser.driver.findElement(By.css("div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(" + i + ") div[data-ng-show='mdrc.delivery_schedule.frequency && mdrc.delivery_schedule.quantity'] p")).getText().
                then(function (promise) {
                    console.log("MDRC delivery schedule label is " + promise);
                    expect(promise).toEqual("Delivery Schedule:");
                });
        },

        validateTheMdrcDeliveryScheduleTextValueI: function (i) {
            browser.driver.findElement(By.css("div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(" + i + ") div[data-ng-show='mdrc.delivery_schedule.frequency && mdrc.delivery_schedule.quantity'] div.span3")).getText().
                then(function (promise) {
                    console.log("MDRC delivery schedule right text value is " + promise);
                    expect(promise).toContain("works");
                    expect(promise).toContain("every");
                    expect(promise).toContain("weeks");
                });
        },

        validateTheMdrcDateCompletedLabelValueI: function (i) {
            browser.driver.findElement(By.css("div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(" + i + ") div[data-ng-show='(mdrc.completed_date && (mdrc.deemed_complete || !mdrc.deemed_complete))'] p")).getText().
                then(function (promise) {
                    console.log("MDRC date completed label is " + promise);
                    expect(promise).toEqual("Date:");
                });
        },

        validateTheMdrcDateCompletedTextValueI: function (i) {
            browser.driver.findElement(By.css("div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(" + i + ") div[data-ng-show='(mdrc.completed_date && (mdrc.deemed_complete || !mdrc.deemed_complete))'] div.span3")).getText().
                then(function (promise) {
                    console.log("MDRC date completed text value is " + promise);
                    expect(promise).not.toEqual("");
                });
        },

        validateTheMdrcShortfallLabelValueI: function (i) {
            browser.driver.findElement(By.css("div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(" + i + ") div[data-ng-show='(mdrc.deemed_complete) && mdrc.shortfall'] p")).getText().
                then(function (promise) {
                    console.log("MDRC shortfall label is " + promise);
                    expect(promise).toEqual("Shortfall:");
                });
        },

        validateTheMdrcShortfallTextValueI: function (i) {
            browser.driver.findElement(By.css("div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(" + i + ") div[data-ng-show='(mdrc.deemed_complete) && mdrc.shortfall'] div.span3")).getText().
                then(function (promise) {
                    console.log("MDRC shortfall text value is " + promise);
                    expect(promise).toContain("works forgiven");
                });
        },

        editTheIMdrcForm: function (i) {
            browser.driver.findElement(By.css("div.mdrc-list.minimum-delivery div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(" + i + ")")).click();
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(" + i + ") button.mdrc-edit-pencil i.fa.fa-pencil"))));
            browser.driver.findElement(By.css("div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(" + i + ") button.mdrc-edit-pencil i.fa.fa-pencil")).click();
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealContractPeriod.elems.editMdrcQuantity));
        },

        editClickOnIncompleteOption: function () {
            pages.editDealContractPeriod.elems.editIncompleteMdrc.click();
        },

        editClickOnDeemedCompleteOption: function () {
            pages.editDealContractPeriod.elems.editDeemedCompleteMdrc.click();
        },

        editClickOnCompleteOption: function () {
            pages.editDealContractPeriod.elems.editCompleteMdrc.click();
        },

        editTheMdrcQuantity: function () {
            var number = Math.floor(Math.random() * 50) + 30;
            pages.base.scrollIntoView(pages.editDealContractPeriod.elems.editMdrcQuantity);
            pages.editDealContractPeriod.elems.editMdrcQuantity.clear();
            pages.editDealContractPeriod.elems.editMdrcQuantity.sendKeys(number);
        },

        editTheMdrcMinimumWorkContribution: function () {
            var number = Math.floor(Math.random() * 100) + 1;
            pages.editDealContractPeriod.elems.editMdrcMinimumWorkContribution.clear();
            pages.editDealContractPeriod.elems.editMdrcMinimumWorkContribution.sendKeys(number);
        },

        editTheMdrcQuantityForCommercialRelease: function () {
            var number = Math.floor(Math.random() * 10) + 1;
            pages.editDealContractPeriod.elems.editMdrcQuantityForCommercialRelease.clear();
            pages.editDealContractPeriod.elems.editMdrcQuantityForCommercialRelease.sendKeys(number);
        },

        editTheMdrcMajorTerritoriesForCommercialeRelease: function () {
            var number = Math.floor(Math.random() * 5) + 1;
            pages.editDealContractPeriod.elems.editMdrcMajorTerritoriesForCommercialRelease.clear();
            pages.editDealContractPeriod.elems.editMdrcMajorTerritoriesForCommercialRelease.sendKeys(number);
        },

        editTheFirstTerritoriesFieldLetter: function () {
            pages.editDealContractPeriod.elems.editMdrcTerritoriesInputField.sendKeys("a");
        },

        editTheTerritoriesFieldLetter: function () {
            pages.base.scrollIntoView(pages.editDealContractPeriod.elems.editMdrcTerritoriesField);
            pages.editDealContractPeriod.elems.editMdrcTerritoriesField.click();
            pages.editDealContractPeriod.elems.editMdrcTerritoriesInputField.sendKeys("a");
        },

        editSelectRandomTerritory: function () {
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealContractPeriod.elems.editMdrcTerritoriesDropDown));
            browser.driver.findElements(By.css("div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                })
        },

        editClickOnMdrcYesCommercialReleaseByMajorLabel: function () {
            browser.actions().mouseMove(pages.editDealContractPeriod.elems.editMdrcYesCommercialReleaseByMajorLabel).perform();
            browser.actions().click(pages.editDealContractPeriod.elems.editMdrcYesCommercialReleaseByMajorLabel).perform();
            //pages.base.scrollIntoView(pages.editDealContractPeriod.elems.editMdrcYesCommercialReleaseByMajorLabel);
            //pages.editDealContractPeriod.elems.editMdrcYesCommercialReleaseByMajorLabel.click();
        },

        editClickOnMdrcNoCommercialReleaseByMajorLabel: function () {
            browser.actions().mouseMove(pages.editDealContractPeriod.elems.editMdrcNoCommercialReleaseByMajorLabel).perform();
            browser.actions().click(pages.editDealContractPeriod.elems.editMdrcNoCommercialReleaseByMajorLabel).perform();
        },

        editTheMdrcLabelsField: function () {
            pages.editDealContractPeriod.elems.editMdrcLabelsElement.clear();
            pages.editDealContractPeriod.elems.editMdrcLabelsElement.sendKeys("a");
        },

        editSelectMdrcRandomValueFromLabel: function () {
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealContractPeriod.elems.editMdrcLabelsDropDownData));

            element(By.css("li.tg-typeahead__suggestions-footer")).getText().
                then(function (promise) {
                    console.log("Text from label is : " + promise);
                    if (promise.indexOf("Create New Label") != -1) {
                        browser.driver.findElements(By.css("li.tg-typeahead__suggestions-footer div a"))
                            .then(function (options) {
                                var randomNumber = Math.floor((Math.random() * options.length));
                                options[randomNumber].click();
                            })
                    }
                    else {
                        browser.driver.findElements(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope div"))
                            .then(function (options) {
                                var randomNumber = Math.floor((Math.random() * options.length));
                                options[randomNumber].click();
                            })
                    }
                });
        },

        editClickOnMdrcYesSelfRecord: function () {
            pages.editDealContractPeriod.elems.editMdrcYesSelfRecord.click();
        },

        editClickOnMdrcNoSelfRecord: function () {
            pages.editDealContractPeriod.elems.editMdrcNoSelfRecord().click();
        },

        editTheMdrcPercentOfMinStatutoryRate: function () {
            var percent = Math.floor(Math.random() * 100) + 1;
            pages.editDealContractPeriod.elems.editMdrcPercentOfMinStatutoryRate.clear();
            pages.editDealContractPeriod.elems.editMdrcPercentOfMinStatutoryRate.sendKeys(percent);
        },

        editTheMdrcInNoEventLessThan: function () {
            var value = Math.floor(Math.random() * 20) + 1;
            pages.editDealContractPeriod.elems.editMdrcInNoEventLessThan.clear();
            pages.editDealContractPeriod.elems.editMdrcInNoEventLessThan.sendKeys(value);
        },

        editClickOnMdrcYesProportionalRecoupmentAllowed: function () {
            pages.editDealContractPeriod.elems.editMdrcYesProportionalRecoupmentAllowed.click();
        },

        editClickOnMdrcNoProportionalRecoupmentAllowed: function () {
            pages.editDealContractPeriod.elems.editMdrcNoProportionalRecoupmentAllowed.click();
        },

        editClickOnMdrcYesSeeContractForAdditionalMdrcComplexities: function () {
            pages.editDealContractPeriod.elems.editMdrcYesSeeContractForAdditionalMdrcComplexities.click();
        },

        editClickOnMdrcNoSeeContractForAdditionalMdrcComplexities: function () {
            pages.editDealContractPeriod.elems.editMdrcNoSeeContractForAdditionalMdrcComplexities.click();
        },

        editClickOnSaveMdrcForm: function () {
            pages.base.scrollIntoView(pages.editDealContractPeriod.elems.editMdrcSaveButton);
            pages.editDealContractPeriod.elems.editMdrcSaveButton.click();
        },

        editTheMdrcDeliverySchedule: function () {
            var value = Math.floor(Math.random() * 20) + 1;
            pages.editDealContractPeriod.elems.editMdrcDeliverySchedule.clear();
            pages.editDealContractPeriod.elems.editMdrcDeliverySchedule.sendKeys(value);
        },

        editTheMdrcEveryWeeks: function () {
            var value = Math.floor(Math.random() * 10) + 1;
            pages.editDealContractPeriod.elems.editMdrcEveryWeeks.clear();
            pages.editDealContractPeriod.elems.editMdrcEveryWeeks.sendKeys(value);
        },

        editTheMdrcDateCompleted: function () {
            pages.editDealContractPeriod.elems.editMdrcDateCompleted.clear();
            pages.editDealContractPeriod.elems.editMdrcDateCompleted.sendKeys("2015-03-09");
        },

        editTheMdrcShortfallAmount: function () {
            var value = Math.floor(Math.random() * 80) + 1;
            pages.editDealContractPeriod.elems.editMdrcShortfallAmount.clear();
            pages.editDealContractPeriod.elems.editMdrcShortfallAmount.sendKeys(value);
        },

        editClickOnMdrcForgivenShortfallActionButton: function () {
            pages.editDealContractPeriod.elems.editMdrcForgivenShortfallButton.click();
        },

        editClickOnMdrcCarriedForwardShortfallActionButton: function () {
            pages.editDealContractPeriod.elems.editMdrcCarriedForwardShortfallButton.click();
        },

        editRemoveTheFirstMdrcTerritory: function () {
            pages.editDealContractPeriod.elems.editMdrcTerritoriesField.click();
            pages.editDealContractPeriod.elems.editMdrcRemoveFirstTerritoryIcon.click();
        },

        editRemoveTheFirstMdrcLabel: function () {
            browser.actions().mouseMove(pages.editDealContractPeriod.elems.editMdrcRemoveFirstLabelIcon).perform();
            browser.actions().click(pages.editDealContractPeriod.elems.editMdrcRemoveFirstLabelIcon).perform();
        }
    });
}
