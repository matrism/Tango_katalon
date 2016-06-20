'use strict';

exports.id = '0fbfe3d7-ba3a-4586-8ffb-032d214f8ff9';

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['deals', 'rightTypes', 'regression'];

exports.feature = [
    {
        name: "Create a deal with publisher share set",
        tags: ["createViewContractualRightTypes"],
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
            steps.createDealScope.expandMasterRights();
            steps.createDealScope.checkTheContractualTypeMasterRightsTextDisplayed("Master Synch");
            steps.createDealScope.checkTheContractualTypeMasterRightsTextDisplayed("Master Mech");
            steps.createDealScope.checkTheContractualTypeMasterRightsTextDisplayed("Master Perf");
            steps.createDealScope.checkTheContractualTypeMasterRightsTextDisplayed("Master Grand");
            steps.createDealScope.checkTheContractualTypeMasterRightsTextDisplayed("Master Digital");
            steps.createDealScope.checkTheContractualTypeMasterRightsTextDisplayed("Master Other");
            steps.createDealScope.collapseMasterRights();

            //click on publishing rights
            steps.createDealScope.clickOnPublishingRightsCheckBox();
            steps.createDealScope.checkTheContractualTypeAreaTextDisplayed("Summary");
            steps.createDealScope.checkTheContractualTypeAreaTextNotDisplayed("All Publishing Rights are included.");
            steps.createDealScope.checkTheContractualTypeAreaErrorMessageMandatoryRightSelected();

            //click on master rights
            steps.createDealScope.clickOnMasterRightsCheckBox();
            steps.createDealScope.checkTheContractualTypeAreaTextDisplayed("Summary");
            steps.createDealScope.checkTheContractualTypeAreaTextDisplayed("All Publishing Rights are excluded.");
            steps.createDealScope.checkTheContractualTypeAreaTextDisplayed("All Master Rights are included.");

            //deselect master rights
            steps.createDealScope.clickOnMasterRightsCheckBox();
            steps.createDealScope.checkTheContractualTypeAreaErrorMessageMandatoryRightSelected();

            //click on synch and grand publishing right
            steps.createDealScope.clickOnPublishingRightsNumberI(1);
            steps.createDealScope.clickOnPublishingRightsNumberI(4);
            steps.createDealScope.checkTheContractualTypeAreaTextDisplayed("Summary");
            steps.createDealScope.checkTheContractualTypeAreaTextDisplayed("The following Publishing Rights are excluded: Mech, Perf, Print, Other");

            //click on publishing rights
            steps.createDealScope.clickOnPublishingRightsCheckBox();
            steps.createDealScope.expandMasterRights();
            steps.createDealScope.clickOnMasterRightsNumberI(3);
            steps.createDealScope.clickOnMasterRightsNumberI(4);
            steps.createDealScope.checkTheContractualTypeAreaTextDisplayed("Summary");
            steps.createDealScope.checkTheContractualTypeAreaTextDisplayed("All Publishing Rights are included.");
            steps.createDealScope.checkTheContractualTypeAreaTextDisplayed("The following Master Rights are excluded: Master Synch, Master Mech, Master Digital, Master Other");

            //deselect some publishing rights
            steps.createDealScope.clickOnPublishingRightsNumberI(4);
            steps.createDealScope.clickOnPublishingRightsNumberI(5);
            steps.createDealScope.clickOnPublishingRightsNumberI(6);
            steps.createDealScope.checkTheContractualTypeAreaTextDisplayed("Summary");
            steps.createDealScope.checkTheContractualTypeAreaTextDisplayed("The following Publishing Rights are excluded: Grand, Print, Other");
            steps.createDealScope.checkTheContractualTypeAreaTextDisplayed("The following Master Rights are excluded: Master Synch, Master Mech, Master Digital, Master Other");
            //click 2 times to publishing rights to deselect all
            steps.createDealScope.clickOnPublishingRightsCheckBox();
            steps.createDealScope.clickOnPublishingRightsCheckBox();
            steps.createDealScope.checkTheContractualTypeAreaTextDisplayed("Summary");
            steps.createDealScope.checkTheContractualTypeAreaTextDisplayed("All Publishing Rights are excluded.");
            steps.createDealScope.checkTheContractualTypeAreaTextDisplayed("The following Master Rights are excluded: Master Synch, Master Mech, Master Digital, Master Other");

            //select all publishing rights and de select master rights, check limited to
            steps.createDealScope.clickOnPublishingRightsCheckBox();
            steps.createDealScope.clickOnMasterRightsCheckBox();
            steps.createDealScope.clickOnMasterRightsCheckBox();
            steps.createDealScope.clickOnLimitedToCheckBox();
            steps.createDealScope.checkTheContractualTypeAreaTextDisplayed("Summary");
            steps.createDealScope.checkTheContractualTypeAreaTextDisplayed("Publishing Rights are included, but limited to: Synch, Mech, Perf, Grand, Print, Other");

            steps.createDealScope.clickOnPublishingRightsCheckBox();
            steps.createDealScope.checkTheContractualTypeAreaErrorMessageMandatoryRightSelected();

            steps.createDealScope.clickOnMasterRightsCheckBox();
            steps.createDealScope.checkTheContractualTypeAreaTextDisplayed("Summary");
            steps.createDealScope.checkTheContractualTypeAreaTextDisplayed("All Publishing Rights are excluded.");
            steps.createDealScope.checkTheContractualTypeAreaTextDisplayed("Master Rights are included, but limited to: Master Synch, Master Mech, Master Perf, Master Grand, Master Digital, Master Other");

            steps.createDealScope.clickOnPublishingRightsNumberI(1);
            steps.createDealScope.clickOnPublishingRightsNumberI(2);
            steps.createDealScope.clickOnMasterRightsCheckBox();
            steps.createDealScope.checkTheContractualTypeAreaTextDisplayed("Summary");
            steps.createDealScope.checkTheContractualTypeAreaTextDisplayed("Publishing Rights are included, but limited to: Synch, Mech");

            steps.createDealScope.clickOnPublishingRightsCheckBox();
            steps.createDealScope.clickOnMasterRightsNumberI(1);
            steps.createDealScope.clickOnMasterRightsNumberI(4);
            steps.createDealScope.checkTheContractualTypeAreaTextDisplayed("Summary");
            steps.createDealScope.checkTheContractualTypeAreaTextDisplayed("Publishing Rights are included, but limited to: Synch, Mech, Perf, Grand, Print, Other");
            steps.createDealScope.checkTheContractualTypeAreaTextDisplayed("Master Rights are included, but limited to: Master Synch, Master Grand");

            steps.createDealScope.clickOnPublishingRightsNumberI(1);
            steps.createDealScope.clickOnPublishingRightsNumberI(2);
            steps.createDealScope.clickOnPublishingRightsNumberI(3);
            steps.createDealScope.checkTheContractualTypeAreaTextDisplayed("Summary");
            steps.createDealScope.checkTheContractualTypeAreaTextDisplayed("Publishing Rights are included, but limited to: Grand, Print, Other");
            steps.createDealScope.checkTheContractualTypeAreaTextDisplayed("Master Rights are included, but limited to: Master Synch, Master Grand");

            steps.createDealScope.clickOnPublishingRightsCheckBox();
            steps.createDealScope.clickOnPublishingRightsCheckBox();
            steps.createDealScope.checkTheContractualTypeAreaTextDisplayed("Summary");
            steps.createDealScope.checkTheContractualTypeAreaTextDisplayed("All Publishing Rights are excluded.");
            steps.createDealScope.checkTheContractualTypeAreaTextDisplayed("Master Rights are included, but limited to: Master Synch, Master Grand");

            //select all publishing rights and check that its children are selected
            steps.createDealScope.clickOnPublishingRightsCheckBox();
            steps.createDealScope.checkThatPublishingRightsNumberIIsSelected(1);
            steps.createDealScope.checkThatPublishingRightsNumberIIsSelected(2);
            steps.createDealScope.checkThatPublishingRightsNumberIIsSelected(3);
            steps.createDealScope.checkThatPublishingRightsNumberIIsSelected(4);
            steps.createDealScope.checkThatPublishingRightsNumberIIsSelected(5);
            steps.createDealScope.checkThatPublishingRightsNumberIIsSelected(6);

            //de select all publishing rights and check that its children are de selected
            steps.createDealScope.clickOnPublishingRightsCheckBox();
            steps.createDealScope.checkThatPublishingRightsNumberIIsDeSelected(1);
            steps.createDealScope.checkThatPublishingRightsNumberIIsDeSelected(2);
            steps.createDealScope.checkThatPublishingRightsNumberIIsDeSelected(3);
            steps.createDealScope.checkThatPublishingRightsNumberIIsDeSelected(4);
            steps.createDealScope.checkThatPublishingRightsNumberIIsDeSelected(5);
            steps.createDealScope.checkThatPublishingRightsNumberIIsDeSelected(6);

            //select all master rights and that its children are selected
            steps.createDealScope.clickOnMasterRightsCheckBox();
            steps.createDealScope.checkThatMasterRightsNumberIIsSelected(1);
            steps.createDealScope.checkThatMasterRightsNumberIIsSelected(2);
            steps.createDealScope.checkThatMasterRightsNumberIIsSelected(3);
            steps.createDealScope.checkThatMasterRightsNumberIIsSelected(4);
            steps.createDealScope.checkThatMasterRightsNumberIIsSelected(5);
            steps.createDealScope.checkThatMasterRightsNumberIIsSelected(6);

            //select all publishing rights
            steps.createDealScope.clickOnPublishingRightsCheckBox();
            //de select some publishing rights and check publishing rights partially selected
            steps.createDealScope.clickOnPublishingRightsNumberI(1);
            steps.createDealScope.clickOnPublishingRightsNumberI(3);
            steps.createDealScope.checkThatPublishingRightsCheckBoxIsPartiallySelected();

            //de select publishing  rights
            steps.createDealScope.clickOnPublishingRightsCheckBox();
            steps.createDealScope.clickOnPublishingRightsCheckBox();
            steps.createDealScope.clickOnPublishingRightsNumberI(3);
            steps.createDealScope.checkThatPublishingRightsCheckBoxIsPartiallySelected();

            steps.createDealScope.clickOnPublishingRightsCheckBox();
            steps.createDealScope.checkThatPublishingRightsNumberIIsSelected(1);
            steps.createDealScope.checkThatPublishingRightsNumberIIsSelected(2);
            steps.createDealScope.checkThatPublishingRightsNumberIIsSelected(3);
            steps.createDealScope.checkThatPublishingRightsNumberIIsSelected(4);
            steps.createDealScope.checkThatPublishingRightsNumberIIsSelected(5);
            steps.createDealScope.checkThatPublishingRightsNumberIIsSelected(6);

            steps.createDealScope.clickOnPublishingRightsNumberI(1);
            steps.createDealScope.clickOnPublishingRightsNumberI(3);
            steps.createDealScope.checkThatPublishingRightsCheckBoxIsPartiallySelected();

            steps.createDealScope.clickOnPublishingRightsNumberI(3);
            steps.createDealScope.checkThatPublishingRightsCheckBoxIsPartiallySelected();

            steps.createDealScope.clickOnPublishingRightsNumberI(1);
            steps.createDealScope.checkThatPublishingRightsNumberIIsSelected(1);
            steps.createDealScope.checkThatPublishingRightsNumberIIsSelected(2);
            steps.createDealScope.checkThatPublishingRightsNumberIIsSelected(3);
            steps.createDealScope.checkThatPublishingRightsNumberIIsSelected(4);
            steps.createDealScope.checkThatPublishingRightsNumberIIsSelected(5);
            steps.createDealScope.checkThatPublishingRightsNumberIIsSelected(6);

            //de select all contractual right types and check limited too  and check empty contractual rights error message
            steps.createDealScope.clickOnPublishingRightsCheckBox();
            steps.createDealScope.clickOnMasterRightsCheckBox();
            steps.createDealScope.checkTheContractualTypeLimitedTooTextTooltipDisplayed();
            steps.createDealScope.checkTheContractualTypeAreaErrorMessageMandatoryRightSelected();

            //de select limited too and check empty contractual rights error message
            steps.createDealScope.checkTheContractualTypeLimitedTooTextTooltipDisplayed();
            steps.createDealScope.checkTheContractualTypeAreaErrorMessageMandatoryRightSelected();

            //all publishing rights de selected one master right selected we can save the deal
            steps.createDealScope.clickOnMasterRightsNumberI(4);
            //check continue button is enabled
            steps.deal.waitContinueButtonEnabled();

            //all master rights de selected one publishing right selected we can save the deal
            steps.createDealScope.clickOnMasterRightsCheckBox();
            steps.createDealScope.clickOnMasterRightsCheckBox();
            steps.createDealScope.clickOnPublishingRightsNumberI(5);
            //check continue button is enabled
            steps.deal.waitContinueButtonEnabled();

            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();

            //steps.searchSection.accessSavedDealByNumber('294553');

            steps.editDealContractPeriod.editSelectContractPeriodNumberI(1);
            steps.editDealScope.selectScopeNumberI(1);

            steps.editDealScope.checkContractualRightsTypeTextPresent();
            steps.editDealScope.checkContractualRightTypesIncludedOrExcludedTextValuePresent("Publishing Rights are included, but limited to: Print");

        }
    },

    {
        name: "Create a deal with publisher share set",
        tags: ["editContractualRightTypes"],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.createDealScope.itAddSimpleScope();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();


            //steps.searchSection.accessSavedDealByNumber('294556');

            steps.editDealContractPeriod.editSelectContractPeriodNumberI(1);
            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.editScopeArea();

            //check default values for publishing rights
            steps.editDealScope.editCheckTheContractualTypePublishingRightsTextDisplayed("Synch");
            steps.editDealScope.editCheckTheContractualTypePublishingRightsTextDisplayed("Mech");
            steps.editDealScope.editCheckTheContractualTypePublishingRightsTextDisplayed("Perf");
            steps.editDealScope.editCheckTheContractualTypePublishingRightsTextDisplayed("Grand");
            steps.editDealScope.editCheckTheContractualTypePublishingRightsTextDisplayed("Print");
            steps.editDealScope.editCheckTheContractualTypePublishingRightsTextDisplayed("Other");

            //click on master rights and check default values for master rights
            steps.editDealScope.editExpandMasterRights();
            steps.editDealScope.editCheckTheContractualTypeMasterRightsTextDisplayed("Master Synch");
            steps.editDealScope.editCheckTheContractualTypeMasterRightsTextDisplayed("Master Mech");
            steps.editDealScope.editCheckTheContractualTypeMasterRightsTextDisplayed("Master Perf");
            steps.editDealScope.editCheckTheContractualTypeMasterRightsTextDisplayed("Master Grand");
            steps.editDealScope.editCheckTheContractualTypeMasterRightsTextDisplayed("Master Digital");
            steps.editDealScope.editCheckTheContractualTypeMasterRightsTextDisplayed("Master Other");
            steps.editDealScope.editCollapseMasterRights();

            //click on publishing rights
            steps.editDealScope.editClickOnPublishingRightsCheckBox();
            steps.editDealScope.editCheckTheContractualTypeAreaTextDisplayed("Summary");
            steps.editDealScope.editCheckTheContractualTypeAreaTextNotDisplayed("All Publishing Rights are included.");
            steps.editDealScope.editCheckTheContractualTypeAreaErrorMessageMandatoryRightSelected();

            //click on master rights
            steps.editDealScope.editClickOnMasterRightsCheckBox();
            steps.editDealScope.editCheckTheContractualTypeAreaTextDisplayed("Summary");
            steps.editDealScope.editCheckTheContractualTypeAreaTextDisplayed("All Publishing Rights are excluded.");
            steps.editDealScope.editCheckTheContractualTypeAreaTextDisplayed("All Master Rights are included.");

            //deselect master rights
            steps.editDealScope.editClickOnMasterRightsCheckBox();
            steps.editDealScope.editCheckTheContractualTypeAreaErrorMessageMandatoryRightSelected();

            //click on synch and grand publishing right
            steps.editDealScope.editClickOnPublishingRightsNumberI(1);
            steps.editDealScope.editClickOnPublishingRightsNumberI(4);
            steps.editDealScope.editCheckTheContractualTypeAreaTextDisplayed("Summary");
            steps.editDealScope.editCheckTheContractualTypeAreaTextDisplayed("The following Publishing Rights are excluded: Mech, Perf, Print, Other");

            //click on publishing rights
            steps.editDealScope.editClickOnPublishingRightsCheckBox();
            steps.editDealScope.editExpandMasterRights();
            steps.editDealScope.editClickOnMasterRightsNumberI(3);
            steps.editDealScope.editClickOnMasterRightsNumberI(4);
            steps.editDealScope.editCheckTheContractualTypeAreaTextDisplayed("Summary");
            steps.editDealScope.editCheckTheContractualTypeAreaTextDisplayed("All Publishing Rights are included.");
            steps.editDealScope.editCheckTheContractualTypeAreaTextDisplayed("The following Master Rights are excluded: Master Synch, Master Mech, Master Digital, Master Other");

            //deselect some publishing rights
            steps.editDealScope.editClickOnPublishingRightsNumberI(4);
            steps.editDealScope.editClickOnPublishingRightsNumberI(5);
            steps.editDealScope.editClickOnPublishingRightsNumberI(6);
            steps.editDealScope.editCheckTheContractualTypeAreaTextDisplayed("Summary");
            steps.editDealScope.editCheckTheContractualTypeAreaTextDisplayed("The following Publishing Rights are excluded: Grand, Print, Other");
            steps.editDealScope.editCheckTheContractualTypeAreaTextDisplayed("The following Master Rights are excluded: Master Synch, Master Mech, Master Digital, Master Other");
            //click 2 times to publishing rights to deselect all
            steps.editDealScope.editClickOnPublishingRightsCheckBox();
            steps.editDealScope.editClickOnPublishingRightsCheckBox();
            steps.editDealScope.editCheckTheContractualTypeAreaTextDisplayed("Summary");
            steps.editDealScope.editCheckTheContractualTypeAreaTextDisplayed("All Publishing Rights are excluded.");
            steps.editDealScope.editCheckTheContractualTypeAreaTextDisplayed("The following Master Rights are excluded: Master Synch, Master Mech, Master Digital, Master Other");

            //select all publishing rights and de select master rights, check limited to
            steps.editDealScope.editClickOnPublishingRightsCheckBox();
            steps.editDealScope.editClickOnMasterRightsCheckBox();
            steps.editDealScope.editClickOnMasterRightsCheckBox();
            steps.editDealScope.editClickOnLimitedToCheckBox();
            steps.editDealScope.editCheckTheContractualTypeAreaTextDisplayed("Summary");
            steps.editDealScope.editCheckTheContractualTypeAreaTextDisplayed("Publishing Rights are included, but limited to: Synch, Mech, Perf, Grand, Print, Other");

            steps.editDealScope.editClickOnPublishingRightsCheckBox();
            steps.editDealScope.editCheckTheContractualTypeAreaErrorMessageMandatoryRightSelected();

            steps.editDealScope.editClickOnMasterRightsCheckBox();
            steps.editDealScope.editCheckTheContractualTypeAreaTextDisplayed("Summary");
            steps.editDealScope.editCheckTheContractualTypeAreaTextDisplayed("All Publishing Rights are excluded.");
            steps.editDealScope.editCheckTheContractualTypeAreaTextDisplayed("Master Rights are included, but limited to: Master Synch, Master Mech, Master Perf, Master Grand, Master Digital, Master Other");

            steps.editDealScope.editClickOnPublishingRightsNumberI(1);
            steps.editDealScope.editClickOnPublishingRightsNumberI(2);
            steps.editDealScope.editClickOnMasterRightsCheckBox();
            steps.editDealScope.editCheckTheContractualTypeAreaTextDisplayed("Summary");
            steps.editDealScope.editCheckTheContractualTypeAreaTextDisplayed("Publishing Rights are included, but limited to: Synch, Mech");

            steps.editDealScope.editClickOnPublishingRightsCheckBox();
            steps.editDealScope.editClickOnMasterRightsNumberI(1);
            steps.editDealScope.editClickOnMasterRightsNumberI(4);
            steps.editDealScope.editCheckTheContractualTypeAreaTextDisplayed("Summary");
            steps.editDealScope.editCheckTheContractualTypeAreaTextDisplayed("Publishing Rights are included, but limited to: Synch, Mech, Perf, Grand, Print, Other");
            steps.editDealScope.editCheckTheContractualTypeAreaTextDisplayed("Master Rights are included, but limited to: Master Synch, Master Grand");

            steps.editDealScope.editClickOnPublishingRightsNumberI(1);
            steps.editDealScope.editClickOnPublishingRightsNumberI(2);
            steps.editDealScope.editClickOnPublishingRightsNumberI(3);
            steps.editDealScope.editCheckTheContractualTypeAreaTextDisplayed("Summary");
            steps.editDealScope.editCheckTheContractualTypeAreaTextDisplayed("Publishing Rights are included, but limited to: Grand, Print, Other");
            steps.editDealScope.editCheckTheContractualTypeAreaTextDisplayed("Master Rights are included, but limited to: Master Synch, Master Grand");

            steps.editDealScope.editClickOnPublishingRightsCheckBox();
            steps.editDealScope.editClickOnPublishingRightsCheckBox();
            steps.editDealScope.editCheckTheContractualTypeAreaTextDisplayed("Summary");
            steps.editDealScope.editCheckTheContractualTypeAreaTextDisplayed("All Publishing Rights are excluded.");
            steps.editDealScope.editCheckTheContractualTypeAreaTextDisplayed("Master Rights are included, but limited to: Master Synch, Master Grand");

            steps.editDealScope.editClickOnLimitedToCheckBox();
            steps.editDealScope.editClickOnPublishingRightsCheckBox();
            steps.editDealScope.editClickOnMasterRightsCheckBox();
            steps.editDealScope.editClickOnMasterRightsCheckBox();
            steps.editDealScope.editCheckTheContractualTypeAreaTextDisplayed("Summary");
            steps.editDealScope.editCheckTheContractualTypeAreaTextDisplayed("All Publishing Rights are included.");

            steps.editDealScope.editSaveScopeChanges();
            steps.editDealScope.checkContractualRightsTypeTextPresent();
            steps.editDealScope.checkContractualRightTypesIncludedOrExcludedTextValuePresent("All Publishing Rights are included.");

        }
    }

];
