'use strict';

exports.beforeFeature = function () {
    steps.login.itLogin();
},

    exports.commonFeatureTags = ['deals', 'header', 'regression'];

exports.feature = [
    {
        name: "Create a deal and check the deal header",
        tags: ["dealHeader"],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();

            steps.headerDeal.checkContractTypeText();
            steps.headerDeal.checkExactContractTypeValue("");
            steps.headerDeal.checkStatusText();
            steps.headerDeal.checkStatusValue("Acquisition");
            steps.headerDeal.checkSigningTerritoryText();
            steps.headerDeal.checkSigningTerritoryValue("Argentina");
            steps.headerDeal.checkTerritoriesText();
            steps.headerDeal.checkOwnershipText();
            steps.headerDeal.checkOwnershipValue("None");
            steps.headerDeal.checkAdministrationText();
            steps.headerDeal.checkAdministrationValue("None");
            steps.headerDeal.checkStartDateText();
            steps.headerDeal.checkStartDateValue("2014-03-12");
            steps.headerDeal.checkEndDateText();
            steps.headerDeal.checkEndDateValue("");
            steps.headerDeal.checkArtistText();
            steps.headerDeal.checkContractBriefNumberText();
            steps.headerDeal.checkLastUpdateText();

            steps.editDealScope.editAddSpecificScopeTypeAndTerritory("Administration", "Worldwide");
            steps.editDealScope.editSaveAllChanges();

            steps.headerDeal.checkContractTypeText();
            steps.headerDeal.checkExactContractTypeValue("Administration");

            steps.editDealScope.editAddSpecificScopeTypeAndTerritory("Finder", "Worldwide");
            steps.editDealScope.editSaveAllChanges();

            steps.editDealScope.editAddSpecificScopeTypeAndTerritory("Joint Venture", "Worldwide");
            steps.editDealScope.editSaveAllChanges();

            steps.editDealScope.editAddSpecificScopeTypeAndTerritory("Purchase", "Worldwide");
            steps.editDealScope.editSaveAllChanges();
            steps.headerDeal.checkContractTypeText();
            steps.headerDeal.checkContractTypeValue("Administration");
            steps.headerDeal.checkContractTypeValue("Finder");
            steps.headerDeal.checkContractTypeValue("Joint Venture");
            steps.headerDeal.checkContractTypeValue("Purchase");

            steps.deal.goToGeneralDealTabDetails();
            steps.editDealGeneral.editGeneralTabFirstElementsLeftArea();
            steps.editDealGeneral.editSigningTerritory("Austria");
            steps.editDealGeneral.saveEditGeneralTabFirstElementsLeftArea();
            steps.headerDeal.checkSigningTerritoryText();
            steps.headerDeal.checkSigningTerritoryValue("Argentina");

        }
    },

    {
        name: "Create a deal add/remove artists and check deal header",
        tags: ["header_artist"],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();

            steps.headerDeal.checkArtistText();

            steps.deal.goToGeneralDealTabDetails();
            steps.editDealGeneral.editGeneralTabFirstElementsLeftArea();
            steps.editDealGeneral.editSpecificArtistField("test", "Gema Test Artist");
            steps.editDealGeneral.editSpecificArtistField("Shilpa", "Shilpa");
            steps.editDealGeneral.editSpecificArtistField("mars", "Bruno Mars");
            steps.editDealGeneral.saveEditGeneralTabFirstElementsLeftArea();
            steps.headerDeal.checkArtistText();
            steps.headerDeal.checkArtistValue("Bruno Mars, Gema Test Artist, Shilpa");

            steps.editDealGeneral.editGeneralTabFirstElementsLeftArea();
            steps.editDealGeneral.editSpecificArtistField("madonna", "Madonna");
            steps.editDealGeneral.saveEditGeneralTabFirstElementsLeftArea();
            steps.headerDeal.checkArtistText();
            steps.headerDeal.checkArtistValue("Bruno Mars, Gema Test Artist, Madonna, Shilpa");

            steps.editDealGeneral.editGeneralTabFirstElementsLeftArea();
            steps.editDealGeneral.editRemoveArtistNumberI(2);
            steps.editDealGeneral.saveEditGeneralTabFirstElementsLeftArea();
            steps.headerDeal.checkArtistText();
            steps.headerDeal.checkArtistValue("Bruno Mars, Gema Test Artist, Madonna");

            //steps.editDealGeneral.editGeneralTabFirstElementsLeftArea();
            //steps.editDealGeneral.editRandomArtistField("vfdbvf");
            //steps.editDealGeneral.saveEditGeneralTabFirstElementsLeftArea();
            //steps.headerDeal.checkArtistText();
            //steps.headerDeal.checkArtistValue("Bruno Mars, Gema Test Artist, Madonna, Shilpa", "zwgf");
        }
    },

    {
        name: "Create a deal add/edit dates and RTP and check the deal header",
        tags: ["header_rtp"],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.createDealGeneral.fillIntoExecutionDateFieldSpecificYearValue("2014");
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.fillMandatoryFieldsContractPeriodSpecificValue("2014-02-12");
            steps.createDealContractPeriod.fillActualEndDateFieldSpecificValue("2014-03-21");
            steps.createDealContractPeriod.addNewContractPeriodDialog();
            steps.createDealContractPeriod.fillEndTargetMonths();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
            steps.headerDeal.checkStartDateText();
            steps.headerDeal.checkStartDateValue("2014-02-12");
            steps.headerDeal.checkEndDateText();
            steps.headerDeal.checkEndDateValue("");

            steps.editDealContractPeriod.editAddNewContractPeriod();
            steps.editDealContractPeriod.editFillEndTargetMonths();
            steps.editDealContractPeriod.editSelectContractPeriodNumberI(2);
            steps.editDealContractPeriod.editContractPeriodArea();
            steps.editDealContractPeriod.editFillIntoEndActualDateField("2014-05-22");
            steps.editDealContractPeriod.editTerminateNewContractPeriodDialog();
            steps.headerDeal.checkStartDateText();
            steps.headerDeal.checkStartDateValue("2014-02-12");
            steps.headerDeal.checkEndDateText();
            steps.headerDeal.checkEndDateValue("2014-05-22");

        }
    },
    {
        name: "Create a deal and check the deal header",
        tags: ["header_signing_territory"],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();

            steps.headerDeal.checkSigningTerritoryText();
            steps.headerDeal.checkSigningTerritoryValue("Argentina");

            steps.deal.goToGeneralDealTabDetails();
            steps.editDealGeneral.editGeneralTabFirstElementsLeftArea();
            steps.editDealGeneral.editSigningTerritory("Austria");
            steps.editDealGeneral.saveEditGeneralTabFirstElementsLeftArea();
            steps.headerDeal.checkSigningTerritoryText();
            steps.headerDeal.checkSigningTerritoryValue("Austria");

        }
    }


];
