"use strict";
var _ = require("lodash");
var ExpectedConditions = protractor.ExpectedConditions;
var pages_path = _tf_config._system_.path_to_pages;
require(pages_path + "base");
if (pages.edit_deal_contract_period === undefined) {
    pages.edit_deal_contract_period = new ftf.pageObject({

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
            editMdrcTerritoriesField: {css: "div.mdrc-list.minimum-delivery div[class*='mdrc-form']:not([class*='active']) div.default.territoryControl.popup-left.territoryPicker.ng-isolate-scope div.territoriesStaticView"},
            editMdrcTerritoriesInputField: {css: "div.mdrc-list.minimum-delivery div[class*='mdrc-form']:not([class*='active']) div.default.territoryControl.popup-left.territoryPicker.ng-isolate-scope div.territoriesContainer  input[ng-model='typeaheadQuery']"},
            editMdrcTerritoriesDropDown: {css: "div.mdrc-list.minimum-delivery div[class*='mdrc-form']:not([class*='active']) div.typeaheadDropdown div.item.ng-scope"},
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
            editMdrcSaveButton: {css: "div.mdrc-list.minimum-delivery div[class*='mdrc-form']:not([class*='active']) button[data-ng-click='activeContractPeriod.freshlyAdded ? saveCommitment(form.terms.activeCp.id, mdrc.id, mdrcForm.$valid) : updateDeal(mdrcForm.$valid, form.deal, activeForm, dealUpdateCallbackFunction)']"},
            editMdrcCancelLink: {css: "div.mdrc-list.minimum-delivery div[class*='mdrc-form']:not([class*='active']) a[data-ng-click='cancelCommitmentChanges(form.terms.activeCp.id, mdrc.id);']"},
            editMdrcDeleteButton: {css: "div.mdrc-list.minimum-delivery div[class*='mdrc-form']:not([class*='active']) button[data-ng-click='showDeleteCommitmentModal(mdrc.id, form.terms.activeCp.id, modularInitView)']"}
        },

        validateTheFirstIncompleteMdrcTitle: function () {
            pages.edit_deal_contract_period.elems.firstMdrcTitle.getText().
                then(function (promise) {
                    console.log("Mdrc title  is: " + promise);
                    expect(promise).toContain("Works");
                    expect(promise).toContain("Incomplete");
                });
        },

        validateTheFirstDeemedCompleteMdrcTitle: function () {
            pages.edit_deal_contract_period.elems.firstMdrcTitle.getText().
                then(function (promise) {
                    console.log("Mdrc title  is: " + promise);
                    expect(promise).toContain("Works");
                    expect(promise).toContain("Deemed Complete");
                });
        },

        validateTheFirstCompleteMdrcTitle: function () {
            pages.edit_deal_contract_period.elems.firstMdrcTitle.getText().
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
            browser.driver.findElement(By.css("div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(" + i + ") div[data-ng-show='mdrc.release_territories.territories != 0']")).getText().
                then(function (promise) {
                    console.log("MDRC territories list Commercial Release right text value is " + promise);
                    expect(promise).toContain("Countries");
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
            browser.wait(ExpectedConditions.visibilityOf(pages.edit_deal_contract_period.elems.editMdrcQuantity));
        },







        clickOnEditIncompleteOption: function () {
            pages.edit_deal_contract_period.elems.editIncompleteMdrc.click();
        },

        clickOnEditDeemedCompleteOption: function () {
            pages.edit_deal_contract_period.elems.editDeemedCompleteMdrc.click();
        },

        clickOnEditCompleteOption: function () {
            pages.edit_deal_contract_period.elems.editCompleteMdrc.click();
        },

        editTheMdrcQuantity: function () {
            var number = Math.floor(Math.random() * 50) + 30;
            pages.edit_deal_contract_period.elems.editMdrcQuantity.clear();
            pages.edit_deal_contract_period.elems.editMdrcQuantity.sendKeys(number);
        },

        editTheMdrcMinimumWorkContribution: function () {
            var number = Math.floor(Math.random() * 100) + 1;
            pages.edit_deal_contract_period.elems.editMdrcMinimumWorkContribution.clear();
            pages.edit_deal_contract_period.elems.editMdrcMinimumWorkContribution.sendKeys(number);
        },

        editTheMdrcQuantityForCommercialRelease: function () {
            var number = Math.floor(Math.random() * 10) + 1;
            pages.edit_deal_contract_period.elems.editMdrcQuantityForCommercialRelease.clear();
            pages.edit_deal_contract_period.elems.editMdrcQuantityForCommercialRelease.sendKeys(number);
        },

        editTheMdrcMajorTerritoriesForCommercialeRelease: function () {
            var number = Math.floor(Math.random() * 5) + 1;
            pages.edit_deal_contract_period.elems.editMdrcMajorTerritoriesForCommercialRelease.clear();
            pages.edit_deal_contract_period.elems.editMdrcMajorTerritoriesForCommercialRelease.sendKeys(number);
        },

        editTheTerritoriesFieldLetter: function () {
            pages.edit_deal_contract_period.elems.editMdrcTerritoriesField.click();
            pages.edit_deal_contract_period.elems.editMdrcTerritoriesInputField.sendKeys("a");
        },

        editSelectRandomTerritory: function () {
            browser.wait(ExpectedConditions.visibilityOf(pages.edit_deal_contract_period.elems.editMdrcTerritoriesDropDown));
            browser.driver.findElements(By.css("div.typeaheadDropdown div.item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                })
        },

        editClickOnMdrcYesCommercialReleaseByMajorLabel: function () {
            pages.edit_deal_contract_period.elems.editMdrcYesCommercialReleaseByMajorLabel.click();
        },

        editClickOnMdrcNoCommercialReleaseByMajorLabel: function () {
            pages.edit_deal_contract_period.elems.editMdrcNoCommercialReleaseByMajorLabel.click();
        },

        editTheMdrcLabelsField: function () {
            pages.edit_deal_contract_period.elems.editMdrcLabelsElement.clear();
            pages.edit_deal_contract_period.elems.editMdrcLabelsElement.sendKeys("a");
        },

        editSelectMdrcRandomValueFromLabel: function () {
            browser.wait(ExpectedConditions.visibilityOf(pages.edit_deal_contract_period.elems.editMdrcLabelsDropDownData));

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
            pages.edit_deal_contract_period.elems.editMdrcYesSelfRecord.click();
        },

        editClickOnMdrcNoSelfRecord: function () {
            pages.edit_deal_contract_period.elems.editMdrcNoSelfRecord().click();
        },

        editTheMdrcPercentOfMinStatutoryRate: function () {
            var percent = Math.floor(Math.random() * 100) + 1;
            pages.edit_deal_contract_period.elems.editMdrcPercentOfMinStatutoryRate.clear();
            pages.edit_deal_contract_period.elems.editMdrcPercentOfMinStatutoryRate.sendKeys(percent);
        },

        editTheMdrcInNoEventLessThan: function () {
            var value = Math.floor(Math.random() * 20) + 1;
            pages.edit_deal_contract_period.elems.editMdrcInNoEventLessThan.clear();
            pages.edit_deal_contract_period.elems.editMdrcInNoEventLessThan.sendKeys(value);
        },

        editClickOnMdrcYesProportionalRecoupmentAllowed: function () {
            pages.edit_deal_contract_period.elems.editMdrcYesProportionalRecoupmentAllowed.click();
        },

        editClickOnMdrcNoProportionalRecoupmentAllowed: function () {
            pages.edit_deal_contract_period.elems.editMdrcNoProportionalRecoupmentAllowed.click();
        },

        editClickOnMdrcYesSeeContractForAdditionalMdrcComplexities: function () {
            pages.edit_deal_contract_period.elems.editMdrcYesSeeContractForAdditionalMdrcComplexities.click();
        },

        editClickOnMdrcNoSeeContractForAdditionalMdrcComplexities: function () {
            pages.edit_deal_contract_period.elems.editMdrcNoSeeContractForAdditionalMdrcComplexities.click();
        },

        editClickOnSaveMdrcForm: function () {
            pages.edit_deal_contract_period.elems.editMdrcSaveButton.click();
        },

        editTheMdrcDeliverySchedule: function () {
            var value = Math.floor(Math.random() * 20) + 1;
            pages.edit_deal_contract_period.elems.editMdrcDeliverySchedule.clear();
            pages.edit_deal_contract_period.elems.editMdrcDeliverySchedule.sendKeys(value);
        },

        editTheMdrcEveryWeeks: function () {
            var value = Math.floor(Math.random() * 10) + 1;
            pages.edit_deal_contract_period.elems.editMdrcEveryWeeks.clear();
            pages.edit_deal_contract_period.elems.editMdrcEveryWeeks.sendKeys(value);
        },

        editTheMdrcDateCompleted: function () {
            pages.edit_deal_contract_period.elems.editMdrcDateCompleted.clear();
            pages.edit_deal_contract_period.elems.editMdrcDateCompleted.sendKeys("2015-03-09");
        },

        editTheMdrcShortfallAmount: function () {
            var value = Math.floor(Math.random() * 80) + 1;
            pages.edit_deal_contract_period.elems.editMdrcShortfallAmount.clear();
            pages.edit_deal_contract_period.elems.editMdrcShortfallAmount.sendKeys(value);
        },

        editClickOnMdrcForgivenShortfallActionButton: function () {
            pages.edit_deal_contract_period.elems.editMdrcForgivenShortfallButton.click();
        },

        editClickOnMdrcCarriedForwardShortfallActionButton: function () {
            pages.edit_deal_contract_period.elems.editMdrcCarriedForwardShortfallButton.click();
        }


    });
}