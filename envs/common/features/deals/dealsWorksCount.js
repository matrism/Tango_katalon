'use strict';

var moment = require('moment'),
    randomId = random.id.makeMemoizedGenerator();

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['deals', 'works', 'regression'];

var urlUse = 'http://tango.tango.qa.wmg.com';

exports.feature = [
    {
        name: "Deals view work count",
        tags: ["dealsWork"],
        steps: function () {
            steps.base.useBlankEntityDataSlot('work', 0);
            steps.newWork.goToNewWorkPage();
            steps.newWork.enterPrimaryWorkTitle('TEST WORK ' + randomId(0));
            steps.newWork.selectRandomCreator(0);
            steps.newWork.enterCreatorContribution(0, 100);
            steps.newWork.optToIncludeWorkOnWebsite(false);
            steps.newWork.saveWork();

            steps.base.openTheNewTab(urlUse);
            steps.base.focusOnNewOpenedTab(1);
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTabWithData("ascap", "Germany");
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
            steps.createDealScope.fillIntoFirstPublisherNameField("wcm publisher 1");
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
            steps.work.goToScopeDeliveryTab();
            steps.scopeDelivery.deliverWork();
            steps.base.focusOnNewOpenedTab(1);
            steps.scopeDelivery.getDealNumberCreatedInTabNumberAndUseToWorkDelivery(0);

            steps.base.focusOnNewOpenedTab(1);
            steps.deal.refreshThePage();
            steps.editDealScope.clickOnWorkLinkFromScopeNumberI(1);
            steps.work.goBackToMainPageFromWork();

            steps.base.scrollIntoView("Edit publisher share set ", pages.editDealScope.elems.publisherSharesSetArea);
            steps.editDealScope.editPublisherSharesSet();
            steps.editDealScope.editIntoFirstPublisherNameOwnFieldSpecificValue("71");
            steps.editDealScope.editIntoFirstPublisherNameAMCollectFieldSpecificValue("71");
            steps.editDealScope.editSaveThePublisherShareSet();
            steps.deal.checkGrowlMessageDisplayedAfterScopeEdited("Delivered Works are being updated. Please check Deal later today for Delivery conflicts.");

            steps.base.focusOnNewOpenedTab(0);
            steps.deal.refreshThePage();
            steps.work.checkErrorMessageDisplayedOnWorksConflicts("Deal Scopes are in conflict. Resolve by updating Delivery information or Deal Scope.");

            steps.base.focusOnNewOpenedTab(1);
            steps.deal.refreshThePage();
            steps.editDealScope.checkWorksCountOnScopeNumberI(1, "1");
            steps.editDealScope.checkWorksCountOnScopeNumberI(2, "1");
            steps.editDealScope.clickOnWorkLinkFromScopeNumberI(1);

            steps.work.checkDefaultFilterContractPeriodForWorkLog();
            steps.work.checkDefaultFilterScopeForWorkLog();
            steps.work.checkDefaultFilterAllWorksForWorkLog();
            steps.work.checkDefaultFilterConflictWorksForWorkLog();

        }
    },

    {
        name: "Deals view work count",
        tags: ["dealMultipleWorks"],
        steps: function () {
            steps.base.useBlankEntityDataSlot('work', 0);
            steps.newWork.goToNewWorkPage();
            steps.newWork.enterPrimaryWorkTitle('DENISA WORK ' + randomId(0));
            steps.newWork.selectRandomCreator(0);
            steps.newWork.enterCreatorContribution(0, 100);
            steps.newWork.optToIncludeWorkOnWebsite(false);
            steps.newWork.saveWork();

            steps.base.openTheNewTab(urlUse);
            steps.base.focusOnNewOpenedTab(1);
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTabWithData("ascap", "Germany");
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
            steps.createDealScope.fillIntoFirstPublisherNameField("wcm publisher 1");
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
            steps.newWork.enterPrimaryWorkTitle('A WORK 1');
            steps.newWork.selectRandomCreator(0);
            steps.newWork.enterCreatorContribution(0, 100);
            steps.newWork.optToIncludeWorkOnWebsite(false);
            steps.newWork.saveWork();

            steps.newWork.goToNewWorkPage();
            steps.newWork.enterPrimaryWorkTitle('A WORK 2');
            steps.newWork.selectRandomCreator(0);
            steps.newWork.enterCreatorContribution(0, 100);
            steps.newWork.optToIncludeWorkOnWebsite(false);
            steps.newWork.saveWork();

            steps.newWork.goToNewWorkPage();
            steps.newWork.enterPrimaryWorkTitle('A WORK 3');
            steps.newWork.selectRandomCreator(0);
            steps.newWork.enterCreatorContribution(0, 100);
            steps.newWork.optToIncludeWorkOnWebsite(false);
            steps.newWork.saveWork();

            steps.base.focusOnNewOpenedTab(0);
            steps.work.goToScopeDeliveryTab();
            steps.scopeDelivery.updateScopeDelivery();
            steps.scopeDelivery.clickScopeDeliveryCheckbox(0, 0);
            steps.scopeDelivery.clickScopeDeliveryCheckbox(0, 0);
            steps.scopeDelivery.clickOnRemoveScopeDelivery();
            steps.scopeDelivery.save();

            steps.base.focusOnNewOpenedTab(1);
            steps.editDealContractPeriod.editSelectContractPeriodNumberI(1);
            steps.editDealScope.selectScopeNumberI(1);


        }
    }
];