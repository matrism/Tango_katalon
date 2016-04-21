"use strict";

var _ = require("lodash");
var ExpectedConditions = protractor.ExpectedConditions;
var pages_path = _tf_config._system_.path_to_pages;

if (pages.createDealRtp === undefined) {
    pages.createDealRtp = new ftf.pageObject({
        locators: {
            contractPeriodsRtpField: {css: "div[data-ng-model='rtps.deal_contract_period_id_holders'] div[ng-class='tgTypeaheadWrapClass']"},
            contractPeriodsRtpInputField: {css: "div[data-ng-model='rtps.deal_contract_period_id_holders'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            selectAllContractPeriodRtpLink: {css: "ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-header"},
            cancelContractPeriodRtpButton: {css: "ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-footer button[data-ng-click='$closePopup();']"},
            applyContractPeriodRtpButton: {css: "ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-footer button[data-ng-click='applySelections($dataSets);']"},
            acquisitionDescription: {css: "div[data-ng-repeat='rtps in form.deal.deal_rights_term_period_sets track by $index']:nth-child(4) input[data-ng-model='acqRtp.description']"},
            scopeAcquisitionField: {css: "div[data-ng-repeat='rtps in form.deal.deal_rights_term_period_sets track by $index']:nth-child(4) div[data-ng-model='acqRtp.deal_scope_id_holders'] div[ng-class='tgTypeaheadWrapClass']"},
            scopeAcquisitionInputField: {css: "div[data-ng-repeat='rtps in form.deal.deal_rights_term_period_sets track by $index']:nth-child(4) div[data-ng-model='acqRtp.deal_scope_id_holders'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            applyScopeAcquisitionButton: {css: "div[data-ng-repeat='rtps in form.deal.deal_rights_term_period_sets track by $index']:nth-child(4) ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-footer button[data-ng-click='applySelections($dataSets);']"},
            acquisitionActualEndDate: {css: "div[name='acquisitionEndDate'] input"},
            addRetentionPeriodLinkFromAcquisition: {css: "div[data-ng-repeat='rtps in form.deal.deal_rights_term_period_sets track by $index']:nth-child(4) a[data-ng-click='addRetentionRightsTermPeriod(rtps.id)']"},
            addPostTermPeriodLinkFromAcquisition: {css: "div[data-ng-repeat='rtps in form.deal.deal_rights_term_period_sets track by $index']:nth-child(4) a[data-ng-click='addPostTermCollectionRightsTermPeriod(rtps.id)']"},
            addEndRulesLinkRtpRetention2FromAcquisition: {css: "div[data-ng-repeat='rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods']:nth-child(3) div.aquisition-period.clearfix.retention.ng-scope div[data-watched-init='endRulesAreDirty = isEndRuleDirty(rtp.end_rules[0])'] a"},
            postTermPeriodDescriptionFromAcquisition: {css: "div[data-ng-repeat='rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods']:nth-child(6) div[data-name='postTermRtpForm'] input[data-ng-model='rtp.description']"},
            addAnotherRtpSetLink: {css: "a[data-ng-click='addRightsTermPeriodSet()']"}
        },


        selectTheRtpAllContractPeriods: function () {
            pages.createDealRtp.elems.contractPeriodsRtpField.click();
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("ul.tg-typeahead__suggestions.ng-scope"))));
            pages.createDealRtp.elems.selectAllContractPeriodRtpLink.click();
            pages.createDealRtp.elems.applyContractPeriodRtpButton.click();
            browser.wait(ExpectedConditions.invisibilityOf(element(by.css("ul.tg-typeahead__suggestions.ng-scope"))));
        },

        selectTheRandomScopeRtpAcquisition: function () {
            pages.createDealRtp.elems.scopeAcquisitionField.click();
            pages.createDealRtp.elems.scopeAcquisitionInputField.sendKeys("s");
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-container div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-container div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                });
            pages.createDealRtp.elems.applyScopeAcquisitionButton.click();
            browser.wait(ExpectedConditions.invisibilityOf(element(by.css("ul.tg-typeahead__suggestions ng-scope"))));
        },

        selectTheRandomScopeRtpAcquisitionNumberI: function (i) {
            pages.createDealRtp.elems.scopeAcquisitionField.click();
            pages.createDealRtp.elems.scopeAcquisitionInputField.sendKeys("Scope " + i);
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-container div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-container div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[0].click();
                });
            pages.createDealRtp.elems.applyScopeAcquisitionButton.click();
            browser.wait(ExpectedConditions.invisibilityOf(element(by.css("ul.tg-typeahead__suggestions ng-scope"))));
        },


        selectTheSpecificScopeNumberIRtpAcquisition: function (i) {
            var scope = "Scope " + i;
            var desiredOption;
            pages.createDealRtp.elems.scopeAcquisitionField.click();
            pages.createDealRtp.elems.scopeAcquisitionInputField.sendKeys("s");
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("div[data-ng-repeat='rtps in form.deal.deal_rights_term_period_sets track by $index']:nth-child(4) ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-container div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("div[data-ng-repeat='rtps in form.deal.deal_rights_term_period_sets track by $index']:nth-child(4) ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-container div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(scope) != -1) {
                                    desiredOption = option;
                                    return true;
                                }
                            }
                        )
                    });
                })
                .then(function clickOption() {
                    if (desiredOption) {
                        desiredOption.click();
                    }
                });
            pages.createDealRtp.elems.applyScopeAcquisitionButton.click();
            browser.wait(ExpectedConditions.invisibilityOf(element(by.css("div[data-ng-repeat='rtps in form.deal.deal_rights_term_period_sets track by $index']:nth-child(4) ul.tg-typeahead__suggestions ng-scope"))));
        },

        fillIntoTheAcquisitionEndDateField: function () {
            var time = "2016-08-09";
            pages.createDealRtp.elems.acquisitionActualEndDate.sendKeys(time);
        },

        clickOnTheAddRetentionPeriodFromAcquisition: function () {
            pages.createDealRtp.elems.addRetentionPeriodLinkFromAcquisition.click();
            pages.createDealRtp.waitForAjax();
        },

        fillIntoTheRetentionPeriodDescriptionFromAcquisitionNumberI: function (i) {
            var element = browser.driver.findElement(by.css("div[data-ng-repeat='rtps in form.deal.deal_rights_term_period_sets track by $index']:nth-child(4) div[data-ng-repeat='rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods']:nth-child(" + (i + 1) + ") div.aquisition-period.clearfix.retention.ng-scope input[data-ng-model='rtp.description']"));
            element.sendKeys("Retention from acquisition description " + i);
        },

        selectTheRandomScopeFromAcquisitionNumberI: function (i) {
            var scopeField = browser.driver.findElement(by.css("div[data-ng-repeat='rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods']:nth-child(" + (i + 1) + ") div.aquisition-period.clearfix.retention.ng-scope div[data-ng-model='rtp.deal_scope_id_holders'] div[ng-class='tgTypeaheadWrapClass']"));
            scopeField.click();
            var scopeInputField = browser.driver.findElement(by.css("div[data-ng-repeat='rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods']:nth-child(" + (i + 1) + ") div.aquisition-period.clearfix.retention.ng-scope div[data-ng-model='rtp.deal_scope_id_holders'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"));
            scopeInputField.sendKeys("Scope");
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("div[data-ng-repeat='rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods']:nth-child(" + (i + 1) + ") div.aquisition-period.clearfix.retention.ng-scope ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-container div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("div[data-ng-repeat='rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods']:nth-child(" + (i + 1) + ") div.aquisition-period.clearfix.retention.ng-scope ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-container div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                });
            browser.driver.findElement(by.css("div[data-ng-repeat='rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods']:nth-child(" + (i + 1) + ") div.aquisition-period.clearfix.retention.ng-scope ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-footer button[data-ng-click='applySelections($dataSets);']")).click();
            browser.wait(ExpectedConditions.invisibilityOf(element(by.css("div[data-ng-repeat='rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods']:nth-child(" + (i + 1) + ") div.aquisition-period.clearfix.retention.ng-scope ul.tg-typeahead__suggestions ng-scope"))));
        },

        selectTheSpecificScopeNumberJFromAcquisitionNumberI: function (i, j) {
            var scopeField = browser.driver.findElement(by.css("div[data-ng-repeat='rtps in form.deal.deal_rights_term_period_sets track by $index']:nth-child(4) div[data-ng-repeat='rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods']:nth-child(" + (i + 1) + ") div.aquisition-period.clearfix.retention.ng-scope div[data-ng-model='rtp.deal_scope_id_holders'] div[ng-class='tgTypeaheadWrapClass']"));
            scopeField.click();
            var desiredOption;
            var desiredScope = "Scope " + j;
            var scopeInputField = browser.driver.findElement(by.css("div[data-ng-repeat='rtps in form.deal.deal_rights_term_period_sets track by $index']:nth-child(4) div[data-ng-repeat='rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods']:nth-child(" + (i + 1) + ") div.aquisition-period.clearfix.retention.ng-scope div[data-ng-model='rtp.deal_scope_id_holders'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"));
            scopeInputField.sendKeys("Scope");
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("div[data-ng-repeat='rtps in form.deal.deal_rights_term_period_sets track by $index']:nth-child(4) div[data-ng-repeat='rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods']:nth-child(" + (i + 1) + ") div.aquisition-period.clearfix.retention.ng-scope ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-container div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("div[data-ng-repeat='rtps in form.deal.deal_rights_term_period_sets track by $index']:nth-child(4) div[data-ng-repeat='rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods']:nth-child(" + (i + 1) + ") div.aquisition-period.clearfix.retention.ng-scope ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-container div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(desiredScope) != -1) {
                                    desiredOption = option;
                                    return true;
                                }
                            }
                        )
                    });
                })
                .then(function clickOption() {
                    if (desiredOption) {
                        desiredOption.click();
                    }
                });
            browser.driver.findElement(by.css("div[data-ng-repeat='rtps in form.deal.deal_rights_term_period_sets track by $index']:nth-child(4) div[data-ng-repeat='rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods']:nth-child(" + (i + 1) + ") div.aquisition-period.clearfix.retention.ng-scope ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-footer button[data-ng-click='applySelections($dataSets);']")).click();
            browser.wait(ExpectedConditions.invisibilityOf(element(by.css("div[data-ng-repeat='rtps in form.deal.deal_rights_term_period_sets track by $index']:nth-child(4) div[data-ng-repeat='rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods']:nth-child(" + (i + 1) + ") div.aquisition-period.clearfix.retention.ng-scope ul.tg-typeahead__suggestions ng-scope"))));
        },

        selectTheSpecificDurationTypeRetentionFromAcquisitionNumberI: function (i, durationType) {
            var desiredOption;
            browser.driver.findElements(by.css("div[data-ng-repeat='rtps in form.deal.deal_rights_term_period_sets track by $index']:nth-child(4) div[data-ng-repeat='rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods']:nth-child(" + (i + 1) + ") div.aquisition-period.clearfix.retention.ng-scope select#retention_duration_type option"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(durationType) != -1) {
                                    desiredOption = option;
                                    return true;
                                }
                            }
                        )
                    });
                })
                .then(function clickOption() {
                    if (desiredOption) {
                        desiredOption.click();
                    }
                });
        },

        clickOnTheAddEndRulesRetentionPeriodFromAcquisitionNumberI: function (i) {
            var element = browser.driver.findElement(by.css("div[data-ng-repeat='rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods']:nth-child(" + (i + 1) + ") div.aquisition-period.clearfix.retention.ng-scope div[data-watched-init='endRulesAreDirty = isEndRuleDirty(rtp.end_rules[0])'] a"));
            element.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.createDealContractPeriod.elems.endDateFieldButtonEndRules));
        },


        clickOnTheAddPostTermPeriodFromRetentionNumberI: function (i) {
            var element = browser.driver.findElement(by.css("div[data-ng-repeat='rtps in form.deal.deal_rights_term_period_sets track by $index']:nth-child(4) div[data-ng-repeat='rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods']:nth-child(" + (i + 1) + ") div.aquisition-period.clearfix.retention.ng-scope a[data-ng-click='addPostTermCollectionRightsTermPeriodToRetention(rtps.id, rtp.id)']"));
            element.click();
            pages.createDealRtp.waitForAjax();
        },

        fillIntoTheDescriptionPostTermPeriodNumberJFromRetentionNumberI: function (i, j) {
            var element = browser.driver.findElement(by.css("div[data-ng-repeat='rtps in form.deal.deal_rights_term_period_sets track by $index']:nth-child(4) div[data-ng-repeat='rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods']:nth-child(" + i + ") div[data-ng-repeat='postTermCollectionRTP in rtp.post_term_collection_rights_terms']:nth-child(" + j + ") input[data-ng-model='postTermCollectionRTP.description']"));
            element.sendKeys("Description post term period " + j + " from retention " + i);
        },


        selectTheSpecificScopeNumberKFromRetentionNumberIAndPostTermNumberJ: function (i, j, k) {
            var scopeField = browser.driver.findElement(by.css("div[data-ng-repeat='rtps in form.deal.deal_rights_term_period_sets track by $index']:nth-child(4) div[data-ng-repeat='rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods']:nth-child(" + i + ") div[data-ng-repeat='postTermCollectionRTP in rtp.post_term_collection_rights_terms']:nth-child(" + j + ") div[data-ng-model='postTermCollectionRTP.deal_scope_id_holders'] div[ng-class='tgTypeaheadWrapClass']"));
            scopeField.click();
            var desiredOption;
            var desiredScope = "Scope " + k;
            var scopeInputField = browser.driver.findElement(by.css("div[data-ng-repeat='rtps in form.deal.deal_rights_term_period_sets track by $index']:nth-child(4) div[data-ng-repeat='rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods']:nth-child(" + i + ") div[data-ng-repeat='postTermCollectionRTP in rtp.post_term_collection_rights_terms']:nth-child(" + j + ") div[data-ng-model='postTermCollectionRTP.deal_scope_id_holders'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"));
            scopeInputField.sendKeys("Scope");
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("div[data-ng-repeat='rtps in form.deal.deal_rights_term_period_sets track by $index']:nth-child(4) div[data-ng-repeat='rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods']:nth-child(" + i + ") div[data-ng-repeat='postTermCollectionRTP in rtp.post_term_collection_rights_terms']:nth-child(" + j + ") div[data-ng-model='postTermCollectionRTP.deal_scope_id_holders'] ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-container div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("div[data-ng-repeat='rtps in form.deal.deal_rights_term_period_sets track by $index']:nth-child(4) div[data-ng-repeat='rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods']:nth-child(" + i + ") div[data-ng-repeat='postTermCollectionRTP in rtp.post_term_collection_rights_terms']:nth-child(" + j + ") div[data-ng-model='postTermCollectionRTP.deal_scope_id_holders'] ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-container div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(desiredScope) != -1) {
                                    desiredOption = option;
                                    return true;
                                }
                            }
                        )
                    });
                })
                .then(function clickOption() {
                    if (desiredOption) {
                        desiredOption.click();
                    }
                });
            browser.driver.findElement(by.css("div[data-ng-repeat='rtps in form.deal.deal_rights_term_period_sets track by $index']:nth-child(4) div[data-ng-repeat='rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods']:nth-child(" + i + ") div[data-ng-repeat='postTermCollectionRTP in rtp.post_term_collection_rights_terms']:nth-child(" + j + ") div[data-ng-model='postTermCollectionRTP.deal_scope_id_holders'] ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-footer button[data-ng-click='applySelections($dataSets);']")).click();
            browser.wait(ExpectedConditions.invisibilityOf(element(by.css("div[data-ng-repeat='rtps in form.deal.deal_rights_term_period_sets track by $index']:nth-child(4) div[data-ng-repeat='rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods']:nth-child(" + i + ") div[data-ng-repeat='postTermCollectionRTP in rtp.post_term_collection_rights_terms']:nth-child(" + j + ") div[data-ng-model='postTermCollectionRTP.deal_scope_id_holders'] ul.tg-typeahead__suggestions ng-scope"))));
        },

        fillIntoTheDurationPostTermPeriodNumberJFromRetentionNumberI: function (i, j) {
            var element = browser.driver.findElement(by.css("div[data-ng-repeat='rtps in form.deal.deal_rights_term_period_sets track by $index']:nth-child(4) div[data-ng-repeat='rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods']:nth-child(" + i + ") div[data-ng-repeat='postTermCollectionRTP in rtp.post_term_collection_rights_terms']:nth-child(" + j + ") input[data-ng-model='postTermCollectionRTP.duration']"));
            var number = Math.floor(Math.random() * 100) + 1;
            element.sendKeys(number);
        },

        clickOnTheAddPostTermPeriodFromAcquisition: function () {
            pages.createDealRtp.elems.addPostTermPeriodLinkFromAcquisition.click();
            pages.createDealRtp.waitForAjax();
        },


        fillIntoTheDescriptionPostTermPeriodNumberIFromAcquisition: function (i) {
            var element = browser.driver.findElement(by.css("div[data-ng-repeat='rtps in form.deal.deal_rights_term_period_sets track by $index']:nth-child(4) div[data-ng-repeat='rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods']:nth-child(" + (i + 5) + ") div[data-name='postTermRtpForm'] input[data-ng-model='rtp.description']"));
            element.sendKeys("Description post term period " + i + " from acquisition ");
        },


        selectTheSpecificScopeNumberJForPostTermNumberI: function (i, j) {
            var scopeField = browser.driver.findElement(by.css("div[data-ng-repeat='rtps in form.deal.deal_rights_term_period_sets track by $index']:nth-child(4) div[data-ng-repeat='rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods']:nth-child(" + (i + 5) + ") div[data-name='postTermRtpForm'] div[data-ng-model='rtp.deal_scope_id_holders'] div[ng-class='tgTypeaheadWrapClass'] "));
            scopeField.click();
            var desiredOption;
            var desiredScope = "Scope " + j;
            var scopeInputField = browser.driver.findElement(by.css("div[data-ng-repeat='rtps in form.deal.deal_rights_term_period_sets track by $index']:nth-child(4) div[data-ng-repeat='rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods']:nth-child(" + (i + 5) + ") div[data-name='postTermRtpForm'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"));
            scopeInputField.sendKeys("Scope");
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("div[data-ng-repeat='rtps in form.deal.deal_rights_term_period_sets track by $index']:nth-child(4) div[data-ng-repeat='rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods']:nth-child(" + (i + 5) + ") div[data-name='postTermRtpForm'] ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-container div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("div[data-ng-repeat='rtps in form.deal.deal_rights_term_period_sets track by $index']:nth-child(4) div[data-ng-repeat='rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods']:nth-child(" + (i + 5) + ") div[data-name='postTermRtpForm'] ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-container div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(desiredScope) != -1) {
                                    desiredOption = option;
                                    return true;
                                }
                            }
                        )
                    });
                })
                .then(function clickOption() {
                    if (desiredOption) {
                        desiredOption.click();
                    }
                });
            browser.driver.findElement(by.css("div[data-ng-repeat='rtps in form.deal.deal_rights_term_period_sets track by $index']:nth-child(4) div[data-ng-repeat='rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods']:nth-child(" + (i + 5) + ") div[data-name='postTermRtpForm'] ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-footer button[data-ng-click='applySelections($dataSets);']")).click();
            browser.wait(ExpectedConditions.invisibilityOf(element(by.css("div[data-ng-repeat='rtps in form.deal.deal_rights_term_period_sets track by $index']:nth-child(4) div[data-ng-repeat='rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods']:nth-child(" + (i + 5) + ") div[data-name='postTermRtpForm'] ul.tg-typeahead__suggestions ng-scope"))));
        },

        fillIntoTheDurationPostTermPeriodNumberIFromAcquisition: function (i) {
            var element = browser.driver.findElement(by.css("div[data-ng-repeat='rtps in form.deal.deal_rights_term_period_sets track by $index']:nth-child(4) div[data-ng-repeat='rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods']:nth-child(" + (i + 5) + ") div[data-name='postTermRtpForm'] input[data-ng-model='rtp.duration']"));
            var number = Math.floor(Math.random() * 100) + 1;
            element.sendKeys(number);
        },

        fillIntoTheAcquisitionDescription: function (i) {
            var description = "Acquisition description " + i;
            pages.createDealRtp.elems.acquisitionDescription.sendKeys(description);
        },

        clickOnTheAddAnotherAcquisitionPeriodLink: function () {
            pages.createDealRtp.elems.addAnotherRtpSetLink.click();
            browser.wait(ExpectedConditions.visibilityOf((pages.createDealRtp.elems.acquisitionDescription)));
        }

    });
}