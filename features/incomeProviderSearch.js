var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps;


require(pages_path + "royaltyRates");
require(steps_path + "royaltyRates");

require(pages_path + "deal");
require(steps_path + "deal");

require(pages_path + "create_deal_general");
require(steps_path + "create_deal_general");

require(pages_path + "create_deal_contract_period");
require(steps_path + "create_deal_contract_period");

require(pages_path + "create_deal_scope");
require(steps_path + "create_deal_scope");

//require(pages_path + "incomeProvider");
require(steps_path + "incomeProvider");



var beforeFeature = function () {
        steps.login.itLogin();
        //steps.deal_general.itFillDealMandatoryFieldsGeneralTab();
        //steps.deal.itContinueToNextPage();
        //steps.deal_contract_period.itFillDealMandatoryFieldsContractPeriod();

    },

    feature = [{
        name: "I would like to check positive case of income provider validation rules",
        tags: ["IP1"],
        steps: function () {

            steps.incomeProvider.createValidRoyaltySetPair(
                [
                    ["Income_Provider_1","Date_1 "    ,"Income_Provider_2","Date_2    "],
                    ["HFA,ASCAP        ","2017-01-01","                 ","2017-01-01"],
                    ["HFA              ","           ","                 ","          "],
                    ["                 ","           ","                 ","          "],
                    ["                 ","2017-01-01 ","                 ","          "],
                    ["                 ","2017-01-01 ","                 ","2017-01-03"],
                    ["HFA              ","2017-01-01 ","HFA              ","2017-01-03"]


                ],


                "Check that income provider pair - Provider1: %Income_Provider_1% - Date1: %Date_1% and Provider2: %Income_Provider_2% - Date2: %Date_2%  is valid"
            );


        }
    }

        ,
        {
            name: "I would like to check negative case of income provider validation rules",
            tags: ["IP2"],
            steps: function () {

                steps.incomeProvider.createInvalidRoyaltySetPair(
                    [
                        ["Income_Provider_1","Date_1 "    ,"Income_Provider_2","Date_2    "],
                        ["HFA,ASCAP        ","2017-01-01","HFA              ","2017-01-01"],
                        ["HFA              ","2017-01-01","HFA              ","2017-01-01"],
                        ["                 ","2017-01-01","                 ","2017-01-01"]


                    ],


                    "Check that income provider pair - Provider1: %Income_Provider_1% - Date1: %Date_1% and Provider2: %Income_Provider_2% - Date2: %Date_2%  is invalid"
                );


            }
        }
        ,
        {
            name: "I would like to check positive case of income provider validation rules",
            tags: ["IP3"],
            steps: function () {

                steps.incomeProvider.editValidRoyaltySetPair(
                    [
                        ["Income_Provider_1","Date_1 "    ,"Income_Provider_2","Date_2    "],
                        ["HFA              ","           ","                 ","          "],
                        ["                 ","           ","                 ","          "],
                        ["HFA,ASCAP        ","2017-01-01","                 ","2017-01-01"],
                        ["                 ","2017-01-01 ","                 ","          "],
                        ["                 ","2017-01-01 ","                 ","2017-01-03"],
                        ["HFA              ","2017-01-01 ","HFA              ","2017-01-03"]


                    ],


                    "Check that income provider pair - Provider1: %Income_Provider_1% - Date1: %Date_1% and Provider2: %Income_Provider_2% - Date2: %Date_2%  is valid"
                );


            }
        },
        {
            name: "I would like to check negative case of income provider validation rules upon editing a deal",
            tags: ["IP4"],
            steps: function () {

                steps.incomeProvider.editInvalidRoyaltySetPair(
                    [
                        ["Income_Provider_1","Date_1 "    ,"Income_Provider_2","Date_2    "],
                        ["                 ","2017-01-01","                 ","2017-01-01"],
                        ["HFA,ASCAP        ","2017-01-01","HFA              ","2017-01-01"],
                        ["HFA              ","2017-01-01","HFA              ","2017-01-01"]



                    ],


                    "Check that income provider pair - Provider1: %Income_Provider_1% - Date1: %Date_1% and Provider2: %Income_Provider_2% - Date2: %Date_2%  is invalid"
                );


            }
        }








    ];


module.exports = {
    commonFeatureTags: ["incomeProvider"],
    feature: feature,
    beforeFeature: beforeFeature
};