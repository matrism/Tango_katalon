'use strict';

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['persons', 'payee', 'regression'];

exports.feature = [
    {
        name: "Create multiple persons as payees",
        tags: ["personAsPayee"],
        steps: function () {

            //for (var i = 1; i <= 100; i++) {
                steps.person.useBlankPersonSlot(0);
                steps.newPerson.goToNewPersonPage();
                steps.newPerson.enterLastName("person " + i + " TAT payee");
                steps.newPerson.enterAffiliatedSocietySearchTerms('ASCAP');
                steps.newPerson.selectAffiliatedSocietySearchResultByIndex(0);
                steps.newPerson.selectAsPayeeOptionToYes();
                steps.newPerson.save();
            //}
        }
    }
];