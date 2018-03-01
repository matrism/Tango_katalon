"use strict";

var _ = require("lodash");
var ExpectedConditions = protractor.ExpectedConditions;
var pages_path = _tf_config._system_.path_to_pages;

if (pages.createDealRtp === undefined) {
    pages.createDealRtp = new ftf.pageObject({
        locators: {
            contractPeriodsRtpField: {css: "div[ng-model='tgModularEditModel.dealContractPeriods'] div[ng-class='tgTypeaheadWrapClass']"},
            contractPeriodsRtpInputField: {css: "div[data-ng-model='rtps.deal_contract_period_id_holders'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            selectAllContractPeriodRtpLink: {css: "ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-header"},
            cancelContractPeriodRtpButton: {css: "ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-footer button[data-ng-click='$closePopup();']"},
            applyContractPeriodRtpButton: {css: "ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-footer button[ng-click='applySelections($dataSets);']"},
            acquisitionDescription: {css: "div[ng-repeat='rightsTermPeriodSet in rightsTermPeriodSets track by rightsTermPeriodSet.id'] input[ng-model='tgModularEditModel.description']"},
            scopeAcquisitionField: {css: "div[ng-repeat='rightsTermPeriodSet in rightsTermPeriodSets track by rightsTermPeriodSet.id'] div[ng-model='tgModularEditModel.dealScopeIds'] div[ng-class='tgTypeaheadWrapClass']"},
            scopeAcquisitionInputField: {css: "div[ng-repeat='rightsTermPeriodSet in rightsTermPeriodSets track by rightsTermPeriodSet.id'] div[ng-model='tgModularEditModel.dealScopeIds'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            applyScopeAcquisitionButton: {css: "div[ng-repeat='rightsTermPeriodSet in rightsTermPeriodSets track by rightsTermPeriodSet.id'] ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-footer button[ng-click='applySelections($dataSets);']"},
            acquisitionActualEndDate: {css: "div[name='endDate'] input"},
            acquisitionActualStartDate: {css: "div[ng-model='tgModularEditModel.startDate'] input"},
            addRetentionPeriodLinkFromAcquisition: {css: "a[ng-click='rightsTermPeriodSet.addPeriod(constants.RETENTION)']"},
            addPostTermPeriodLinkFromAcquisition: {css: '[ng-repeat="rightsTermPeriodSet in rightsTermPeriodSets track by rightsTermPeriodSet.id"]:nth-child(1) [ng-click="rightsTermPeriodSet.addPeriod(constants.PTC)"]'},
            addEndRulesLinkRtpRetention2FromAcquisition: {css: "div[ng-repeat='rightsTermPeriod in rightsTermPeriodSet.getRightsTermsPeriodsByPeriod(constants.RETENTION, constants.PTC) | orderBy: orderRightsTermPeriods']:nth-child(2) a[ng-click='!__isFreshlyAdded && tgModularEditModel.addPostTermCollectionPeriod()']"},
            postTermPeriodDescriptionFromAcquisition: {css: "div[data-ng-repeat='rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods']:nth-child(6) div[data-name='postTermRtpForm'] input[data-ng-model='rtp.description']"},
            addAnotherRtpSetLink: {css: "a[ng-click='addRightsTermPeriodSet()']"}
        },

        addEndRulesButton: function () {
            return element.all(by.css('a[ng-click="showEndRules(tgModularEditModel, tgModularViewMethods.switchToView)"]')).filter(function (el) {
                    return el.isDisplayed();
                }).first();
        },

        summaryEndRule: function (i) {
            return $$('[ng-repeat="endRule in tgModularEditModel.endRulesWrapper.endRules.$getItems()"] .rule-summary').get(i - 1);
        },

        row: function (i) {

            return $$('div[ng-repeat="rightsTermPeriod in rightsTermPeriodSet.getRightsTermsPeriodsByPeriod(constants.RETENTION, constants.PTC) | orderBy: orderRightsTermPeriods"]').get(i);

        },

        selectRententionScope: function (i) {

            return  pages.createDealRtp.row(i).element(by.css("div[tg-modular-edit-id='retentionModulatEdit'] div[ng-class='tgTypeaheadWrapClass'] div.tg-typeahead__suggestions-wrap ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-container ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"));
        },

        selectTheRtpAllContractPeriods: function () {
            pages.createDealRtp.waitForAjax();
            asAlways(pages.createDealRtp.elems.contractPeriodsRtpField,'scrollIntoView', 'click', 'waitForAjax');
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
            asAlways(pages.createDealRtp.elems.scopeAcquisitionField, 'scrollIntoView', 'click');
            pages.createDealRtp.elems.scopeAcquisitionInputField.sendKeys("s");
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("div[ng-repeat='rightsTermPeriodSet in rightsTermPeriodSets track by rightsTermPeriodSet.id'] ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-container div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("div[ng-repeat='rightsTermPeriodSet in rightsTermPeriodSets track by rightsTermPeriodSet.id'] ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-container div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
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
            browser.wait(ExpectedConditions.invisibilityOf(element(by.css("div[ng-repeat='rightsTermPeriodSet in rightsTermPeriodSets track by rightsTermPeriodSet.id'] ul.tg-typeahead__suggestions ng-scope"))));
        },

        fillIntoTheAcquisitionEndDateField: function () {
            var time = "2016-08-09";
            pages.createDealRtp.elems.acquisitionActualEndDate.sendKeys(time);
        },

        fillIntoTheAcquisitionStartDateField: function (date) {
            pages.createDealRtp.elems.acquisitionActualStartDate.clear().sendKeys(date);
        },

        clickOnTheAddRetentionPeriodFromAcquisition: function () {
            var el = pages.createDealRtp.elems.addRetentionPeriodLinkFromAcquisition;
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("a[ng-click='rightsTermPeriodSet.addPeriod(constants.RETENTION)']"))));
            asAlways(el, 'scrollIntoView', 'click');
            pages.createDealRtp.waitForAjax();
        },

        fillIntoTheRetentionPeriodDescriptionFromAcquisitionNumberI: function (i) {
            var element = browser.driver.findElement(by.css("div[ng-repeat='rightsTermPeriodSet in rightsTermPeriodSets track by rightsTermPeriodSet.id'] div[ng-repeat='rightsTermPeriod in rightsTermPeriodSet.getRightsTermsPeriodsByPeriod(constants.RETENTION, constants.PTC) | orderBy: orderRightsTermPeriods']:nth-child(" + i + ") div[tg-modular-edit-id='retentionModulatEdit'] input[ng-model='tgModularEditModel.description']"));
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
            var scopeField = browser.driver.findElement(by.css("div[ng-repeat='rightsTermPeriodSet in rightsTermPeriodSets track by rightsTermPeriodSet.id'] div[ng-repeat='rightsTermPeriod in rightsTermPeriodSet.getRightsTermsPeriodsByPeriod(constants.RETENTION, constants.PTC) | orderBy: orderRightsTermPeriods']:nth-child(" + i + ") div[tg-modular-edit-id='retentionModulatEdit'] input[placeholder='Search by Scope description']"));
            scopeField.click();
            var desiredOption;
            var desiredScope = "Scope " + j;
            var scopeInputField = browser.driver.findElement(by.css("div[ng-repeat='rightsTermPeriodSet in rightsTermPeriodSets track by rightsTermPeriodSet.id'] div[ng-repeat='rightsTermPeriod in rightsTermPeriodSet.getRightsTermsPeriodsByPeriod(constants.RETENTION, constants.PTC) | orderBy: orderRightsTermPeriods']:nth-child(" + i + ") div[tg-modular-edit-id='retentionModulatEdit'] input[ng-model='$term']"));
            scopeInputField.sendKeys("Scope " + j);
            browser.wait(ExpectedConditions.visibilityOf(pages.createDealRtp.selectRententionScope(i)));
            browser.driver.findElements(pages.createDealRtp.selectRententionScope(i))
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
            // browser.driver.findElement(by.css("div[data-ng-repeat='rtps in form.deal.deal_rights_term_period_sets track by $index']:nth-child(4) div[data-ng-repeat='rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods']:nth-child(" + (i + 1) + ") div.aquisition-period.clearfix.retention.ng-scope ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-footer button[data-ng-click='applySelections($dataSets);']")).click();
            // browser.wait(ExpectedConditions.invisibilityOf(element(by.css("div[data-ng-repeat='rtps in form.deal.deal_rights_term_period_sets track by $index']:nth-child(4) div[data-ng-repeat='rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods']:nth-child(" + (i + 1) + ") div.aquisition-period.clearfix.retention.ng-scope ul.tg-typeahead__suggestions ng-scope"))));
        },

        selectTheSpecificDurationTypeRetentionFromAcquisitionNumberI: function (i, durationType) {
            var desiredOption;
            var elm = $$('[tg-model-class-validation="tgModularEditModel.durationType"] select').get(i);
            //browser.driver.findElements(by.css("select[id='retentionDurationType'] option:nth-child(" + (i + 1) + ")"))
            elm.$('option').then(function findMatchingOption(options) {
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

        selectTheSpecificDurationTypeRetentionFromAcquisitionNumberX: function (i, durationType) {
            var elm = $('[tg-model-class-validation="tgModularEditModel.durationType"] select[id="retentionDurationType"]');
            elm.click();
            browser.sleep(1000);
            switch(durationType){
                case "Life of Copyright":
                    elm.$$('option').get(1).click();
                    break;
                case "Fixed Duration":
                    elm.$$('option').get(2).click();
                    break;
                case "Conditional Duration":
                    elm.$$('option').get(3).click();
                    break;
            }

        },

        clickOnTheAddEndRulesRetentionPeriodFromAcquisitionNumberI: function (i) {
            var element = browser.driver.findElement(by.css("div[ng-repeat='rightsTermPeriod in rightsTermPeriodSet.getRightsTermsPeriodsByPeriod(constants.RETENTION, constants.PTC) | orderBy: orderRightsTermPeriods']:nth-child("+ i +") a[ng-click='showEndRules(tgModularEditModel, tgModularViewMethods.switchToView)']"));
            element.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.createDealContractPeriod.elems.endDateFieldButtonEndRules));
        },


        clickOnTheAddPostTermPeriodFromRetentionNumberI: function (i) {
            var element = browser.driver.findElement(by.css("div[ng-repeat='rightsTermPeriod in rightsTermPeriodSet.getRightsTermsPeriodsByPeriod(constants.RETENTION, constants.PTC) | orderBy: orderRightsTermPeriods']:nth-child("+ i + ") [ng-click='!__isFreshlyAdded && tgModularEditModel.addPostTermCollectionPeriod()']"));
            element.click();
            pages.createDealRtp.waitForAjax();
        },

        fillIntoTheDescriptionPostTermPeriodNumberJFromRetentionNumberI: function (i, j, k) {
            //var element = browser.driver.findElement(by.css("div[data-ng-repeat='rtps in form.deal.deal_rights_term_period_sets track by $index']:nth-child(4) div[data-ng-repeat='rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods']:nth-child(" + i + ") div[data-ng-repeat='postTermCollectionRTP in rtp.post_term_collection_rights_terms']:nth-child(" + j + ") input[data-ng-model='postTermCollectionRTP.description']"));
            var element = $$('[ng-repeat="rightsTermPeriodSet in rightsTermPeriodSets track by rightsTermPeriodSet.id"]:nth-child('+ i +') [ng-repeat="rightsTermPeriod in rightsTermPeriodSet.getRightsTermsPeriodsByPeriod(constants.RETENTION, constants.PTC) | orderBy: orderRightsTermPeriods"]:nth-child('+ j +') [ng-repeat="postTermCollection in rightsTermPeriod.followingRightsTermsPeriods.$getItems()"]:nth-child('+ k +') [ng-model="tgModularEditModel.description"]')
            element.sendKeys("Description post term period " + j + " from retention " + i);
        },


        selectTheSpecificScopeNumberKFromRetentionNumberIAndPostTermNumberJ: function (i, j, k, l) {
            //var scopeField = browser.driver.findElement(by.css("div[data-ng-repeat='rtps in form.deal.deal_rights_term_period_sets track by $index']:nth-child(4) div[data-ng-repeat='rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods']:nth-child(" + i + ") div[data-ng-repeat='postTermCollectionRTP in rtp.post_term_collection_rights_terms']:nth-child(" + j + ") div[data-ng-model='postTermCollectionRTP.deal_scope_id_holders'] div[ng-class='tgTypeaheadWrapClass']"));
            var scopeField = browser.driver.findElement(by.css('[ng-repeat="rightsTermPeriodSet in rightsTermPeriodSets track by rightsTermPeriodSet.id"]:nth-child('+ i +') [ng-repeat="rightsTermPeriod in rightsTermPeriodSet.getRightsTermsPeriodsByPeriod(constants.RETENTION, constants.PTC) | orderBy: orderRightsTermPeriods"]:nth-child('+ j +') [ng-repeat="postTermCollection in rightsTermPeriod.followingRightsTermsPeriods.$getItems()"]:nth-child('+ l +') input[ng-model="$term"]'));
            scopeField.click();
            var desiredOption;
            var desiredScope = "Scope " + k;
            //var scopeInputField = browser.driver.findElement(by.css("div[data-ng-repeat='rtps in form.deal.deal_rights_term_period_sets track by $index']:nth-child(4) div[data-ng-repeat='rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods']:nth-child(" + i + ") div[data-ng-repeat='postTermCollectionRTP in rtp.post_term_collection_rights_terms']:nth-child(" + j + ") div[data-ng-model='postTermCollectionRTP.deal_scope_id_holders'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"));
            scopeField.sendKeys("Scope");
            browser.wait(ExpectedConditions.visibilityOf(element(by.css('.tg-typeahead__suggestions.ng-scope'))));
            browser.driver.findElements(By.css('.tg-typeahead__suggestions.ng-scope'))
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
            browser.driver.findElement(by.css('.tg-typeahead__suggestions-footer .pull-right.btn.btn-primary')).click();
            browser.sleep(1000);
            browser.wait(ExpectedConditions.visibilityOf(element(by.css('[ng-repeat="rightsTermPeriodSet in rightsTermPeriodSets track by rightsTermPeriodSet.id"]:nth-child('+ i +') [ng-repeat="rightsTermPeriod in rightsTermPeriodSet.getRightsTermsPeriodsByPeriod(constants.RETENTION, constants.PTC) | orderBy: orderRightsTermPeriods"]:nth-child('+ j +') [ng-repeat="postTermCollection in rightsTermPeriod.followingRightsTermsPeriods.$getItems()"]:nth-child('+ l +') .tg-typeahead__tag-name.ng-binding'))));
        },

        fillIntoTheDurationPostTermPeriodNumberJFromRetentionNumberI: function (i, j, l) {
            var element = browser.driver.findElement(by.css('[ng-repeat="rightsTermPeriodSet in rightsTermPeriodSets track by rightsTermPeriodSet.id"]:nth-child('+ i +') [ng-repeat="rightsTermPeriod in rightsTermPeriodSet.getRightsTermsPeriodsByPeriod(constants.RETENTION, constants.PTC) | orderBy: orderRightsTermPeriods"]:nth-child('+ j +') [ng-repeat="postTermCollection in rightsTermPeriod.followingRightsTermsPeriods.$getItems()"]:nth-child('+ l +') [ng-model="tgModularEditModel.duration"]'));
            var number = Math.floor(Math.random() * 100) + 1;
            element.sendKeys(number);
        },

        clickOnTheAddPostTermPeriodFromAcquisition: function () {
            pages.createDealRtp.elems.addPostTermPeriodLinkFromAcquisition.click();
            pages.createDealRtp.waitForAjax();
        },


        fillIntoTheDescriptionPostTermPeriodNumberIFromAcquisition: function (i) {
            var element = browser.driver.findElement(by.css('[ng-repeat="rightsTermPeriodSet in rightsTermPeriodSets track by rightsTermPeriodSet.id"]:nth-child(1) [ng-repeat="rightsTermPeriod in rightsTermPeriodSet.getRightsTermsPeriodsByPeriod(constants.RETENTION, constants.PTC) | orderBy: orderRightsTermPeriods"]:nth-child('+ (i+2) +') [ng-model="tgModularEditModel.description"]'));
            element.sendKeys("Description post term period " + i + " from acquisition ");
        },


        selectTheSpecificScopeNumberJForPostTermNumberI: function (i, j, k) {
            var scopeField = browser.driver.findElement(by.css('[ng-repeat="rightsTermPeriodSet in rightsTermPeriodSets track by rightsTermPeriodSet.id"]:nth-child('+ i +') [ng-repeat="rightsTermPeriod in rightsTermPeriodSet.getRightsTermsPeriodsByPeriod(constants.RETENTION, constants.PTC) | orderBy: orderRightsTermPeriods"]:nth-child('+ (j+2) +') [ng-model="$term"]'));
            scopeField.click();
            var desiredOption;
            var desiredScope = "Scope " + k;
            //var scopeInputField = browser.driver.findElement(by.css("div[data-ng-repeat='rtps in form.deal.deal_rights_term_period_sets track by $index']:nth-child(4) div[data-ng-repeat='rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods']:nth-child(" + (i + 5) + ") div[data-name='postTermRtpForm'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"));
            scopeField.sendKeys("Scope");
            browser.wait(ExpectedConditions.visibilityOf(element(by.css('.tg-typeahead__suggestions.ng-scope'))));
            browser.driver.findElements(By.css('.tg-typeahead__suggestions.ng-scope'))
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
            browser.driver.findElement(by.css('.tg-typeahead__suggestions-footer .pull-right.btn.btn-primary')).click();
            browser.wait(ExpectedConditions.visibilityOf(element(by.css('[ng-repeat="rightsTermPeriodSet in rightsTermPeriodSets track by rightsTermPeriodSet.id"]:nth-child('+ i +') [ng-repeat="rightsTermPeriod in rightsTermPeriodSet.getRightsTermsPeriodsByPeriod(constants.RETENTION, constants.PTC) | orderBy: orderRightsTermPeriods"]:nth-child('+ (j+2) + ') .tg-typeahead__tag-name.ng-binding'))));
        },

        clickOnAddEndRules: function () {
            asAlways(pages.createDealRtp.addEndRulesButton(), 'scrollIntoView', 'click');
        },

        hoverEndRulesButton: function () {
            asAlways(pages.createDealRtp.addEndRulesButton(), 'scrollIntoView', 'hover');
        },

        getSummaryEndRuleText: function (i) {
            return pages.createDealRtp.summaryEndRule(i).getText();
        },

        fillIntoTheDurationPostTermPeriodNumberIFromAcquisition: function (i,j) {
            var element = browser.driver.findElement(by.css('[ng-repeat="rightsTermPeriodSet in rightsTermPeriodSets track by rightsTermPeriodSet.id"]:nth-child('+ i +') [ng-repeat="rightsTermPeriod in rightsTermPeriodSet.getRightsTermsPeriodsByPeriod(constants.RETENTION, constants.PTC) | orderBy: orderRightsTermPeriods"]:nth-child('+ (j+2) +') [ng-model="tgModularEditModel.duration"]'));
            var number = Math.floor(Math.random() * 100) + 1;
            element.sendKeys(number);
        },

        fillIntoTheAcquisitionDescription: function (i) {
            var description = "Acquisition description " + i;
            browser.wait(ExpectedConditions.visibilityOf((pages.createDealRtp.elems.acquisitionDescription)));
            pages.createDealRtp.elems.acquisitionDescription.sendKeys(description);
        },

        clickOnTheAddAnotherAcquisitionPeriodLink: function () {
            pages.createDealRtp.elems.addAnotherRtpSetLink.click();
            browser.wait(ExpectedConditions.visibilityOf((pages.createDealRtp.elems.acquisitionDescription)));
        }

    });
}
