'use strict';

exports.beforeFeature = function () {
    steps.login.itLogin();
    //steps.dealGeneral.itFillDealMandatoryFieldsGeneralTab();
    //steps.deal.itContinueToNextPage();
    //steps.dealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
};

exports.commonFeatureTags = ['royalties', 'incomeProvider', 'sanity', 'broken'];

exports.feature = [
    {
        name: 'Check positive case of income provider validation rules',
        tags: ['create', 'validation'],
        steps: function () {
            steps.incomeProvider.createValidRoyaltySetPair(
                [
                    ["Income_Provider_1", "Date_1 ", "Income_Provider_2", "Date_2    "],
                    ["HFA,ASCAP        ", "2017-01-01", "                 ", "2017-01-01"],
                    ["HFA              ", "           ", "                 ", "          "],
                    ["                 ", "           ", "                 ", "          "],
                    ["                 ", "2017-01-01 ", "                 ", "          "],
                    ["                 ", "2017-01-01 ", "                 ", "2017-01-03"],
                    ["HFA              ", "2017-01-01 ", "HFA              ", "2017-01-03"]
                ],
                "Check that income provider pair - Provider1: %Income_Provider_1% - Date1: %Date_1% and Provider2: %Income_Provider_2% - Date2: %Date_2%  is valid"
            );
        }
    },
    {
        name: 'Check negative case of income provider validation rules',
        tags: ['create', 'validation'],
        steps: function () {
            steps.incomeProvider.createInvalidRoyaltySetPair(
                [
                    ["Income_Provider_1", "Date_1 ", "Income_Provider_2", "Date_2    "],
                    ["HFA,ASCAP        ", "2017-01-01", "HFA              ", "2017-01-01"],
                    ["HFA              ", "2017-01-01", "HFA              ", "2017-01-01"],
                    ["                 ", "2017-01-01", "                 ", "2017-01-01"]
                ],
                "Check that income provider pair - Provider1: %Income_Provider_1% - Date1: %Date_1% and Provider2: %Income_Provider_2% - Date2: %Date_2%  is invalid"
            );
        }
    },
    {
        name: "I would like to check positive case of income provider validation rules",
        tags: ["validation"],
        steps: function () {
            steps.incomeProvider.editValidRoyaltySetPair(
                [
                    ["Income_Provider_1", "Date_1 ", "Income_Provider_2", "Date_2    "],
                    ["HFA              ", "           ", "                 ", "          "],
                    ["                 ", "           ", "                 ", "          "],
                    ["HFA,ASCAP        ", "2017-01-01", "                 ", "2017-01-01"],
                    ["                 ", "2017-01-01 ", "                 ", "          "],
                    ["                 ", "2017-01-01 ", "                 ", "2017-01-03"],
                    ["HFA              ", "2017-01-01 ", "HFA              ", "2017-01-03"]
                ],
                "Check that income provider pair - Provider1: %Income_Provider_1% - Date1: %Date_1% and Provider2: %Income_Provider_2% - Date2: %Date_2%  is valid"
            );
        }
    },
    {
        name: "I would like to check negative case of income provider validation rules upon editing a deal",
        tags: ["validation"],
        steps: function () {
            steps.incomeProvider.editInvalidRoyaltySetPair(
                [
                    ["Income_Provider_1", "Date_1 ", "Income_Provider_2", "Date_2    "],
                    ["                 ", "2017-01-01", "                 ", "2017-01-01"],
                    ["HFA,ASCAP        ", "2017-01-01", "HFA              ", "2017-01-01"],
                    ["HFA              ", "2017-01-01", "HFA              ", "2017-01-01"]
                ],
                "Check that income provider pair - Provider1: %Income_Provider_1% - Date1: %Date_1% and Provider2: %Income_Provider_2% - Date2: %Date_2%  is invalid"
            );
        }
    }
];
