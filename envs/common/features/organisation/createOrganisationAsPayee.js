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
                steps.base.sleep(2000);
                steps.newOrganisation.selectOrgType("Publisher");
                steps.base.sleep(3000);
                steps.newOrganisation.selectTerritoryOfOperation("Worldwide");
                steps.base.sleep(3000);
                steps.newOrganisation.selectPublisherType("WCM");
                steps.base.sleep(2000);
                steps.newPerson.selectAsPayeeOptionToYes();
                 steps.base.sleep(5000);
                steps.newOrganisation.saveOrganisation();

            }
        })
    }
];