'use strict';

exports.id = 'a31afc82-c555-4ec8-a30e-331a07de59bf';

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['deals', 'society', 'regression'];

exports.feature = [
    {
        name: "Check PSS society agreement number validations ",
        tags: ["society"],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.createDealScope.itAddSimpleScope();
            steps.createDealScope.itAddPublisherShare();
            steps.base.scrollIntoView("Save publisher share set ", pages.createDealScope.elems.savePublisherShareSet);
            steps.createDealScope.saveThePublisherShareSet();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();

            steps.editDealContractPeriod.editSelectContractPeriodNumberI(1);
            steps.editDealScope.selectScopeNumberI(1);

            //add society agreement number
            steps.editDealScope.editClickOnAddNewSocietyAgreementNumberI(1);
            //add data into right panel
            steps.editDealScope.editSocietyAgreementNumberRightPanelNumberI(1, "bmi");
            //add data into left panel
            steps.editDealScope.editSocietyAgreementNumberCreatorLeftPanelNumberI(1, "test");
            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(1, 1, "bmi");

            //validate tooltips society agreement numbers
            steps.editDealScope.checkSocietyAgreementNumberTextTooltip();
            steps.editDealScope.checkCreatorToPublisherChainSocietyAgreementNumberTextTooltip();
            steps.editDealScope.checkPublisherChainAgreementNumbersSocietyAgreementNumberTextTooltip();
            //validate tooltips delete icon
            steps.editDealScope.checkDeleteCreatorSetSocietyAgreementNumberTextTooltip();
            steps.editDealScope.checkDeleteAgreementNumberSocietyAgreementNumberTextTooltip();
            steps.editDealScope.checkDeletePublisherChainAgreementNumberSocietyAgreementNumberTextTooltip();

            //save the society agreement number
            steps.editDealScope.saveChangesSocietyAgreementNumberForm();

            //check that after addition of society agreement number the title of the link is View
            steps.editDealScope.checkAddOrViewSocietyAgreementNumberText("View Society Agreement Numbers");
            //add society agreement number
            steps.editDealScope.editClickOnAddNewSocietyAgreementNumberI(1);
            //remove creator and publisher chain
            steps.editDealScope.deleteCreatorSetSocietyAgreementNumberNumberI(1);
            steps.editDealScope.deletePublisherChainSocietyAgreementNumberNumberI(1);
            steps.editDealScope.saveChangesSocietyAgreementNumberForm();

            //check that after addition of society agreement number the title of the link is Add
            steps.editDealScope.checkAddOrViewSocietyAgreementNumberText("Add Society Agreement Numbers");

            //check cancel link is visible
            steps.editDealScope.editClickOnAddNewSocietyAgreementNumberI(1);
            steps.editDealScope.checkCancelSocietyAgreementNumberButtonLinkIsVisible();
            steps.editDealScope.clickOnCancelSocietyAgreementNumberButtonLink();
            steps.editDealScope.checkAddOrViewSocietyAgreementNumberText("Add Society Agreement Numbers");
            //TO0012F03   long publisher name

            //edit publisher name change to that with long publisher name TO0012F03  save it  go to view society agreement number and
            //check the header - long header
            steps.base.scrollIntoView("Edit publisher share set ", pages.editDealScope.elems.publisherSharesSetArea);
            steps.editDealScope.editPublisherSharesSet();
            steps.editDealScope.editIntoFirstPublisherNameField("TO0012F03");
            steps.editDealScope.editSelectRandomPublisherNameDropDownValue();
            steps.editDealScope.editSaveThePublisherShareSet();

            steps.editDealScope.editClickOnAddNewSocietyAgreementNumberI(1);
            steps.editDealScope.checkSocietyAgreementNumberHeaderTextTooltip();

            //steps.editDealScope.clickOnCreatorSetSocietyAgreementNumberArea();

            //add creators
            steps.editDealScope.editSocietyAgreementNumberCreatorLeftPanelNumberI(1, "shilpa");
            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(1, 1, "ascap");
            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(1, 2, "socan");
            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(1, 3, "sacem");
            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(1, 4, "stim");
            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(1, 5, "stemra");
            steps.editDealScope.editClickOnAddCreatorSocietyAgreementNumberForm();

            steps.editDealScope.editSocietyAgreementNumberCreatorLeftPanelNumberI(2, "creator");
            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(2, 1, "ascap");
            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(2, 2, "socan");
            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(2, 3, "sacem");
            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(2, 4, "stim");
            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(2, 5, "stemra");
            steps.editDealScope.editClickOnAddCreatorSocietyAgreementNumberForm();

            steps.editDealScope.editSocietyAgreementNumberCreatorLeftPanelNumberI(3, "adrian");
            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(3, 1, "ascap");
            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(3, 2, "socan");
            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(3, 3, "sacem");
            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(3, 4, "stim");
            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(3, 5, "stemra");
            steps.editDealScope.editClickOnAddCreatorSocietyAgreementNumberForm();

            steps.editDealScope.editSocietyAgreementNumberCreatorLeftPanelNumberI(4, "deni");
            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(4, 1, "ascap");
            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(4, 2, "socan");
            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(4, 3, "sacem");
            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(4, 4, "stim");
            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(4, 5, "stemra");
            steps.editDealScope.editClickOnAddCreatorSocietyAgreementNumberForm();

            steps.editDealScope.editSocietyAgreementNumberCreatorLeftPanelNumberI(5, "alex");
            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(5, 1, "ascap");
            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(5, 2, "socan");
            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(5, 3, "sacem");
            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(5, 4, "stim");
            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(5, 5, "stemra");


            //check scrolling in the society agreement number
            steps.editDealScope.saveChangesSocietyAgreementNumberForm();
            steps.editDealScope.editClickOnAddNewSocietyAgreementNumberI(1);
            steps.base.scrollIntoView("Scroll in the top of the society agreement number", element(by.css("div.ps-container div[data-ng-repeat='creator in data.model.creators']:nth-child(1) input[data-ng-model='creator.creator_model']")));
            steps.base.scrollIntoView("Scroll in the bottom of the society agreement number ", element(by.css("div.ps-container div[data-ng-repeat='creator in data.model.creators']:nth-child(5) input[data-ng-model='creator.creator_model']")));

            steps.deal.refreshThePage();
            steps.editDealContractPeriod.editSelectContractPeriodNumberI(1);
            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.checkAddOrViewSocietyAgreementNumberText("View Society Agreement Numbers");
            steps.editDealScope.editClickOnAddNewSocietyAgreementNumberI(1);
            steps.editDealScope.checkSocietyAgreementNumberHeaderTextTooltip();
        }
    }
];
