var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps;


require(pages_path + "royaltyRates");
require(steps_path + "royaltyRates");

require(pages_path + "deal");
require(steps_path + "deal");

require(pages_path + "deal_general");
require(steps_path + "deal_general");

require(pages_path + "deal_contract_period");
require(steps_path + "deal_contract_period");

require(pages_path + "deal_scope");
require(steps_path + "deal_scope");

//require(pages_path + "incomeProvider");
require(steps_path + "incomeProvider");

var beforeFeature = function () {
        steps.login.itLogin();
        steps.deal_general.itFillDealMandatoryFieldsGeneralTab();
        steps.deal.itContinueToNextPage();
        steps.deal_contract_period.itFillDealMandatoryFieldsContractPeriod();
        steps.deal_scope.itAddSimpleScope();
    },

    feature = [{
        name: "I would like to check positive case of income provider validation rules",
        tags: ["IP1"],
        steps: function () {

            steps.incomeProvider.createValidRoyaltySetPair(
                [
                    ["Income_Provider_1","Date_1 "    ,"Income_Provider_2","Date_2    "],
                    ["HFA,ASCAP        ","01.01.2014 ","                 ","01.01.2014"],
                    ["HFA              ","           ","                 ","          "],
                    ["                 ","           ","                 ","          "],
                    ["                 ","01.01.2014 ","                 ","          "],
                    ["                 ","01.01.2014 ","                 ","03.01.2014"],
                    ["HFA              ","01.01.2014 ","HFA              ","03.01.2014"]


                ],


                "Check that income provider pair $Income_Provider_1 -%Date_1 and %Income_Provider_2 - %Date_2  is valid"
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
                        ["HFA,ASCAP        ","01.01.2014 ","HFA              ","01.01.2014"],
                        ["HFA              ","01.01.2014 ","HFA              ","01.01.2014"],
                        ["                 ","01.01.2014 ","                 ","01.01.2014"]


                    ],

                    "Check that  %errorMessage% is displayed for date: %date% "
                );


            }
        }








    ];


module.exports = {
    commonFeatureTags: ["incomeProvider"],
    feature: feature,
    beforeFeature: beforeFeature
};