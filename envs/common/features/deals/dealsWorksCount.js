'use strict';

var moment = require('moment'),
    randomId = random.id.makeMemoizedGenerator(),
    randomString = random.string.makeMemoizedGenerator();

exports.id = 'a8f953e7-7a3b-4e63-9e89-def519e6e73c';

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['deals', 'dealWorksCount', 'regression'];


if (systemConfig.env.name == 'staging_test'){
    var urlUse = 'http://tango.staging-test.tango.qa.wmg.com/';
}else if (systemConfig.env.name == 'staging') {
    var urlUse = 'http://musicpublishing.staging.wmg.com';
}

exports.feature = [
    {
        name: "Deals view work count",
        tags: ["dealsViewWork"],
        steps: function()
        {
            //steps: criticalScenario(() =>

            steps.base.useBlankEntityDataSlot('work', 0);
            steps.newWork.goToNewWorkPage();
            steps.newWork.enterPrimaryWorkTitle('TEST WORK ' + (new Date()).getTime());
            steps.work.selectRandomCreator(0);
            steps.newWork.enterCreatorContribution(0, 100);
            steps.newWork.optToIncludeWorkOnWebsite(false);
            steps.newWork.saveWork();

            steps.base.openTheNewTab(urlUse);
            steps.base.focusOnNewOpenedTab(1);
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTabWithData("ascap", "Italy");
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.fillMandatoryFieldsContractPeriodSpecificValue("2014-12-16");
            steps.createDealContractPeriod.enterTargetEndDateInMonths("12");
            steps.createDealScope.addScopeTypeAndTerritory("Administration", "Europe");
            steps.base.scrollIntoView("Add publisher shares set link", pages.createDealScope.elems.addPublisherShareSetLink);
            steps.createDealScope.clickOnAddPublisherShareSet();
            steps.createDealScope.fillIntoFirstPublisherNameField("wb music corp");
            steps.createDealScope.selectSpecificPublisherNameDropDownValue("(53026414)\nwb music corp.");
            steps.createDealScope.fillIntoFirstPublisherNameOwnFieldSpecificValue("70");
            steps.createDealScope.fillIntoFirstPublisherNameAMField("wb music corp");
            steps.createDealScope.selectSpecificPublisherNameDropDownValue("(53026414)\nwb music corp.");
            steps.createDealScope.fillIntoFirstPublisherNameAMCollectFieldSpecificValue("70");

            steps.createDealScope.addSpecificScopeTypeAndTerritory("Administration", "Worldwide");
            steps.base.scrollIntoView("Add publisher shares set link", pages.createDealScope.elems.addPublisherShareSetLink);
            steps.createDealScope.clickOnAddPublisherShareSet();
            steps.createDealScope.fillIntoFirstPublisherNameField("wb music corp");
            steps.createDealScope.selectRandomPublisherNameDropDownValue();
            steps.createDealScope.fillIntoFirstPublisherNameOwnFieldSpecificValue("30");
            steps.createDealScope.fillIntoFirstPublisherNameAMField("wb music corp");
            steps.createDealScope.selectSpecificPublisherNameDropDownValue("(53026414)\nwb music corp.");
            steps.createDealScope.fillIntoFirstPublisherNameAMCollectFieldSpecificValue("30");

            steps.deal.itContinueToNextPage();
            steps.base.scrollIntoView("acquisition ", pages.createDealRtp.elems.acquisitionDescription);
            steps.createDealRtp.fillIntoAcquisitionDescription(1);
            steps.createDealRtp.selectSpecificScopeNumberIRtpAcquisition(1);
            steps.createDealRtp.selectSpecificScopeNumberIRtpAcquisition(2);

            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();

            steps.base.focusOnNewOpenedTab(0);
            steps.work.refreshThePage();
            steps.work.goToScopeDeliveryTab();
            steps.scopeDelivery.deliverWork();
            steps.base.focusOnNewOpenedTab(1);
            steps.scopeDelivery.getDealNumberCreatedInTabNumberAndUseToWorkDelivery(0);

            steps.base.focusOnNewOpenedTab(1);
            steps.base.sleep(20000);
            steps.deal.refreshThePage();
            steps.base.sleep(5000);
            steps.editDealScope.clickOnWorkLinkFromScopeNumberI(1);
            steps.work.goBackToMainPageFromWork();

            steps.base.scrollIntoView("Edit publisher share set ", pages.editDealScope.elems.publisherSharesSetArea);
            steps.editDealScope.editPublisherSharesSet();
            steps.editDealScope.editIntoFirstPublisherNameOwnFieldSpecificValue("71");
            steps.editDealScope.editIntoFirstPublisherNameAMCollectFieldSpecificValue("71");
            steps.editDealScope.editSaveThePublisherShareSet();
            steps.deal.checkGrowlMessageDisplayedAfterScopeEdited("Delivered Works are being updated. Please check Deal later today for Delivery conflicts.");

            steps.base.focusOnNewOpenedTab(0);
            steps.base.sleep(20000);
            steps.work.refreshThePage();
            steps.work.goToScopeDeliveryTab();
            steps.work.checkErrorMessageDisplayedOnWorksConflicts("Deal Scopes are in conflict. Resolve by updating Delivery information or Deal Scope.");

            steps.base.focusOnNewOpenedTab(1);
            steps.base.sleep(20000);
            steps.deal.refreshThePage();
            steps.editDealScope.checkWorksCountOnScopeNumberI(1, "1");
            steps.editDealScope.checkWorksCountOnScopeNumberI(2, "1");
            steps.editDealScope.clickOnWorkLinkFromScopeNumberI(1);
            steps.base.sleep(20000);
            steps.work.checkDefaultFilterContractPeriodForWorkLog();
            steps.work.checkDefaultFilterScopeForWorkLog();
            steps.work.checkDefaultFilterAllWorksForWorkLog();
            steps.work.checkDefaultFilterConflictWorksForWorkLog();

            steps.base.closeTheTabByIndex(1);

        }
    },

    {
        name: "Deals view multiple work count",
        tags: ["dealMultipleWorks"],
        steps: function()
        //steps: criticalScenario(() =>
        {
            steps.base.useBlankEntityDataSlot('work', 0);
            steps.newWork.goToNewWorkPage();
            steps.newWork.enterPrimaryWorkTitle('DENISA WORK ' + (new Date()).getTime());
            steps.work.selectRandomCreator(0);
            steps.newWork.enterCreatorContribution(0, 100);
            steps.newWork.optToIncludeWorkOnWebsite(false);
            steps.base.sleep(7000);
            steps.newWork.saveWork();

            steps.base.openTheNewTab(urlUse);
            steps.base.focusOnNewOpenedTab(1);
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTabWithData("ascap", "Italy");
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.fillMandatoryFieldsContractPeriodSpecificValue("2014-12-16");
            steps.createDealContractPeriod.enterTargetEndDateInMonths("12");
            steps.createDealScope.addScopeTypeAndTerritory("Administration", "Europe");
            steps.base.scrollIntoView("Add publisher shares set link", pages.createDealScope.elems.addPublisherShareSetLink);
            steps.createDealScope.clickOnAddPublisherShareSet();
            steps.createDealScope.fillIntoFirstPublisherNameField("wb music corp");
            steps.createDealScope.selectSpecificPublisherNameDropDownValue("(53026414)\nwb music corp.");
            steps.createDealScope.fillIntoFirstPublisherNameOwnFieldSpecificValue("70");
            steps.createDealScope.fillIntoFirstPublisherNameAMField("wb music corp");
            steps.createDealScope.selectSpecificPublisherNameDropDownValue("(53026414)\nwb music corp.");
            steps.createDealScope.fillIntoFirstPublisherNameAMCollectFieldSpecificValue("70");

            steps.createDealScope.addSpecificScopeTypeAndTerritory("Administration", "Worldwide");
            steps.base.scrollIntoView("Add publisher shares set link", pages.createDealScope.elems.addPublisherShareSetLink);
            steps.createDealScope.clickOnAddPublisherShareSet();
            steps.createDealScope.fillIntoFirstPublisherNameField("wb music corp");
            steps.createDealScope.selectRandomPublisherNameDropDownValue();
            steps.createDealScope.fillIntoFirstPublisherNameOwnFieldSpecificValue("30");
            steps.createDealScope.fillIntoFirstPublisherNameAMField("wb music corp");
            steps.createDealScope.selectSpecificPublisherNameDropDownValue("(53026414)\nwb music corp.");
            steps.createDealScope.fillIntoFirstPublisherNameAMCollectFieldSpecificValue("30");

            steps.deal.itContinueToNextPage();
            steps.base.scrollIntoView("acquisition ", pages.createDealRtp.elems.acquisitionDescription);
            steps.createDealRtp.fillIntoAcquisitionDescription(1);
            steps.createDealRtp.selectSpecificScopeNumberIRtpAcquisition(1);
            steps.createDealRtp.selectSpecificScopeNumberIRtpAcquisition(2);

            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();

            steps.base.focusOnNewOpenedTab(0);
            steps.work.refreshThePage();
            steps.work.goToScopeDeliveryTab();
            steps.scopeDelivery.deliverWork();
            steps.base.focusOnNewOpenedTab(1);
            steps.scopeDelivery.getDealNumberCreatedInTabNumberAndUseToWorkDelivery(0);

            steps.base.focusOnNewOpenedTab(1);
            steps.deal.refreshThePage();

            //open a new tab
            steps.base.openTheNewTab(urlUse);
            steps.base.focusOnNewOpenedTab(2);
            // create a new work entitled  A WORK 1
            steps.base.useBlankEntityDataSlot('work', 0);
            steps.newWork.goToNewWorkPage();
            steps.newWork.enterPrimaryWorkTitle('THE WORK 1' + (new Date()).getTime());
            steps.work.selectRandomCreator(0);
            steps.newWork.enterCreatorContribution(0, 100);
            steps.newWork.optToIncludeWorkOnWebsite(false);
            steps.newWork.saveWork();
            var workId1 = steps.work.findCurrentlyOpenWorkId();

            //open a new tab
            steps.newWork.goToNewWorkPage();
            steps.newWork.enterPrimaryWorkTitle('THE WORK 2' + (new Date()).getTime());
            steps.work.selectRandomCreator(0);
            steps.newWork.enterCreatorContribution(0, 100);
            steps.newWork.optToIncludeWorkOnWebsite(false);
            steps.newWork.saveWork();
            var workId2 = steps.work.findCurrentlyOpenWorkId();


            //open a new tab
            steps.newWork.goToNewWorkPage();
            steps.newWork.enterPrimaryWorkTitle('THE WORK 3' + (new Date()).getTime());
            steps.work.selectRandomCreator(0);
            steps.newWork.enterCreatorContribution(0, 100);
            steps.newWork.optToIncludeWorkOnWebsite(false);
            steps.newWork.saveWork();
            var workId3 = steps.work.findCurrentlyOpenWorkId();

            steps.base.focusOnNewOpenedTab(0);
            steps.work.refreshThePage();
            steps.work.goToScopeDeliveryTab();
            steps.scopeDelivery.updateScopeDelivery();
            steps.scopeDelivery.clickScopeDeliveryCheckbox(0, 0);
            steps.scopeDelivery.clickScopeDeliveryCheckbox(0, 0);
            steps.scopeDelivery.clickOnRemoveScopeDelivery();
            steps.scopeDelivery.save();

            steps.base.focusOnNewOpenedTab(1);
            steps.editDealContractPeriod.editSelectContractPeriodNumberI(1);
            steps.editDealScope.selectScopeNumberI(1);
            //modify scope territory
            steps.editDealScope.editScopeArea();
            steps.editDealScope.editDeleteExistingTerritoryFromScope();
            steps.editDealScope.editAddTheSpecificTerritoryByTypingToScope("germany");
            steps.editDealScope.editSelectSpecificCountry("Germany");
            steps.editDealScope.editSaveScopeChanges();


            steps.editDealContractPeriod.editSelectContractPeriodNumberI(1);
            steps.editDealScope.selectScopeNumberI(2);
            steps.editDealScope.editScopeArea();
            steps.editDealScope.editDeleteExistingTerritoryFromScope();
            steps.editDealScope.editAddTheSpecificTerritoryByTypingToScope("germany");
            steps.editDealScope.editSelectSpecificCountry("Germany");
            steps.editDealScope.editSaveScopeChanges();
            //modify publisher share set
            steps.editDealScope.editPublisherSharesSet();
            steps.editDealScope.editClearIntoFirstPublisherNameOwnField();
            steps.editDealScope.editIntoFirstPublisherNameOwnFieldSpecificValue("35");
            steps.editDealScope.editClearIntoFirstPublisherNameAMCollectField();
            steps.editDealScope.editIntoFirstPublisherNameAMCollectFieldSpecificValue("35");
            steps.editDealScope.editSaveThePublisherShareSet();

            //deliver deal to a work 1
            steps.base.focusOnNewOpenedTab(2);
            steps.base.goToHomePage();
            steps.work.selectWorkSearchFilterTag(0, 'Work ID');
            steps.work.enterWorkSearchTerms(workId1);
            steps.base.sleep(200);
            steps.base.waitForAjax();
            steps.work.clickWorkSearchMatch(0);
            steps.base.waitForAjax();
            steps.work.refreshThePage();
            steps.work.goToScopeDeliveryTab();
            steps.scopeDelivery.deliverWork();
            steps.base.focusOnNewOpenedTab(1);
            steps.scopeDelivery.getDealNumberCreatedInTabNumberAndUseToWorkDeliveryWithOneScope(2);
            //steps.scopeDelivery.checkErrorMessageScopeDeliveryConflict("Conflicts with Deal");

            //deliver deal to a work 2
            steps.base.focusOnNewOpenedTab(2);
            steps.base.goToHomePage();
            steps.work.selectWorkSearchFilterTag(0, 'Work ID');
            steps.work.enterWorkSearchTerms(workId2);
            steps.base.sleep(200);
            steps.base.waitForAjax();
            steps.work.clickWorkSearchMatch(0);
            steps.base.waitForAjax();
            steps.work.refreshThePage();
            steps.work.goToScopeDeliveryTab();
            steps.scopeDelivery.deliverWork();
            steps.base.focusOnNewOpenedTab(1);
            steps.scopeDelivery.getDealNumberCreatedInTabNumberAndUseToWorkDeliveryWithOneScope(2);

            //deliver deal to a work 3
            steps.base.focusOnNewOpenedTab(2);
            steps.base.goToHomePage();
            steps.work.selectWorkSearchFilterTag(0, 'Work ID');
            steps.work.enterWorkSearchTerms(workId3);
            steps.base.sleep(200);
            steps.base.waitForAjax();
            steps.work.clickWorkSearchMatch(0);
            steps.base.waitForAjax();
            steps.work.refreshThePage();
            steps.work.goToScopeDeliveryTab();
            steps.scopeDelivery.deliverWork();
            steps.base.focusOnNewOpenedTab(1);
            steps.scopeDelivery.getDealNumberCreatedInTabNumberAndUseToWorkDeliveryWithOneScope(2);

            steps.base.focusOnNewOpenedTab(1);
            steps.deal.refreshThePage();

            //steps.editDealScope.clickOnWorkLinkFromScopeNumberI(1);
            steps.editDealScope.clickOnWorkLinkFromScopeName();
            steps.work.checkDefaultFilterContractPeriodForWorkLog();
            steps.work.checkDefaultFilterScopeForWorkLog();
            steps.work.checkDefaultFilterAllWorksForWorkLog();
            steps.work.checkDefaultFilterConflictWorksForWorkLog();
            steps.work.goBackToMainPageFromWork();

            steps.base.closeTheTabByIndex(2);
            steps.base.closeTheTabByIndex(1);

        }
    },


    {
        name: "Deals view lad work count",
        tags: ['ladDealsWorks', 'lad'],
        steps: function()
        //steps: criticalScenario(() =>
        {

            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTabWithData("ascap", "Italy");
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.fillMandatoryFieldsContractPeriodSpecificValue("2014-12-16");
            steps.createDealContractPeriod.enterTargetEndDateInMonths("12");
            steps.createDealScope.addScopeTypeAndTerritory("Administration", "Europe");
            steps.base.scrollIntoView("Add publisher shares set link", pages.createDealScope.elems.addPublisherShareSetLink);
            steps.createDealScope.clickOnAddPublisherShareSet();
            steps.createDealScope.fillIntoFirstPublisherNameField("wb music corp");
            steps.createDealScope.selectSpecificPublisherNameDropDownValue("(53026414)\nwb music corp.");
            steps.createDealScope.fillIntoFirstPublisherNameOwnFieldSpecificValue("70");
            steps.createDealScope.fillIntoFirstPublisherNameAMField("wb music corp");
            steps.createDealScope.selectSpecificPublisherNameDropDownValue("(53026414)\nwb music corp.");
            steps.createDealScope.fillIntoFirstPublisherNameAMCollectFieldSpecificValue("70");

            steps.createDealScope.addSpecificScopeTypeAndTerritory("Administration", "Worldwide");
            steps.base.scrollIntoView("Add publisher shares set link", pages.createDealScope.elems.addPublisherShareSetLink);
            steps.createDealScope.clickOnAddPublisherShareSet();
            steps.createDealScope.fillIntoFirstPublisherNameField("wb music corp");
            steps.createDealScope.selectRandomPublisherNameDropDownValue();
            steps.createDealScope.fillIntoFirstPublisherNameOwnFieldSpecificValue("30");
            steps.createDealScope.fillIntoFirstPublisherNameAMField("wb music corp");
            steps.createDealScope.selectSpecificPublisherNameDropDownValue("(53026414)\nwb music corp.");
            steps.createDealScope.fillIntoFirstPublisherNameAMCollectFieldSpecificValue("30");

            steps.deal.itContinueToNextPage();
            steps.base.scrollIntoView("acquisition ", pages.createDealRtp.elems.acquisitionDescription);
            steps.createDealRtp.fillIntoAcquisitionDescription(1);
            steps.createDealRtp.selectSpecificScopeNumberIRtpAcquisition(1);
            steps.createDealRtp.selectSpecificScopeNumberIRtpAcquisition(2);

            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();

            steps.base.openTheNewTab(urlUse);
            steps.base.focusOnNewOpenedTab(1);
            steps.base.useBlankEntityDataSlot('work', 0);
            steps.newWork.goToNewWorkPage();
            steps.newWork.enterPrimaryWorkTitle('DATA WORK 1 ' + (new Date()).getTime());
            steps.work.selectRandomCreator(0);
            steps.newWork.enterCreatorContribution(0, 100);
            steps.newWork.optToIncludeWorkOnWebsite(false);
            steps.newWork.saveWork();

            steps.work.refreshThePage();
            steps.work.goToScopeDeliveryTab();
            steps.scopeDelivery.deliverWork();
            steps.base.focusOnNewOpenedTab(0);
            steps.scopeDelivery.getDealNumberCreatedInTabNumberAndUseToWorkDeliveryWithOneScope(1);

            steps.base.focusOnNewOpenedTab(0);
            steps.deal.refreshThePage();

            //create another 99 works and deliver to the same deal
            for (var i = 2; i <= 20; i++) {
                steps.base.focusOnNewOpenedTab(1);
                steps.base.useBlankEntityDataSlot('work', 0);
                steps.newWork.goToNewWorkPage();
                steps.newWork.enterPrimaryWorkTitle('THE WORK ' + i + (new Date()).getTime());
                steps.work.selectRandomCreator(0);
                steps.newWork.enterCreatorContribution(0, 100);
                steps.newWork.optToIncludeWorkOnWebsite(false);
                steps.newWork.saveWork();

                steps.work.goToScopeDeliveryTab();
                steps.scopeDelivery.deliverWork();
                steps.base.focusOnNewOpenedTab(0);
                steps.scopeDelivery.getDealNumberCreatedInTabNumberAndUseToWorkDeliveryWithOneScope(1);
                steps.base.focusOnNewOpenedTab(0);
                steps.deal.refreshThePage();
            }

            steps.editDealContractPeriod.editAddNewContractPeriod();
            steps.editDealContractPeriod.editFillEndTargetMonths();
            steps.deal.refreshThePage();
            steps.editDealScope.editAddSpecificScopeTypeAndTerritory("Administration", "Worldwide");
            steps.editDealScope.editSaveAllChanges();

            steps.editDealContractPeriod.editSelectContractPeriodNumberI(1);
            //steps.editDealScope.clickOnWorkLinkFromScopeNumberI(1);

            steps.editDealScope.clickOnWorkLinkFromScopeName();
            steps.work.checkDefaultFilterContractPeriodForWorkLog();
            steps.work.checkDefaultFilterScopeForWorkLog();
            steps.work.checkDefaultFilterAllWorksForWorkLog();
            steps.work.checkDefaultFilterConflictWorksForWorkLog();
            steps.work.goBackToMainPageFromWork();

            steps.base.closeTheTabByIndex(1);

        }
    },


    {
        name: "Deals view additional work count",
        tags: ["additionalDealsWorks"],
        //steps: criticalScenario(() => {
        steps: function(){

                steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTabWithData("ascap", "Italy");
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.fillMandatoryFieldsContractPeriodSpecificValue("2014-12-16");
            steps.createDealContractPeriod.enterTargetEndDateInMonths("12");
            for (var i = 1; i <= 4; i++) {
                steps.createDealScope.addScopeTypeAndTerritory("Administration", "Europe");
            }

            steps.deal.itContinueToNextPage();
            steps.base.scrollIntoView("acquisition ", pages.createDealRtp.elems.acquisitionDescription);
            steps.createDealRtp.fillIntoAcquisitionDescription(1);
            for (var i = 1; i <= 4; i++) {
                steps.createDealRtp.selectRandomScopeRtpAcquisitionNumberI(i);
            }

            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();

            steps.base.openTheNewTab(urlUse);
            //create another 5 works and deliver to the same deal
            for (var i = 1; i <= 4; i++) {
                steps.base.focusOnNewOpenedTab(1);
                steps.base.useBlankEntityDataSlot('work', 0);
                steps.newWork.goToNewWorkPage();
                steps.newWork.enterPrimaryWorkTitle('NEW TEST WORK ' +  (new Date()).getTime());
                steps.work.selectRandomCreator(0);
                steps.newWork.enterCreatorContribution(0, 100);
                steps.newWork.optToIncludeWorkOnWebsite(false);
                steps.newWork.saveWork();

                steps.base.sleep(3000);
                steps.work.refreshPage();
                steps.base.sleep(5000);
                steps.work.goToScopeDeliveryTab();
                steps.scopeDelivery.deliverWork();
                steps.base.focusOnNewOpenedTab(0);
                steps.scopeDelivery.getDealNumberCreatedInTabNumberAndUseToWorkDeliveryWithScopeIndex(1, 0, 3);

                steps.base.focusOnNewOpenedTab(0);
                steps.deal.refreshThePage();
                steps.base.sleep(5000);
            }

            steps.editDealScope.clickOnWorkLinkFromScopeNumberI(1);
            steps.work.checkDefaultFilterContractPeriodForWorkLog();
            steps.work.checkDefaultFilterScopeForWorkLog();
            steps.work.checkDefaultFilterAllWorksForWorkLog();
            steps.work.checkDefaultFilterConflictWorksForWorkLog();

            steps.work.clickOnWorkLinkFromDeliveryWorksPageNumberI(1);
            steps.base.focusOnNewOpenedTab(2);
            steps.base.sleep(5000);
            steps.work.goToScopeDeliveryTab();
            steps.base.sleep(5000);
            steps.scopeDelivery.updateScopeDelivery();


            steps.scopeDelivery.clickScopeDeliveryCheckbox(0, 0);
            //steps.scopeDelivery.clickOnRemoveScopeDelivery();
            steps.scopeDelivery.save();

            steps.base.focusOnNewOpenedTab(0);
            steps.deal.refreshThePage();

            steps.base.closeTheTabByIndex(2);
            steps.base.closeTheTabByIndex(1);


        }
    },


    {
        name: "Deals view filter work count",
        tags: ["filterDealsWorks"],
        steps: function() {
        //steps: criticalScenario(() => {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTabWithData("ascap", "Italy");
            steps.deal.itContinueToNextPage();

            steps.createDealContractPeriod.fillMandatoryFieldsContractPeriodSpecificValue("2015-01-02");
            steps.createDealContractPeriod.fillActualEndDateField();
            steps.createDealContractPeriod.addNewContractPeriodDialog();
            steps.createDealContractPeriod.fillEndTargetMonths();
            for (var i = 3; i <= 6; i++) {
                steps.createDealContractPeriod.addNewContractPeriod();
                steps.createDealContractPeriod.fillEndTargetMonths();
            }

            steps.createDealContractPeriod.selectContractPeriodNumberI(1);
            steps.createDealScope.addSpecificScopeTypeAndTerritory("Administration", "Italy");
            steps.base.scrollIntoView("Add publisher shares set link", pages.createDealScope.elems.addPublisherShareSetLink);
            steps.createDealScope.clickOnAddPublisherShareSet();
            steps.createDealScope.fillIntoFirstPublisherNameField("wb music corp");
            steps.createDealScope.selectSpecificPublisherNameDropDownValue("(53026414)\nwb music corp.");
            steps.createDealScope.fillIntoFirstPublisherNameOwnFieldSpecificValue("50");
            steps.createDealScope.fillIntoFirstPublisherNameAMField("wb music corp");
            steps.createDealScope.selectSpecificPublisherNameDropDownValue("(53026414)\nwb music corp.");
            steps.createDealScope.fillIntoFirstPublisherNameAMCollectFieldSpecificValue("50");
            steps.createDealScope.addSpecificScopeTypeAndTerritory("Administration", "Italy");
            steps.base.scrollIntoView("Add publisher shares set link", pages.createDealScope.elems.addPublisherShareSetLink);
            steps.createDealScope.clickOnAddPublisherShareSet();
            steps.createDealScope.fillIntoFirstPublisherNameField("wb music corp");
            steps.createDealScope.selectRandomPublisherNameDropDownValue();
            steps.createDealScope.fillIntoFirstPublisherNameOwnFieldSpecificValue("50");
            steps.createDealScope.fillIntoFirstPublisherNameAMField("wb music corp");
            steps.createDealScope.selectSpecificPublisherNameDropDownValue("(53026414)\nwb music corp.");
            steps.createDealScope.fillIntoFirstPublisherNameAMCollectFieldSpecificValue("50");


            steps.createDealContractPeriod.selectContractPeriodNumberI(2);
            steps.createDealScope.addSpecificScopeTypeAndTerritory("Administration", "Europe");

            steps.createDealContractPeriod.selectContractPeriodNumberI(3);
            steps.createDealScope.addSpecificScopeTypeAndTerritory("Administration", "Germany");
            steps.createDealScope.addSpecificScopeTypeAndTerritory("Administration", "Asia");

            steps.createDealContractPeriod.selectContractPeriodNumberI(4);
            steps.createDealScope.addSpecificScopeTypeAndTerritory("Administration", "Finland");

            steps.createDealContractPeriod.selectContractPeriodNumberI(5);
            steps.createDealScope.addSpecificScopeTypeAndTerritory("Administration", "Asia");

            steps.createDealContractPeriod.selectContractPeriodNumberI(6);
            steps.createDealScope.addSpecificScopeTypeAndTerritory("Administration", "Africa");

            steps.deal.itContinueToNextPage();
            steps.base.scrollIntoView("acquisition ", pages.createDealRtp.elems.acquisitionDescription);
            steps.createDealRtp.fillIntoAcquisitionDescription(1);
            steps.createDealRtp.selectRandomScopeRtpAcquisitionNumberI(1);
            steps.createDealRtp.selectRandomScopeRtpAcquisitionNumberI(2);
            steps.createDealRtp.selectRandomScopeRtpAcquisitionNumberI(3);
            steps.createDealRtp.selectRandomScopeRtpAcquisitionNumberI(4);
            steps.createDealRtp.selectRandomScopeRtpAcquisitionNumberI(5);
            steps.createDealRtp.selectRandomScopeRtpAcquisitionNumberI(6);
            steps.createDealRtp.selectRandomScopeRtpAcquisitionNumberI(7);
            steps.createDealRtp.selectRandomScopeRtpAcquisitionNumberI(8);

            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();

            //add works and deliver work to deal
            steps.base.openTheNewTab(urlUse);
            steps.base.focusOnNewOpenedTab(1);
            steps.base.useBlankEntityDataSlot('work', 0);
            steps.newWork.goToNewWorkPage();
            steps.newWork.enterPrimaryWorkTitle('NEW TEST WORK ' + (new Date()).getTime());
            steps.work.selectRandomCreator(0);
            steps.newWork.enterCreatorContribution(0, 100);
            steps.newWork.optToIncludeWorkOnWebsite(false);
            steps.newWork.saveWork();
            var workId = steps.work.findCurrentlyOpenWorkId();
            steps.work.sleep(5000);
            steps.work.refreshThePage();
            steps.work.sleep(5000);
            steps.work.goToScopeDeliveryTab();
            steps.scopeDelivery.deliverWork();
            steps.base.focusOnNewOpenedTab(0);
            steps.scopeDelivery.getDealNumberCreatedInTabNumberAndUseToWorkDeliveryWithScopeIndex(1, 0, 1);
            steps.base.focusOnNewOpenedTab(0);
            steps.deal.refreshThePage();

            steps.base.focusOnNewOpenedTab(1);
            steps.base.useBlankEntityDataSlot('work', 0);
            steps.newWork.goToNewWorkPage();
            steps.newWork.enterPrimaryWorkTitle('NEW TEST WORK ' + (new Date()).getTime());
            steps.work.selectRandomCreator(0);
            steps.newWork.enterCreatorContribution(0, 100);
            steps.newWork.optToIncludeWorkOnWebsite(false);
            steps.newWork.saveWork();
            steps.work.goToScopeDeliveryTab();
            steps.scopeDelivery.deliverWork();
            steps.base.focusOnNewOpenedTab(0);
            steps.scopeDelivery.getDealNumberCreatedInTabNumberAndUseToWorkDeliveryWithScopeIndex(1, 2, 3);
            steps.base.focusOnNewOpenedTab(0);
            steps.deal.refreshThePage();

            steps.base.focusOnNewOpenedTab(1);
            steps.base.useBlankEntityDataSlot('work', 0);
            steps.newWork.goToNewWorkPage();
            steps.newWork.enterPrimaryWorkTitle('NEw TEST WORK ' + (new Date()).getTime());
            steps.work.selectRandomCreator(0);
            steps.newWork.enterCreatorContribution(0, 100);
            steps.newWork.optToIncludeWorkOnWebsite(false);
            steps.newWork.saveWork();
            steps.work.goToScopeDeliveryTab();
            steps.scopeDelivery.deliverWork();
            steps.base.focusOnNewOpenedTab(0);
            steps.scopeDelivery.getDealNumberCreatedInTabNumberAndUseToWorkDeliveryWithScopeIndex(1, 4, 5);
            steps.base.focusOnNewOpenedTab(0);
            steps.deal.refreshThePage();

            steps.base.focusOnNewOpenedTab(1);
            steps.base.useBlankEntityDataSlot('work', 0);
            steps.newWork.goToNewWorkPage();
            steps.newWork.enterPrimaryWorkTitle('NEW TEST WORK ' + (new Date()).getTime());
            steps.work.selectRandomCreator(0);
            steps.newWork.enterCreatorContribution(0, 100);
            steps.newWork.optToIncludeWorkOnWebsite(false);
            steps.newWork.saveWork();
            steps.work.goToScopeDeliveryTab();
            steps.scopeDelivery.deliverWork();
            steps.base.focusOnNewOpenedTab(0);
            steps.scopeDelivery.getDealNumberCreatedInTabNumberAndUseToWorkDeliveryWithScopeIndex(1, 6, 7);

            steps.base.focusOnNewOpenedTab(0);
            steps.deal.refreshThePage();

            steps.createDealContractPeriod.selectContractPeriodNumberI(1);
            steps.editDealScope.selectScopeNumberI(1);

            steps.base.scrollIntoView("Edit publisher share set ", pages.editDealScope.elems.publisherSharesSetArea);
            steps.editDealScope.editPublisherSharesSet();
            steps.editDealScope.editIntoFirstPublisherNameOwnFieldSpecificValue("51");
            steps.editDealScope.editIntoFirstPublisherNameAMCollectFieldSpecificValue("51");
            steps.editDealScope.editSaveThePublisherShareSet();
            //steps.deal.checkGrowlMessageDisplayedAfterScopeEdited("Delivered Works are being updated. Please check Deal later today for Delivery conflicts.");

            steps.base.focusOnNewOpenedTab(1);
            steps.base.goToHomePage();
            steps.work.selectWorkSearchFilterTag(0, 'Work ID');
            steps.work.enterWorkSearchTerms(workId);
            steps.base.sleep(200);
            steps.base.waitForAjax();
            steps.work.clickWorkSearchMatch(0);
            steps.base.waitForAjax();
            steps.work.goToScopeDeliveryTab();
            //steps.work.checkErrorMessageDisplayedOnWorksConflicts("Deal Scopes are in conflict. Resolve by updating Delivery information or Deal Scope.");

            steps.base.focusOnNewOpenedTab(0);
            steps.deal.refreshThePage();

            steps.createDealContractPeriod.selectContractPeriodNumberI(1);
            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.clickOnWorkLinkFromScopeNumberI(1);
            steps.base.sleep(5000);
            steps.work.checkDefaultFilterContractPeriodForWorkLog();
            steps.work.checkDefaultFilterScopeForWorkLog();
            steps.work.checkDefaultFilterAllWorksForWorkLog();
            steps.work.checkDefaultFilterConflictWorksForWorkLog();

            steps.scopeDelivery.selectFromDeliveredWorkFilterDropDownContractPeriodWithIndexNumberI(0);
            steps.scopeDelivery.checkTheTotalNumberOfWorks("4");
            //steps.scopeDelivery.checkTheTotalNumberOfWorksAndConflictingWorksMessage("Total: 4 Works - 1 have conflict(s)");
            steps.scopeDelivery.selectFromDeliveredWorkFilterDropDownContractPeriodWithIndexNumberI(1);
            steps.scopeDelivery.selectFromDeliveredWorkFilterDropDownContractPeriodWithIndexNumberI(0);
            steps.scopeDelivery.selectFromDeliveredWorkFilterDropDownScopeWithIndexNumberI(1);

            steps.work.clickOnConflictingWorksButtonFilterForWorkLog();
            steps.work.checkDefaultFilterConflictWorksForWorkLogSelected();
            steps.work.clickOnAllWorksButtonFilterForWorkLog();
            steps.work.checkDefaultFilterAllWorksForWorkLog();
            steps.work.checkDefaultFilterConflictWorksForWorkLog();
            steps.work.goBackToMainPageFromWork();

            steps.base.closeTheTabByIndex(1);

        }
    }
];