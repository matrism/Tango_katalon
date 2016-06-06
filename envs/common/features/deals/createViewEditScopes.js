'use strict';

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['deals', 'scopes', 'regression'];

exports.feature = [
    {
        name: "Create and view deal scopes",
        tags: ["scopAdded"],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.fillMandatoryFieldsContractPeriodSpecificValue("2015-01-02");
            steps.createDealContractPeriod.fillActualEndDateField();
            steps.createDealContractPeriod.addNewContractPeriodDialog();
            steps.createDealContractPeriod.fillEndTargetMonths();
            for (var i = 3; i <= 3; i++) {
                steps.createDealContractPeriod.addNewContractPeriod();
                steps.createDealContractPeriod.fillEndTargetMonths();
            }
            //add scope with pss to contract period 1
            steps.createDealContractPeriod.selectContractPeriodNumberI(1);
            steps.createDealScope.addScopeTypeAndTerritory("Assignment", "worldwide");


            //check contractual right types
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

            steps.base.scrollIntoView("Add publisher shares set link", pages.createDealScope.elems.addPublisherShareSetLink);
            steps.createDealScope.clickOnAddPublisherShareSet();
            steps.createDealScope.checkSocietyAwardCreditNotDisplayedOnPss();
            steps.createDealScope.selectContractType("Administration");
            steps.createDealScope.checkNoSocietyAwardCreditPssOptionSelected();
            steps.createDealScope.checkSocietyAwardCreditDisplayedOnPss();
            steps.createDealScope.checkSocietyAwardCreditPssTextTooltip();
            steps.createDealScope.clickOnYesSocietyAwardCreditPublisherShareSet();
            steps.createDealScope.fillIntoFirstPublisherNameField("wcm publisher 1");
            steps.createDealScope.selectRandomPublisherNameDropDownValue();
            steps.createDealScope.fillIntoFirstPublisherNameOwnFieldSpecificValue("30");
            steps.createDealScope.fillIntoFirstPublisherNameAMField("wb music corp");
            steps.createDealScope.selectSpecificPublisherNameDropDownValue("(53026414)\nwb music corp.");
            steps.createDealScope.fillIntoFirstPublisherNameAMCollectFieldSpecificValue("30");
            steps.createDealScope.itOverridePublisherShare("france", "(71898243)\nFRANCE MUSIC CORP", "France");
            steps.createDealScope.saveThePublisherShareSet();

            //add second scope to contract period 1
            steps.createDealScope.addScopeTypeAndTerritory("Assignment", "france");
            //share publisher share set from scope 1 to scope 2
            steps.createDealScope.clickOnSharePublisherShareSetIcon();
            steps.createDealScope.clickOnUseThisPublisherShareSetButton();
            steps.createDealScope.validateSharePublisherShareSetCount(" 2");
            steps.createDealScope.mouseOverPublisherShareTextTooltip();
            steps.createDealScope.validateSharePublisherShareSetTextTooltip("1 other scope share this Publisher Share set");
            steps.createDealScope.mouseOverPublisherShareTextTooltip();
            steps.createDealScope.validateSharePublisherShareSetTextTooltip("Scope 1");
            steps.createDealScope.clickOnSaveSharePublisherShareSetButton();

            //add third scope to contract period 1
            steps.createDealScope.addScopeTypeAndTerritory("Administration", "europe");
            //share publisher share set from scope 1 to scope 2
            steps.createDealScope.clickOnSharePublisherShareSetIcon();
            steps.createDealScope.clickOnUseThisPublisherShareSetButton();
            steps.createDealScope.validateSharePublisherShareSetCount(" 3");
            steps.createDealScope.mouseOverPublisherShareTextTooltip();
            steps.createDealScope.validateSharePublisherShareSetTextTooltip("2 other scopes share this Publisher Share set");
            steps.createDealScope.mouseOverPublisherShareTextTooltip();
            steps.createDealScope.validateSharePublisherShareSetTextTooltip("Scope 1");
            steps.createDealScope.mouseOverPublisherShareTextTooltip();
            steps.createDealScope.validateSharePublisherShareSetTextTooltip("Scope 2");
            steps.createDealScope.clickOnSaveSharePublisherShareSetButton();

            //add multiple scopes to contract period 2
            steps.createDealContractPeriod.selectContractPeriodNumberI(2);
            steps.createDealScope.addScopeTypeAndTerritory("Administration", "worldwide");
            steps.createDealScope.itAddPublisherShare();
            steps.base.scrollIntoView("Save publisher share set ", pages.createDealScope.elems.savePublisherShareSet);
            steps.createDealScope.saveThePublisherShareSet();

            steps.createDealScope.addScopeTypeAndTerritory("Administration", "asia");
            //share publisher share set from scope 4 to scope 5
            steps.createDealScope.clickOnSharePublisherShareSetIcon();
            steps.createDealScope.clickOnUseThisPublisherShareSetButtonShareNumberI(2);
            steps.createDealScope.validateSharePublisherShareSetCount(" 2");
            steps.createDealScope.mouseOverPublisherShareTextTooltip();
            steps.createDealScope.validateSharePublisherShareSetTextTooltip("1 other scope share this Publisher Share set");
            steps.createDealScope.mouseOverPublisherShareTextTooltip();
            steps.createDealScope.validateSharePublisherShareSetTextTooltip("Scope 4");
            steps.createDealScope.clickOnSaveSharePublisherShareSetButton();

            steps.createDealScope.editPublisherShareSetArea();
            steps.createDealScope.checkWarningMessageForEditingPublisherSharesScope("You are editing a shared publisher shares set. All scopes that are associated with this publishers shares set will be automatically updated with your changes.");
            steps.createDealScope.cancelThePublisherShareSet();
            steps.createDealScope.confirmModalDialogAction();

            steps.createDealScope.clickOnSharePublisherShareSetIcon();
            steps.createDealScope.clickOnUseThisPublisherShareSetButtonShareNumberI(2);
            steps.createDealScope.validateSharePublisherShareSetCount(" 2");
            //steps.createDealScope.mouseOverPublisherShareTextTooltip();
            //steps.createDealScope.validateSharePublisherShareSetTextTooltip("1 other scope share this Publisher Share set");
            steps.createDealScope.mouseOverPublisherShareTextTooltip();
            steps.createDealScope.validateSharePublisherShareSetTextTooltip("Scope 4");
            steps.createDealScope.clickOnSaveSharePublisherShareSetButton();

            steps.createDealScope.editPublisherShareSetArea();
            steps.createDealScope.fillIntoFirstPublisherNameField("wb music corp");
            steps.createDealScope.selectRandomPublisherNameDropDownValue();
            steps.createDealScope.clickOnSaveSharePublisherShareSetButton();

            steps.editDealScope.selectScopeNumberI(2);
            steps.createDealScope.checkPublisherShareSetNameTextValue("wb music corp");

            steps.createDealScope.addScopeTypeAndTerritory("Administration", "europe");
            //share publisher share set from scope 4 to scope 6 and delete share
            steps.createDealScope.clickOnSharePublisherShareSetIcon();
            steps.createDealScope.clickOnUseThisPublisherShareSetButtonShareNumberI(2);
            steps.createDealScope.deleteSharePublisherShareSet();

            //check no pss present on scopes 4,5,6
            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.checkScopeNumberINoPss(1);

            steps.editDealScope.selectScopeNumberI(2);
            steps.editDealScope.checkScopeNumberINoPss(2);

            steps.editDealScope.selectScopeNumberI(3);
            steps.editDealScope.checkScopeNumberINoPss(3);


            steps.createDealScope.addScopeTypeAndTerritory("Administration", "germany");
            steps.createDealScope.clickOnSharePublisherShareSetIcon();

            //check scope number 1, scope 2 and scope 3 has pss
            steps.createDealContractPeriod.selectContractPeriodNumberI(1);
            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.checkScopeNumberINameAndPss(1);
            steps.editDealScope.checkScopeNumberINameAndPss(2);
            steps.editDealScope.checkScopeNumberINameAndPss(3);

            //add scopes with publisher shares set to contract period 3
            steps.createDealContractPeriod.selectContractPeriodNumberI(3);
            steps.createDealScope.addScopeTypeAndTerritory("Administration", "worldwide");
            steps.createDealScope.itAddPublisherShare();
            steps.base.scrollIntoView("Save publisher share set ", pages.createDealScope.elems.savePublisherShareSet);
            steps.createDealScope.saveThePublisherShareSet();

            //add scopes with pss with multiple chains
            steps.createDealScope.addScopeTypeAndTerritory("Administration", "worldwide");
            steps.createDealScope.clickOnAddPublisherShareSet({scrollIntoView: true});
            steps.createDealScope.fillFirstPublisherNameFieldsBasedOnPublisherTypeEOrPA();
            steps.createDealScope.fillIntoFirstPublisherNameAMField('53026414');
            steps.createDealScope.selectSpecificPublisherNameDropDown();
            steps.createDealScope.fillIntoFirstPublisherNameAMCollectField();
            //add second chain for pss
            steps.createDealScope.clickAddChainLink();
            steps.createDealScope.fillPublisherNameFieldsBasedOnPublisherTypeEOrPAChainIValuePercentCollect(2, "publisher", "33", "21");
            steps.createDealScope.fillIntoPublisherNameAMFieldChainI(2);
            steps.createDealScope.selectSpecificPublisherNameDropDownChainI(2);
            steps.createDealScope.fillIntoPublisherNameAMCollectFieldChainI(2);
            //add third chain for pss
            steps.createDealScope.clickAddChainLink();
            steps.createDealScope.fillPublisherNameFieldsBasedOnPublisherTypeEOrPAChainIValuePercentCollect(3, "name", "34", "12");
            steps.createDealScope.fillIntoPublisherNameAMFieldChainI(3);
            steps.createDealScope.selectSpecificPublisherNameDropDownChainI(3);
            steps.createDealScope.fillIntoPublisherNameAMCollectFieldChainI(3);

            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();

            //check deal header contract brief number
            steps.headerDeal.checkContractBriefNumberText();
            steps.headerDeal.checkContractBriefNumberValue();

            //scope 1,2,3
            steps.createDealContractPeriod.selectContractPeriodNumberI(1);
            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.checkScopeNumberINameAndPss(1);

            steps.editDealScope.selectScopeNumberI(2);
            steps.editDealScope.checkScopeNumberINameAndPss(2);

            steps.editDealScope.selectScopeNumberI(3);
            steps.editDealScope.checkScopeNumberINameAndPss(3);

            //scope 4,5,6,7
            steps.createDealContractPeriod.selectContractPeriodNumberI(2);
            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.checkScopeNumberINoPss(1);

            steps.editDealScope.selectScopeNumberI(2);
            steps.editDealScope.checkScopeNumberINoPss(2);

            steps.editDealScope.selectScopeNumberI(3);
            steps.editDealScope.checkScopeNumberINoPss(3);

            //edit publisher share set from scope 1
            steps.createDealContractPeriod.selectContractPeriodNumberI(1);
            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.editPublisherSharesSet();
            steps.editDealScope.editCancelThePublisherShareSet();

            steps.createDealContractPeriod.selectContractPeriodNumberI(2);
            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.itEditAddPublisherShareWithSocietyAwardCredit();
            steps.editDealScope.editSaveThePublisherShareSet();
            steps.editDealScope.editCheckPublisherShareSetNameTextValue("test");

            //steps.searchSection.accessSavedDealByNumber('305772');

            //unshare pss
            steps.createDealContractPeriod.selectContractPeriodNumberI(1);
            //check scope 1,2,3 has pss
            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.checkScopeNumberINameAndPss(1);
            steps.editDealScope.selectScopeNumberI(2);
            steps.editDealScope.checkScopeNumberINameAndPss(2);
            steps.editDealScope.selectScopeNumberI(3);
            steps.editDealScope.checkScopeNumberINameAndPss(3);
            //select scope 2
            steps.editDealScope.selectScopeNumberI(2);
            //unshare pss from scope 2
            steps.createDealScope.validateSharePublisherShareSetCount(" 3");
            steps.createDealScope.mouseOverPublisherShareTextTooltip();
            steps.createDealScope.validateSharePublisherShareSetTextTooltip("2 other scopes share this Publisher Share set");
            steps.createDealScope.mouseOverPublisherShareTextTooltip();
            steps.createDealScope.validateSharePublisherShareSetTextTooltip("Scope 1");
            steps.createDealScope.mouseOverPublisherShareTextTooltip();
            steps.createDealScope.validateSharePublisherShareSetTextTooltip("Scope 3");
            steps.editDealScope.editUnsharePublisherShareSetFromSelectedScope();
            //validate unshare success scope 2 no pss
            steps.editDealScope.checkScopeNumberINoPss(2);

            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.checkScopeNumberINameAndPss(1);
            steps.createDealScope.validateSharePublisherShareSetCount(" 2");
            steps.createDealScope.mouseOverPublisherShareTextTooltip();
            steps.createDealScope.validateSharePublisherShareSetTextTooltip("1 other scope share this Publisher Share set");
            steps.createDealScope.mouseOverPublisherShareTextTooltip();
            steps.createDealScope.validateSharePublisherShareSetTextTooltip("Scope 3");

            steps.editDealScope.selectScopeNumberI(3);
            steps.editDealScope.checkScopeNumberINameAndPss(3);
            steps.createDealScope.validateSharePublisherShareSetCount(" 2");
            steps.createDealScope.mouseOverPublisherShareTextTooltip();
            steps.createDealScope.validateSharePublisherShareSetTextTooltip("1 other scope share this Publisher Share set");
            steps.createDealScope.mouseOverPublisherShareTextTooltip();
            steps.createDealScope.validateSharePublisherShareSetTextTooltip("Scope 1");

            //unshare another scope
            steps.editDealScope.editUnsharePublisherShareSetFromSelectedScope();

            steps.editDealScope.selectScopeNumberI(2);
            steps.editDealScope.checkScopeNumberINoPss(2);

            steps.editDealScope.selectScopeNumberI(3);
            steps.editDealScope.checkScopeNumberINoPss(3);

            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.checkScopeNumberINameAndPss(1);

            //steps.searchSection.accessSavedDealByNumber('305772');

            //pss chain sequence number
            steps.createDealContractPeriod.selectContractPeriodNumberI(3);
            steps.editDealScope.selectScopeNumberI(2);

            steps.editDealScope.expectPublisherShareSetTextValuePresentForChainI(1, "test");
            steps.editDealScope.expectPublisherShareSetTextValuePresentForChainI(1, "wb music corp");
            steps.editDealScope.expectPublisherShareSetTextValuePresentForChainI(1, "30");
            steps.editDealScope.expectPublisherShareSetTextValuePresentForChainI(1, "20");


            steps.editDealScope.expectPublisherShareSetTextValuePresentForChainI(2, "publisher");
            steps.editDealScope.expectPublisherShareSetTextValuePresentForChainI(2, "wb music corp");
            steps.editDealScope.expectPublisherShareSetTextValuePresentForChainI(2, "33");
            steps.editDealScope.expectPublisherShareSetTextValuePresentForChainI(2, "21");


            steps.editDealScope.expectPublisherShareSetTextValuePresentForChainI(3, "name");
            steps.editDealScope.expectPublisherShareSetTextValuePresentForChainI(3, "wb music corp");
            steps.editDealScope.expectPublisherShareSetTextValuePresentForChainI(3, "34");
            steps.editDealScope.expectPublisherShareSetTextValuePresentForChainI(3, "12");

            steps.editDealScope.editPublisherSharesSet();
            steps.editDealScope.editDeleteChainIPublisherShare(2);
            steps.editDealScope.editSaveThePublisherShareSet();

            steps.editDealScope.expectPublisherShareSetTextValuePresentForChainI(1, "test");
            steps.editDealScope.expectPublisherShareSetTextValuePresentForChainI(1, "30");
            steps.editDealScope.expectPublisherShareSetTextValuePresentForChainI(1, "20");

            steps.editDealScope.expectPublisherShareSetTextValuePresentForChainI(2, "name");
            steps.editDealScope.expectPublisherShareSetTextValuePresentForChainI(2, "34");
            steps.editDealScope.expectPublisherShareSetTextValuePresentForChainI(2, "12");

            steps.editDealScope.expectPublisherShareSetTextValueNotPresentForChainI(2, "publisher");
            steps.editDealScope.expectPublisherShareSetTextValueNotPresentForChainI(2, "33");
            //steps.editDealScope.expectPublisherShareSetTextValueNotPresentForChainI(2, "21");
        }
    }
];
