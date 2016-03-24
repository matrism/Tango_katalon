"use strict";

var ExpectedConditions = protractor.ExpectedConditions;
var pages_path = _tf_config._system_.path_to_pages;

if (pages.editDealAdvanceApplicableEarnings === undefined) {
    pages.editDealAdvanceApplicableEarnings = new ftf.pageObject({
        locators: {
            editAaeHeaderLink: {css: "a[data-ng-class='{ active: form.show.advances.applicableEarnings.show }']"},
            editAaeTitleText: {css: "div[data-ng-if='!form.show.advances.createNewAdvance'] h3"},
            editAaeArea: {css: "div.advance-earnings.span12.nomargins.EDITOR"},
            editAaeIcon: {css: "a[data-ng-click='openEditForApplicableEarnings()']"},


            editSetDefaultsLinkAdvanceApplicableEarnings: {css: "table thead tr th.percent-income a[data-ng-click='setAllDefaults()']"},
            editClearAllLinkAdvanceApplicableEarnings: {css: "table thead tr th.percent-income a[data-ng-click='clearAllDefaults()']"},
            editIncludeAllPipelineCheckBoxAdvanceApplicableEarnings: {css: "table thead tr th.includes-pipeline span[data-ng-click='toggleAllPipelines()'] i"},
            editSynchronisationPercentAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(1) td.percent-income input[name='acPercent']"},
            editMechanicalPercentAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(2) td.percent-income input[name='acPercent']"},
            editPublicPerformancePercentAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(3) td.percent-income input[name='acPercent']"},
            editGrandRightsPercentAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(4) td.percent-income input[name='acPercent']"},
            editPrintRightsPercentAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(5) td.percent-income input[name='acPercent']"},
            editOtherRightsPercentAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(6) td.percent-income input[name='acPercent']"},
            editSynchPipelineCheckBoxAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(1) td.includes-pipeline i"},
            editMechPipelineCheckBoxAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(2) td.includes-pipeline i"},
            editPerfPipelineCheckBoxAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(3) td.includes-pipeline i"},
            editGrandPipelineCheckBoxAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(4) td.includes-pipeline i"},
            editPrintPipelineCheckBoxAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(5) td.includes-pipeline i"},
            editOtherPipelineCheckBoxAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(6) td.includes-pipeline i"},
            editDefineSynchTerritoriesAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(1) td.advance-ea-territories.pipeline-territories a"},
            editDefineMechTerritoriesAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(2) td.advance-ea-territories.pipeline-territories a"},
            editDefinePerfTerritoriesAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(3) td.advance-ea-territories.pipeline-territories a"},
            editDefineGrandTerritoriesAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(4) td.advance-ea-territories.pipeline-territories a"},
            editDefinePrintTerritoriesAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(5) td.advance-ea-territories.pipeline-territories a"},
            editDefineOtherTerritoriesAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(6) td.advance-ea-territories.pipeline-territories a"},
            editDefineSynchTerritoriesFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(1) td.advance-ea-territories.pipeline-territories div.tg-territory div[ng-class='tgTypeaheadWrapClass']"},
            editDefineMechTerritoriesFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(2) td.advance-ea-territories.pipeline-territories div.tg-territory div[ng-class='tgTypeaheadWrapClass']"},
            editDefinePerfTerritoriesFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(3) td.advance-ea-territories.pipeline-territories div.tg-territory div[ng-class='tgTypeaheadWrapClass']"},
            editDefineGrandTerritoriesFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(4) td.advance-ea-territories.pipeline-territories div.tg-territory div[ng-class='tgTypeaheadWrapClass']"},
            editDefinePrintTerritoriesFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(5) td.advance-ea-territories.pipeline-territories div.tg-territory div[ng-class='tgTypeaheadWrapClass']"},
            editDefineOtherTerritoriesFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(6) td.advance-ea-territories.pipeline-territories div.tg-territory div[ng-class='tgTypeaheadWrapClass']"},
            editDefineSynchTerritoriesInputFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(1) td.advance-ea-territories.pipeline-territories div.tg-territory div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            editDefineMechTerritoriesInputFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(2) td.advance-ea-territories.pipeline-territories div.tg-territory div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            editDefinePerfTerritoriesInputFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(3) td.advance-ea-territories.pipeline-territories div.tg-territory div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            editDefineGrandTerritoriesInputFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(4) td.advance-ea-territories.pipeline-territories div.tg-territory div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            editDefinePrintTerritoriesInputFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(5) td.advance-ea-territories.pipeline-territories div.tg-territory div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            editDefineOtherTerritoriesInputFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(6) td.advance-ea-territories.pipeline-territories div.tg-territory div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            editRemoveSynchTerritoriesAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(1) td.advance-ea-territories.pipeline-territories div.tg-territory div[ng-class='tgTypeaheadWrapClass'] span[ng-click='!$isDisabled() && $removeTag($tag); $event.stopPropagation();']"},
            editRemoveMechTerritoriesAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(2) td.advance-ea-territories.pipeline-territories div.tg-territory div[ng-class='tgTypeaheadWrapClass'] span[ng-click='!$isDisabled() && $removeTag($tag); $event.stopPropagation();']"},
            editRemovePerfTerritoriesAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(3) td.advance-ea-territories.pipeline-territories div.tg-territory div[ng-class='tgTypeaheadWrapClass'] span[ng-click='!$isDisabled() && $removeTag($tag); $event.stopPropagation();']"},
            editRemoveGrandTerritoriesAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(4) td.advance-ea-territories.pipeline-territories div.tg-territory div[ng-class='tgTypeaheadWrapClass'] span[ng-click='!$isDisabled() && $removeTag($tag); $event.stopPropagation();']"},
            editRemovePrintTerritoriesAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(5) td.advance-ea-territories.pipeline-territories div.tg-territory div[ng-class='tgTypeaheadWrapClass'] span[ng-click='!$isDisabled() && $removeTag($tag); $event.stopPropagation();']"},
            editRemoveOtherTerritoriesAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(6) td.advance-ea-territories.pipeline-territories div.tg-territory div[ng-class='tgTypeaheadWrapClass'] span[ng-click='!$isDisabled() && $removeTag($tag); $event.stopPropagation();']"},
            editDefineSynchLabelsAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(1) td.advance-ea-labels.pipeline-labels a"},
            editDefineMechLabelsAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(2) td.advance-ea-labels.pipeline-labels a"},
            editDefinePerfLabelsAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(3) td.advance-ea-labels.pipeline-labels a"},
            editDefineGrandLabelsAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(4) td.advance-ea-labels.pipeline-labels a"},
            editDefinePrintLabelsAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(5) td.advance-ea-labels.pipeline-labels a"},
            editDefineOtherLabelsAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(6) td.advance-ea-labels.pipeline-labels a"},
            editDefineSynchLabelsFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(1) td.advance-ea-labels.pipeline-labels div[ng-class='tgTypeaheadWrapClass']"},
            editDefineMechLabelsFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(2) td.advance-ea-labels.pipeline-labels div[ng-class='tgTypeaheadWrapClass']"},
            editDefinePerfLabelsFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(3) td.advance-ea-labels.pipeline-labels div[ng-class='tgTypeaheadWrapClass']"},
            editDefineGrandLabelsFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(4) td.advance-ea-labels.pipeline-labels div[ng-class='tgTypeaheadWrapClass']"},
            editDefinePrintLabelsFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(5) td.advance-ea-labels.pipeline-labels div[ng-class='tgTypeaheadWrapClass']"},
            editDefineOthersLabelsFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(6) td.advance-ea-labels.pipeline-labels div[ng-class='tgTypeaheadWrapClass']"},
            editDefineSynchLabelsInputFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(1) td.advance-ea-labels.pipeline-labels div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            editDefineMechLabelsInputFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(2) td.advance-ea-labels.pipeline-labels div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            editDefinePerfLabelsInputFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(3) td.advance-ea-labels.pipeline-labels div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            editDefineGrandLabelsInputFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(4) td.advance-ea-labels.pipeline-labels div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            editDefinePrintLabelsInputFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(5) td.advance-ea-labels.pipeline-labels div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            editDefineOthersLabelsInputFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(6) td.advance-ea-labels.pipeline-labels div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            editRemoveSynchLabelAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(1) td.advance-ea-labels.pipeline-labels div[ng-class='tgTypeaheadWrapClass'] span[ng-click='!$isDisabled() && $removeTag($tag)']"},
            editRemoveMechLabelAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(2) td.advance-ea-labels.pipeline-labels div[ng-class='tgTypeaheadWrapClass'] span[ng-click='!$isDisabled() && $removeTag($tag)']"},
            editRemovePerfLabelAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(3) td.advance-ea-labels.pipeline-labels div[ng-class='tgTypeaheadWrapClass'] span[ng-click='!$isDisabled() && $removeTag($tag)']"},
            editRemoveGrandLabelAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(4) td.advance-ea-labels.pipeline-labels div[ng-class='tgTypeaheadWrapClass'] span[ng-click='!$isDisabled() && $removeTag($tag)']"},
            editRemovePrintLabelAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(5) td.advance-ea-labels.pipeline-labels div[ng-class='tgTypeaheadWrapClass'] span[ng-click='!$isDisabled() && $removeTag($tag)']"},
            editRemoveOthersLabelAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(6) td.advance-ea-labels.pipeline-labels div[ng-class='tgTypeaheadWrapClass'] span[ng-click='!$isDisabled() && $removeTag($tag)']"},
            editCancelAdvanceApplicableEarningsButton: {css: "div[data-ng-form='applicableEarningsForm'] div.CONTROLS.clearfix button.btn.btn-cancel.pull-left"},
            editSaveAdvanceApplicableEarningsButton: {css: "div[data-ng-form='applicableEarningsForm'] div.CONTROLS.clearfix button[data-ng-click='updateDeal(!applicableEarningsForm.$invalid)']"}

        },

        checkTheAdvanceApplicableEarningsHeaderLinkIsPresent: function () {
            expect(pages.editDealAdvanceApplicableEarnings.elems.editAaeHeaderLink.isDisplayed()).toBeTruthy();
        },

        clickOnTheAdvanceApplicableEarningsHeaderTitleLink: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editAaeHeaderLink.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealAdvanceApplicableEarnings.elems.editAaeTitleText));
        },

        editTheAdvanceApplicableEarningsArea: function () {
            browser.actions().mouseMove(pages.editDealAdvanceApplicableEarnings.elems.editAaeArea).perform();
            pages.editDealAdvanceApplicableEarnings.elems.editAaeIcon.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealAdvanceApplicableEarnings.elems.editSynchronisationPercentAdvanceApplicableEarnings));
        },


        editClickOnTheSetDefaultsLinkAdvanceApplicableEarnings: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editSetDefaultsLinkAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        },

        editClickOnTheClearAllLinkAdvanceApplicableEarnings: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editClearAllLinkAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        },

        editClickOnTheIncludesPipelineCheckBoxHeader: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editIncludeAllPipelineCheckBoxAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        },

        editFillIntoTheSynchronisationPercentFieldAdvanceApplicableEarnings: function () {
            var percent = (Math.random() * 99 + 1).toFixed(2);
            pages.editDealAdvanceApplicableEarnings.elems.editSynchronisationPercentAdvanceApplicableEarnings.clear();
            pages.editDealAdvanceApplicableEarnings.elems.editSynchronisationPercentAdvanceApplicableEarnings.sendKeys(percent);
        },

        editFillIntoTheMechanicalPercentFieldAdvanceApplicableEarnings: function () {
            var percent = (Math.random() * 99 + 1).toFixed(2);
            pages.editDealAdvanceApplicableEarnings.elems.editMechanicalPercentAdvanceApplicableEarnings.clear();
            pages.editDealAdvanceApplicableEarnings.elems.editMechanicalPercentAdvanceApplicableEarnings.sendKeys(percent);
        },

        editFillIntoThePublicPerformancePercentFieldAdvanceApplicableEarnings: function () {
            var percent = (Math.random() * 99 + 1).toFixed(2);
            pages.editDealAdvanceApplicableEarnings.elems.editPublicPerformancePercentAdvanceApplicableEarnings.clear();
            pages.editDealAdvanceApplicableEarnings.elems.editPublicPerformancePercentAdvanceApplicableEarnings.sendKeys(percent);
        },

        editFillIntoTheGrandRightsPercentFieldAdvanceApplicableEarnings: function () {
            var percent = (Math.random() * 99 + 1).toFixed(2);
            pages.editDealAdvanceApplicableEarnings.elems.editGrandRightsPercentAdvanceApplicableEarnings.clear();
            pages.editDealAdvanceApplicableEarnings.elems.editGrandRightsPercentAdvanceApplicableEarnings.sendKeys(percent);
        },

        editFillIntoThePrintRightsPercentFieldAdvanceApplicableEarnings: function () {
            var percent = (Math.random() * 99 + 1).toFixed(2);
            pages.editDealAdvanceApplicableEarnings.elems.editPrintRightsPercentAdvanceApplicableEarnings.clear();
            pages.editDealAdvanceApplicableEarnings.elems.editPrintRightsPercentAdvanceApplicableEarnings.sendKeys(percent);
        },

        editFillIntoTheOtherRightsPercentFieldAdvanceApplicableEarnings: function () {
            var percent = (Math.random() * 99 + 1).toFixed(2);
            pages.editDealAdvanceApplicableEarnings.elems.editOtherRightsPercentAdvanceApplicableEarnings.clear();
            pages.editDealAdvanceApplicableEarnings.elems.editOtherRightsPercentAdvanceApplicableEarnings.sendKeys(percent);
        },

        editClickOnTheSynchPipelineCheckBoxAdvanceApplicableEarnings: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editSynchPipelineCheckBoxAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        },

        editClickOnTheMechPipelineCheckBoxAdvanceApplicableEarnings: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editMechPipelineCheckBoxAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        },

        editClickOnThePerfPipelineCheckBoxAdvanceApplicableEarnings: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editPerfPipelineCheckBoxAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        },

        editClickOnTheGrandPipelineCheckBoxAdvanceApplicableEarnings: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editGrandPipelineCheckBoxAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        },

        editClickOnThePrintPipelineCheckBoxAdvanceApplicableEarnings: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editPrintPipelineCheckBoxAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        },

        editClickOnTheOtherPipelineCheckBoxAdvanceApplicableEarnings: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editOtherPipelineCheckBoxAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        },

        editSelectTheRandomDefineSynchTerritoryAdvanceApplicableEarnings: function () {
            //browser.wait(ExpectedConditions.elementToBeClickable(pages.editDealAdvanceApplicableEarnings.elems.editDefineSynchTerritoriesFieldAdvanceApplicableEarnings));
            //pages.editDealAdvanceApplicableEarnings.elems.editDefineSynchTerritoriesFieldAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.elems.editDefineSynchTerritoriesInputFieldAdvanceApplicableEarnings.sendKeys("a");
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("table tbody tr:nth-child(1) td.advance-ea-territories.pipeline-territories ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("table tbody tr:nth-child(1) td.advance-ea-territories.pipeline-territories ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * 5 + 1));
                    var element = options[randomNumber];
                    browser.actions().mouseMove(element).click().perform();
                    browser.sleep(2000);
                })
        },


        editSelectTheRandomDefineMechTerritoryAdvanceApplicableEarnings: function () {
            //browser.wait(ExpectedConditions.elementToBeClickable(pages.editDealAdvanceApplicableEarnings.elems.editDefineMechTerritoriesFieldAdvanceApplicableEarnings));
            //pages.editDealAdvanceApplicableEarnings.elems.editDefineMechTerritoriesFieldAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.elems.editDefineMechTerritoriesInputFieldAdvanceApplicableEarnings.sendKeys("a");
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("table tbody tr:nth-child(2) td.advance-ea-territories.pipeline-territories ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("table tbody tr:nth-child(2) td.advance-ea-territories.pipeline-territories ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    //var randomNumber = Math.floor((Math.random() * (options.length - 1) + 1));
                    var randomNumber = Math.floor((Math.random() * 5 + 1));
                    var element = options[randomNumber];
                    browser.actions().mouseMove(element).click().perform();
                })
        },

        editSelectTheRandomDefinePerfTerritoryAdvanceApplicableEarnings: function () {
            //browser.wait(ExpectedConditions.elementToBeClickable(pages.editDealAdvanceApplicableEarnings.elems.editDefinePerfTerritoriesFieldAdvanceApplicableEarnings));
            //pages.editDealAdvanceApplicableEarnings.elems.editDefinePerfTerritoriesFieldAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.elems.editDefinePerfTerritoriesInputFieldAdvanceApplicableEarnings.sendKeys("a");
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("table tbody tr:nth-child(3) td.advance-ea-territories.pipeline-territories ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("table tbody tr:nth-child(3) td.advance-ea-territories.pipeline-territories ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    //var randomNumber = Math.floor((Math.random() * (options.length - 1) + 1));
                    var randomNumber = Math.floor((Math.random() * 5 + 1));
                    var element = options[randomNumber];
                    browser.actions().mouseMove(element).click().perform();
                })
        },

        editSelectTheRandomDefineGrandTerritoryAdvanceApplicableEarnings: function () {
            //browser.wait(ExpectedConditions.elementToBeClickable(pages.editDealAdvanceApplicableEarnings.elems.editDefineGrandTerritoriesFieldAdvanceApplicableEarnings));
            //pages.editDealAdvanceApplicableEarnings.elems.editDefineGrandTerritoriesFieldAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.elems.editDefineGrandTerritoriesInputFieldAdvanceApplicableEarnings.sendKeys("a");
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("table tbody tr:nth-child(4) td.advance-ea-territories.pipeline-territories ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("table tbody tr:nth-child(4) td.advance-ea-territories.pipeline-territories ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    //var randomNumber = Math.floor((Math.random() * (options.length - 1) + 1));
                    var randomNumber = Math.floor((Math.random() * 5 + 1));
                    var element = options[randomNumber];
                    browser.actions().mouseMove(element).click().perform();
                })
        },


        editSelectTheRandomDefinePrintTerritoryAdvanceApplicableEarnings: function () {
            //browser.wait(ExpectedConditions.elementToBeClickable(pages.editDealAdvanceApplicableEarnings.elems.editDefinePrintTerritoriesFieldAdvanceApplicableEarnings));
            //pages.editDealAdvanceApplicableEarnings.elems.editDefinePrintTerritoriesFieldAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.elems.editDefinePrintTerritoriesInputFieldAdvanceApplicableEarnings.sendKeys("a");
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("table tbody tr:nth-child(5) td.advance-ea-territories.pipeline-territories ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("table tbody tr:nth-child(5) td.advance-ea-territories.pipeline-territories ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * 5 + 1));
                    //var randomNumber = Math.floor((Math.random() * (options.length - 1) + 1));
                    var element = options[randomNumber];
                    browser.actions().mouseMove(element).click().perform();
                })
        },

        editSelectTheRandomDefineOtherTerritoryAdvanceApplicableEarnings: function () {
            //browser.wait(ExpectedConditions.elementToBeClickable(pages.editDealAdvanceApplicableEarnings.elems.editDefineOtherTerritoriesFieldAdvanceApplicableEarnings));
            //pages.editDealAdvanceApplicableEarnings.elems.editDefineOtherTerritoriesFieldAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.elems.editDefineOtherTerritoriesInputFieldAdvanceApplicableEarnings.sendKeys("a");
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("table tbody tr:nth-child(6) td.advance-ea-territories.pipeline-territories ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("table tbody tr:nth-child(6) td.advance-ea-territories.pipeline-territories ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * 5 + 1));
                    //var randomNumber = Math.floor((Math.random() * (options.length - 1) + 1));
                    var element = options[randomNumber];
                    browser.actions().mouseMove(element).click().perform();
                })
        },

        editSelectTheRandomDefineSynchLabelAdvanceApplicableEarnings: function () {
            var value = Math.random().toString(36).substr(2, 3);
            browser.wait(ExpectedConditions.elementToBeClickable(pages.editDealAdvanceApplicableEarnings.elems.editDefineSynchLabelsFieldAdvanceApplicableEarnings));
            pages.editDealAdvanceApplicableEarnings.elems.editDefineSynchLabelsFieldAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.elems.editDefineSynchLabelsInputFieldAdvanceApplicableEarnings.clear();
            pages.editDealAdvanceApplicableEarnings.elems.editDefineSynchLabelsInputFieldAdvanceApplicableEarnings.sendKeys(value);
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("table tbody tr:nth-child(1) td.advance-ea-labels.pipeline-labels ul.tg-typeahead__suggestions.ng-scope"))));

            element(By.css("table tbody tr:nth-child(1) td.advance-ea-labels.pipeline-labels li.tg-typeahead__suggestions-footer")).getText().then(function (promise) {
                console.log("Text from label is : " + promise);
                if (promise.indexOf("Create New Label") != -1) {
                    browser.driver.findElements(By.css("table tbody tr:nth-child(1) td.advance-ea-labels.pipeline-labels li.tg-typeahead__suggestions-footer div a"))
                        .then(function (options) {
                            var randomNumber = Math.floor((Math.random() * options.length));
                            var element = options[randomNumber];
                            browser.actions().mouseMove(element).click().perform();
                        })
                }
                else {
                    browser.driver.findElements(By.css("table tbody tr:nth-child(1) td.advance-ea-labels.pipeline-labels ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope div"))
                        .then(function (options) {
                            var randomNumber = Math.floor((Math.random() * options.length));
                            var element = options[randomNumber];
                            browser.actions().mouseMove(element).click().perform();
                        })
                }
            });
        },


        editSelectTheRandomDefineMechLabelAdvanceApplicableEarnings: function () {
            var value = Math.random().toString(36).substr(2, 3);
            browser.wait(ExpectedConditions.elementToBeClickable(pages.editDealAdvanceApplicableEarnings.elems.editDefineMechLabelsFieldAdvanceApplicableEarnings));
            pages.editDealAdvanceApplicableEarnings.elems.editDefineMechLabelsFieldAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.elems.editDefineMechLabelsInputFieldAdvanceApplicableEarnings.clear();
            pages.editDealAdvanceApplicableEarnings.elems.editDefineMechLabelsInputFieldAdvanceApplicableEarnings.sendKeys(value);
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("table tbody tr:nth-child(2) td.advance-ea-labels.pipeline-labels ul.tg-typeahead__suggestions.ng-scope"))));

            element(By.css("table tbody tr:nth-child(2) td.advance-ea-labels.pipeline-labels li.tg-typeahead__suggestions-footer")).getText().then(function (promise) {
                console.log("Text from label is : " + promise);
                if (promise.indexOf("Create New Label") != -1) {
                    browser.driver.findElements(By.css("table tbody tr:nth-child(2) td.advance-ea-labels.pipeline-labels li.tg-typeahead__suggestions-footer div a"))
                        .then(function (options) {
                            var randomNumber = Math.floor((Math.random() * options.length));
                            var element = options[randomNumber];
                            browser.actions().mouseMove(element).click().perform();
                        })
                }
                else {
                    browser.driver.findElements(By.css("table tbody tr:nth-child(2) td.advance-ea-labels.pipeline-labels ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope div"))
                        .then(function (options) {
                            var randomNumber = Math.floor((Math.random() * options.length));
                            var element = options[randomNumber];
                            browser.actions().mouseMove(element).click().perform();
                        })
                }
            });
        },

        editSelectTheRandomDefinePerfLabelAdvanceApplicableEarnings: function () {
            var value = Math.random().toString(36).substr(2, 3);
            browser.wait(ExpectedConditions.elementToBeClickable(pages.editDealAdvanceApplicableEarnings.elems.editDefinePerfLabelsFieldAdvanceApplicableEarnings));
            pages.editDealAdvanceApplicableEarnings.elems.editDefinePerfLabelsFieldAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.elems.editDefinePerfLabelsInputFieldAdvanceApplicableEarnings.clear();
            pages.editDealAdvanceApplicableEarnings.elems.editDefinePerfLabelsInputFieldAdvanceApplicableEarnings.sendKeys(value);
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("table tbody tr:nth-child(3) td.advance-ea-labels.pipeline-labels ul.tg-typeahead__suggestions.ng-scope"))));

            element(By.css("table tbody tr:nth-child(3) td.advance-ea-labels.pipeline-labels li.tg-typeahead__suggestions-footer")).getText().then(function (promise) {
                console.log("Text from label is : " + promise);
                if (promise.indexOf("Create New Label") != -1) {
                    browser.driver.findElements(By.css("table tbody tr:nth-child(3) td.advance-ea-labels.pipeline-labels li.tg-typeahead__suggestions-footer div a"))
                        .then(function (options) {
                            var randomNumber = Math.floor((Math.random() * options.length));
                            var element = options[randomNumber];
                            browser.actions().mouseMove(element).click().perform();
                        })
                }
                else {
                    browser.driver.findElements(By.css("table tbody tr:nth-child(3) td.advance-ea-labels.pipeline-labels ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope div"))
                        .then(function (options) {
                            var randomNumber = Math.floor((Math.random() * options.length));
                            var element = options[randomNumber];
                            browser.actions().mouseMove(element).click().perform();
                        })
                }
            });
        },


        editSelectTheRandomDefineGrandLabelAdvanceApplicableEarnings: function () {
            var value = Math.random().toString(36).substr(2, 3);
            browser.wait(ExpectedConditions.elementToBeClickable(pages.editDealAdvanceApplicableEarnings.elems.editDefineGrandLabelsFieldAdvanceApplicableEarnings));
            pages.editDealAdvanceApplicableEarnings.elems.editDefineGrandLabelsFieldAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.elems.editDefineGrandLabelsInputFieldAdvanceApplicableEarnings.clear();
            pages.editDealAdvanceApplicableEarnings.elems.editDefineGrandLabelsInputFieldAdvanceApplicableEarnings.sendKeys(value);
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("table tbody tr:nth-child(4) td.advance-ea-labels.pipeline-labels ul.tg-typeahead__suggestions.ng-scope"))));

            element(By.css("table tbody tr:nth-child(4) td.advance-ea-labels.pipeline-labels li.tg-typeahead__suggestions-footer")).getText().then(function (promise) {
                console.log("Text from label is : " + promise);
                if (promise.indexOf("Create New Label") != -1) {
                    browser.driver.findElements(By.css("table tbody tr:nth-child(4) td.advance-ea-labels.pipeline-labels li.tg-typeahead__suggestions-footer div a"))
                        .then(function (options) {
                            var randomNumber = Math.floor((Math.random() * options.length));
                            var element = options[randomNumber];
                            browser.actions().mouseMove(element).click().perform();
                        })
                }
                else {
                    browser.driver.findElements(By.css("table tbody tr:nth-child(4) td.advance-ea-labels.pipeline-labels ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope div"))
                        .then(function (options) {
                            var randomNumber = Math.floor((Math.random() * options.length));
                            var element = options[randomNumber];
                            browser.actions().mouseMove(element).click().perform();
                        })
                }
            });
        },

        editSelectTheRandomDefinePrintLabelAdvanceApplicableEarnings: function () {
            var value = Math.random().toString(36).substr(2, 3);
            browser.wait(ExpectedConditions.elementToBeClickable(pages.editDealAdvanceApplicableEarnings.elems.editDefinePrintLabelsFieldAdvanceApplicableEarnings));
            pages.editDealAdvanceApplicableEarnings.elems.editDefinePrintLabelsFieldAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.elems.editDefinePrintLabelsInputFieldAdvanceApplicableEarnings.clear();
            pages.editDealAdvanceApplicableEarnings.elems.editDefinePrintLabelsInputFieldAdvanceApplicableEarnings.sendKeys(value);
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("table tbody tr:nth-child(5) td.advance-ea-labels.pipeline-labels ul.tg-typeahead__suggestions.ng-scope"))));

            element(By.css("table tbody tr:nth-child(5) td.advance-ea-labels.pipeline-labels li.tg-typeahead__suggestions-footer")).getText().then(function (promise) {
                console.log("Text from label is : " + promise);
                if (promise.indexOf("Create New Label") != -1) {
                    browser.driver.findElements(By.css("table tbody tr:nth-child(5) td.advance-ea-labels.pipeline-labels li.tg-typeahead__suggestions-footer div a"))
                        .then(function (options) {
                            var randomNumber = Math.floor((Math.random() * options.length));
                            var element = options[randomNumber];
                            browser.actions().mouseMove(element).click().perform();
                        })
                }
                else {
                    browser.driver.findElements(By.css("table tbody tr:nth-child(5) td.advance-ea-labels.pipeline-labels ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope div"))
                        .then(function (options) {
                            var randomNumber = Math.floor((Math.random() * options.length));
                            var element = options[randomNumber];
                            browser.actions().mouseMove(element).click().perform();
                        })
                }
            });
        },

        editSelectTheRandomDefineOtherLabelAdvanceApplicableEarnings: function () {
            var value = Math.random().toString(36).substr(2, 3);
            browser.wait(ExpectedConditions.elementToBeClickable(pages.editDealAdvanceApplicableEarnings.elems.editDefineOthersLabelsFieldAdvanceApplicableEarnings));
            pages.editDealAdvanceApplicableEarnings.elems.editDefineOthersLabelsFieldAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.elems.editDefineOthersLabelsInputFieldAdvanceApplicableEarnings.clear();
            pages.editDealAdvanceApplicableEarnings.elems.editDefineOthersLabelsInputFieldAdvanceApplicableEarnings.sendKeys(value);
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("table tbody tr:nth-child(6) td.advance-ea-labels.pipeline-labels ul.tg-typeahead__suggestions.ng-scope"))));

            element(By.css("table tbody tr:nth-child(6) td.advance-ea-labels.pipeline-labels li.tg-typeahead__suggestions-footer")).getText().then(function (promise) {
                console.log("Text from label is : " + promise);
                if (promise.indexOf("Create New Label") != -1) {
                    browser.driver.findElements(By.css("table tbody tr:nth-child(6) td.advance-ea-labels.pipeline-labels li.tg-typeahead__suggestions-footer div a"))
                        .then(function (options) {
                            var randomNumber = Math.floor((Math.random() * options.length));
                            var element = options[randomNumber];
                            browser.actions().mouseMove(element).click().perform();
                        })
                }
                else {
                    browser.driver.findElements(By.css("table tbody tr:nth-child(6) td.advance-ea-labels.pipeline-labels ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope div"))
                        .then(function (options) {
                            var randomNumber = Math.floor((Math.random() * options.length));
                            var element = options[randomNumber];
                            browser.actions().mouseMove(element).click().perform();
                        })
                }
            });
        },

        editClickOnTheSaveAdvanceApplicableEarnings: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editSaveAdvanceApplicableEarningsButton.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        },

        editClickOnTheCancelAdvanceApplicableEarnings: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editCancelAdvanceApplicableEarningsButton.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        },

        editClickOnTheDefineSynchTerritoryFieldAdvanceApplicableEarnings: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editDefineSynchTerritoriesFieldAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        },

        editClickOnTheDefineMechTerritoryFieldAdvanceApplicableEarnings: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editDefineMechTerritoriesFieldAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        },

        editClickOnTheDefinePerfTerritoryFieldAdvanceApplicableEarnings: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editDefinePerfTerritoriesFieldAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        },

        editClickOnTheDefineGrandTerritoryFieldAdvanceApplicableEarnings: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editDefineGrandTerritoriesFieldAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        },

        editClickOnTheDefinePrintTerritoryFieldAdvanceApplicableEarnings: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editDefinePrintTerritoriesFieldAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        },

        editClickOnTheDefineOtherTerritoryFieldAdvanceApplicableEarnings: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editDefineOtherTerritoriesFieldAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        },

        editClickOnTheDefineSynchLabelFieldAdvanceApplicableEarnings: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editDefineSynchLabelsFieldAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        },

        editClickOnTheDefineMechLabelFieldAdvanceApplicableEarnings: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editDefineMechLabelsFieldAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        },

        editClickOnTheDefinePerfLabelFieldAdvanceApplicableEarnings: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editDefinePerfLabelsFieldAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        },

        editClickOnTheDefineGrandLabelFieldAdvanceApplicableEarnings: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editDefineGrandLabelsFieldAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        },

        editClickOnTheDefinePrintLabelFieldAdvanceApplicableEarnings: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editDefinePrintLabelsFieldAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        },

        editClickOnTheDefineOtherLabelFieldAdvanceApplicableEarnings: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editDefineOthersLabelsFieldAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        },

        editClickOnTheDefineSynchTerritoryAdvanceApplicableEarnings: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editDefineSynchTerritoriesAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        },

        editClickOnTheDefineMechTerritoryAdvanceApplicableEarnings: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editDefineMechTerritoriesAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        },

        editClickOnTheDefinePerfTerritoryAdvanceApplicableEarnings: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editDefinePerfTerritoriesAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        },

        editClickOnTheDefineGrandTerritoryAdvanceApplicableEarnings: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editDefineGrandTerritoriesAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        },

        editClickOnTheDefinePrintTerritoryAdvanceApplicableEarnings: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editDefinePrintTerritoriesAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        },

        editClickOnTheDefineOtherTerritoryAdvanceApplicableEarnings: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editDefineOtherTerritoriesAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        },

        editClickOnTheDefineSynchLabelAdvanceApplicableEarnings: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editDefineSynchLabelsAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        },

        editClickOnTheDefineMechLabelAdvanceApplicableEarnings: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editDefineMechLabelsAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        },

        editClickOnTheDefinePerfLabelAdvanceApplicableEarnings: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editDefinePerfLabelsAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        },

        editClickOnTheDefineGrandLabelAdvanceApplicableEarnings: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editDefineGrandLabelsAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        },

        editClickOnTheDefinePrintLabelAdvanceApplicableEarnings: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editDefinePrintLabelsAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        },

        editClickOnTheDefineOtherLabelAdvanceApplicableEarnings: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editDefineOthersLabelsAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        },

        editClickOnTheRemoveSynchTerritoryAdvanceApplicableEarnings: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editRemoveSynchTerritoriesAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        },

        editClickOnTheRemoveMechTerritoryAdvanceApplicableEarnings: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editRemoveMechTerritoriesAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        },

        editClickOnTheRemovePerfTerritoryAdvanceApplicableEarnings: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editRemovePerfTerritoriesAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        },

        editClickOnTheRemoveGrandTerritoryAdvanceApplicableEarnings: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editRemoveGrandTerritoriesAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        },

        editClickOnTheRemovePrintTerritoryAdvanceApplicableEarnings: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editRemovePrintTerritoriesAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        },

        editClickOnTheRemoveOtherTerritoryAdvanceApplicableEarnings: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editRemoveOtherTerritoriesAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        },

        editClickOnTheRemoveSynchLabelAdvanceApplicableEarnings: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editRemoveSynchLabelAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        },

        editClickOnTheRemoveMechLabelAdvanceApplicableEarnings: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editRemoveMechLabelAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        },

        editClickOnTheRemovePerfLabelAdvanceApplicableEarnings: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editRemovePerfLabelAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        },

        editClickOnTheRemoveGrandLabelAdvanceApplicableEarnings: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editRemoveGrandLabelAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        },

        editClickOnTheRemovePrintLabelAdvanceApplicableEarnings: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editRemovePrintLabelAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        },

        editClickOnTheRemoveOtherLabelAdvanceApplicableEarnings: function () {
            pages.editDealAdvanceApplicableEarnings.elems.editRemoveOthersLabelAdvanceApplicableEarnings.click();
            pages.editDealAdvanceApplicableEarnings.waitForAjax();
        }

    })

}

