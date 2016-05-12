'use strict';

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['deals', 'rightTypes', 'regression'];

exports.feature = [
    {
        name: "Create a deal with publisher share set",
        tags: ["createContractualRightTypes"],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.createDealScope.itAddSimpleScope();
            steps.createDealScope.checkTheContractualTypeAreaTextDisplayed("Contractual Right Types");
            steps.createDealScope.checkTheContractualTypeAreaTextDisplayed("Summary");
            steps.createDealScope.checkTheContractualTypeAreaTextDisplayed("All Publishing Rights are included.");
            steps.createDealScope.checkTheContractualTypeAreaTextDisplayed("Limited to");

            //check publishing and master rights
            steps.createDealScope.checkTheContractualTypePublishingRightsTextDisplayed("Publishing Rights");
            steps.createDealScope.checkTheContractualTypeMasterRightsTextDisplayed("Master Rights");

            //check limited too text tooltip value
            steps.createDealScope.checkTheContractualTypeLimitedTooTextTooltipDisplayed();


            //check default values for publishing rights
            steps.createDealScope.checkTheContractualTypePublishingRightsTextDisplayed("Synch");
            steps.createDealScope.checkTheContractualTypePublishingRightsTextDisplayed("Mech");
            steps.createDealScope.checkTheContractualTypePublishingRightsTextDisplayed("Perf");
            steps.createDealScope.checkTheContractualTypePublishingRightsTextDisplayed("Grand");
            steps.createDealScope.checkTheContractualTypePublishingRightsTextDisplayed("Print");
            steps.createDealScope.checkTheContractualTypePublishingRightsTextDisplayed("Other");

            //click on master rights and check default values for master rights
            steps.createDealScope.expandCollapseMasterRights();
            steps.createDealScope.checkTheContractualTypeMasterRightsTextDisplayed("Master Synch");
            steps.createDealScope.checkTheContractualTypeMasterRightsTextDisplayed("Master Mech");
            steps.createDealScope.checkTheContractualTypeMasterRightsTextDisplayed("Master Perf");
            steps.createDealScope.checkTheContractualTypeMasterRightsTextDisplayed("Master Grand");
            steps.createDealScope.checkTheContractualTypeMasterRightsTextDisplayed("Master Digital");
            steps.createDealScope.checkTheContractualTypeMasterRightsTextDisplayed("Master Other");
            steps.createDealScope.expandCollapseMasterRights();

            steps.deal.itContinueToNextPage();
            //steps.deal.saveDeal();
            //steps.deal.waitForDealToBeSaved();
            //steps.deal.returnDealNumber();
        }
    }
];
