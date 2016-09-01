'use strict';

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['persons', 'payee', 'regression'];

exports.feature = [
    {
        name: "Create multiple organisations as payees",
        tags: ["orgAsPayee"],
        steps: function () {

            //for (var i = 1; i <= 100; i++) {
                steps.mainHeader.createNewRecord("Organisation");
                steps.newOrganisation.populateName("org " + i + " TAT payee");
                steps.newOrganisation.selectOrgType("Publisher");
                steps.newOrganisation.selectTerritoryOfOperation("Worldwide");
                steps.newOrganisation.selectPublisherType("WCM");
                steps.newPerson.selectAsPayeeOptionToYes();
                steps.newOrganisation.saveOrganisation();
            //}
        }
    }
];