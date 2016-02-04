'use strict';

exports.beforeFeature = function () {
    steps.login.itLogin();
},

    exports.commonFeatureTags = ['deals', 'header', 'regression'];

exports.feature = [
    {
        name: "Create a deal and check the deal header",
        tags: ["header_general"],
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
            steps.headerDeal.checkTerritoriesText();
            steps.headerDeal.checkOwnershipText();
            steps.headerDeal.checkOwnershipValue("None");
            steps.headerDeal.checkAdministrationText();
            steps.headerDeal.checkAdministrationValue("None");
            steps.headerDeal.checkContractingPartyValue("bmi");

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

            steps.editDealScope.editAddSpecificScopeTypeAndTerritory("Assignment", "Worldwide");
            steps.editDealScope.editSaveAllChanges();
            steps.headerDeal.checkContractTypeText();
            steps.headerDeal.checkContractTypeValue("Administration");
            steps.headerDeal.checkContractTypeValue("Finder");
            steps.headerDeal.checkContractTypeValue("Joint Venture");
            steps.headerDeal.checkContractTypeValue("Purchase");
            steps.headerDeal.checkContractTypeValue("Assignment");

            steps.deal.goToGeneralDealTabDetails();
            steps.editDealGeneral.editGeneralTabFirstElementsLeftArea();
            steps.editDealGeneral.editExistingContractingParty("ascap");
            steps.editDealGeneral.saveEditGeneralTabFirstElementsLeftArea();
            steps.headerDeal.checkContractingPartyValue("bmi");
            steps.headerDeal.checkContractingPartyValue("ascap");

        }
    },
    {
        name: "Create a deal and check the contracting party on deal header",
        tags: ["header_contracting_party"],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();

            steps.headerDeal.checkContractingPartyValue("bmi");

            steps.deal.goToGeneralDealTabDetails();
            steps.editDealGeneral.editGeneralTabFirstElementsLeftArea();
            steps.editDealGeneral.editExistingContractingParty("ascap");
            steps.editDealGeneral.editExistingContractingParty("wingman");
            steps.editDealGeneral.editExistingContractingParty("madonna");
            steps.editDealGeneral.editExistingContractingParty("mars");
            steps.editDealGeneral.editExistingContractingParty("perry");
            steps.editDealGeneral.editExistingContractingParty("katy");
            steps.editDealGeneral.editExistingContractingParty("bruno");
            steps.editDealGeneral.editExistingContractingParty("alex");
            steps.editDealGeneral.editExistingContractingParty("michael");
            steps.editDealGeneral.saveEditGeneralTabFirstElementsLeftArea();
            steps.headerDeal.clickOnContractingPartyValue();
            steps.headerDeal.checkContractingPartyValue("bmi");
            steps.headerDeal.checkContractingPartyValue("ascap");
            steps.headerDeal.checkContractingPartyValue("wingman");
            steps.headerDeal.checkContractingPartyValue("madonna");
            steps.headerDeal.checkContractingPartyValue("mars");
            steps.headerDeal.checkContractingPartyValue("perry");
            steps.headerDeal.checkContractingPartyValue("katy");
            steps.headerDeal.checkContractingPartyValue("bruno");
            steps.headerDeal.checkContractingPartyValue("alex");
            steps.headerDeal.checkContractingPartyValue("michael");
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

            steps.editDealGeneral.editSpecificRandomArtistField("Geo Test Artist", "Gear Test Artist");
            steps.editDealGeneral.editSpecificRandomArtistField("Star", "Star");
            steps.editDealGeneral.editSpecificRandomArtistField("Bruce", "Bruce");


            //steps.editDealGeneral.editSpecificArtistField("test", "Gema Test Artist");
            //steps.editDealGeneral.editSpecificArtistField("Shilpa", "Shilpa");
            //steps.editDealGeneral.editSpecificArtistField("mars", "Bruno Mars");

            steps.editDealGeneral.saveEditGeneralTabFirstElementsLeftArea();
            steps.headerDeal.checkArtistText();
            steps.headerDeal.checkArtistValue("Bruce, Geo Test Artist, Star");

            steps.editDealGeneral.editGeneralTabFirstElementsLeftArea();

            steps.editDealGeneral.editSpecificRandomArtistField("Madonna", "Madonna");


            //steps.editDealGeneral.editSpecificArtistField("madonna", "Madonna");

            steps.editDealGeneral.saveEditGeneralTabFirstElementsLeftArea();
            steps.headerDeal.checkArtistText();
            steps.headerDeal.checkArtistValue("Bruce, Geo Test Artist, Madonna, Star");

            steps.editDealGeneral.editGeneralTabFirstElementsLeftArea();
            steps.editDealGeneral.editRemoveArtistNumberI(2);
            steps.editDealGeneral.saveEditGeneralTabFirstElementsLeftArea();
            steps.headerDeal.checkArtistText();
            steps.headerDeal.checkArtistValue("Bruce, Geo Test Artist, Madonna");

            //steps.editDealGeneral.editGeneralTabFirstElementsLeftArea();
            //steps.editDealGeneral.editRandomArtistField("vfdbvf");
            //steps.editDealGeneral.saveEditGeneralTabFirstElementsLeftArea();
            //steps.headerDeal.checkArtistText();
            //steps.headerDeal.checkArtistValue("Bruno Mars, Gema Test Artist, Madonna, Shilpa", "zwgf");
        }
    },

    {
        name: "Create a deal add/edit dates and RTP and check the deal header",
        tags: ["header_rtp_brief_number"],
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

            steps.headerDeal.checkContractBriefNumberText();
            steps.headerDeal.checkContractBriefNumberValue();
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
            steps.headerDeal.checkContractBriefNumberText();
            steps.headerDeal.checkContractBriefNumberValue();

        }
    },
    {
        name: "Create a deal and check the deal header signing and last update",
        tags: ["header_signing_last_update"],
        steps: function () {
            var today = new Date();
            //var currentDate = today.getFullYear() + "-" + (today.getMonth() + 1).toString() + "-" + today.getDay();
            if(today.getMonth()<=8){
                if(today.getDay()<=9){
                    var currentDate = today.getFullYear() + "-" + 0 + (today.getMonth() + 1).toString() + "-" + 0 + today.getDay();
                }
                else{
                    var currentDate = today.getFullYear() + "-" + 0 + (today.getMonth() + 1).toString() + "-" + today.getDay();
                }
            }
            else{
                if(today.getDay()<=9){
                    var currentDate = today.getFullYear() + "-" + (today.getMonth() + 1).toString() + "-" + 0 + today.getDay();
                }
                else{
                    var currentDate = today.getFullYear() + "-" + (today.getMonth() + 1).toString() + "-" + today.getDay();
                }
            }
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
            steps.headerDeal.checkLastUpdateText();
            steps.headerDeal.checkLastUpdateValue(currentDate);
            //steps.headerDeal.clickOnLastUpdateValueAndCheckTheAuditLogScreen();

        }
    },

    {
        name: "Open a deal check last update made some changes and check again last updated in deal header",
        tags: ["header_contract_status"],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.createDealGeneral.clickOnDraftContractStatus();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
            steps.headerDeal.checkStatusText();
            steps.headerDeal.checkStatusValue("Draft");

            steps.deal.goToGeneralDealTabDetails();
            steps.editDealGeneral.editGeneralTabFirstElementsLeftArea();
            steps.editDealGeneral.editSelectTheExecutedContractStatus("Executed");
            steps.editDealGeneral.saveEditGeneralTabFirstElementsLeftArea();

            steps.headerDeal.checkStatusText();
            steps.headerDeal.checkStatusValue("Acquisition");

            steps.deal.goToTermsDealTabDetails();
            steps.deal.goToRightsTermPeriodsTermsTabDetails();

            steps.editDealRtp.editRtpAcquisitionArea();
            steps.editDealRtp.editFillIntoAcquisitionActualStartDateField("2016-08-08");
            steps.editDealRtp.editSaveAcquisitionArea();
            steps.headerDeal.checkStatusText();
            steps.headerDeal.checkStatusValue("Pre Term");

            steps.editDealRtp.editClickOnAddAnotherAcquisitionPeriodLink();
            steps.editDealRtp.editFillIntoAcquisitionActualStartDateField("2014-04-05");
            steps.editDealRtp.editSaveAnotherAcquisitionForm();
            steps.headerDeal.checkStatusText();
            steps.headerDeal.checkStatusValue("Acquisition");
            steps.editDealRtp.editRtpAcquisitionArea();
            steps.editDealRtp.editDeleteAddAnotherAcquisitionForm();

            steps.editDealRtp.editRtpAcquisitionArea();
            steps.editDealRtp.editFillIntoAcquisitionActualStartDateField("2014-04-05");
            steps.editDealRtp.editFillIntoAcquisitionActualEndDateField("2015-08-09");
            steps.editDealRtp.editSaveAcquisitionArea();
            steps.headerDeal.checkStatusText();
            steps.headerDeal.checkStatusValue("Expired");

            steps.editDealRtp.clickOnAddRetentionFromAcquisitionLink();
            steps.editDealRtp.editSelectSpecificDurationTypeRetentionFromAcquisitionNumberI(1, "Life of Copyright");
            steps.editDealRtp.saveRetentionFromAcquisition();
            steps.headerDeal.checkStatusText();
            steps.headerDeal.checkStatusValue("Retention");

            steps.editDealRtp.editRtpRetentionArea();
            steps.editDealRtp.editDeleteRtpRetentionFromAcquisitionForm();

            steps.editDealRtp.clickOnAddRetentionFromAcquisitionLink();
            steps.editDealRtp.editSelectSpecificDurationTypeRetentionFromAcquisitionNumberI(1, "Conditional Duration");
            steps.editDealRtp.editFillIntoActualEndDateFieldRetentionFromAcquisition("2015-11-12");
            steps.editDealRtp.clickOnAddPostTermCollectionFromRetention();
            steps.editDealRtp.editFillIntoDurationFieldPostTermCollectionFromRetention();
            steps.editDealRtp.saveRetentionFromAcquisition();
            steps.headerDeal.checkStatusText();
            steps.headerDeal.checkStatusValue("Post Term Collection");


        }
    }


];
