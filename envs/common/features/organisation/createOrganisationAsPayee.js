'use strict';

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['Organisation_payee', 'regression'];

exports.feature = [
    {
        name: "Create multiple organisations as payees",
        tags: ["orgAsPayee"],
        steps: criticalScenario(() =>
        {

            for (var i = 1; i <= 20; i++) {
                steps.mainHeader.createNewRecord("Organisation");
                steps.newOrganisation.populateName("org " + i + " TAT payee");
                steps.newOrganisation.selectOrgType("Publisher");
                steps.newOrganisation.selectTerritoryOfOperation("Worldwide");
                steps.newOrganisation.selectPublisherType("WCM");
                steps.newPerson.selectAsPayeeOptionToYes();
                steps.newOrganisation.saveOrganisation();
            }
        })
    }
];