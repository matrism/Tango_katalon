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


            steps.editDealGeneral.editGeneralTabFirstElementsLeftArea();
            steps.editDealGeneral.editSigningTerritory("Austria");
            steps.editDealGeneral.saveEditGeneralTabFirstElementsLeftArea();
            steps.headerDeal.checkSigningTerritoryText();
            steps.headerDeal.checkSigningTerritoryValue("Argentina");

        }
    },

    {
        name: "Create a deal and check the deal header",
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


        }
    }
];
