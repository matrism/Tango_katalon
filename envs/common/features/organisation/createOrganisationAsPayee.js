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



            //}
        }
    }
];