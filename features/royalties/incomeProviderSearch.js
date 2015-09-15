var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps;

require(pages_path + "royalties/royaltyRates");
require(steps_path + "royalties/royaltyRates");
require(pages_path + "deals/deal");
require(steps_path + "deals/deal");
require(pages_path + "deals/createGeneral");
require(steps_path + "deals/createGeneral");
require(pages_path + "deals/createContractPeriod");
require(steps_path + "deals/createContractPeriod");
require(pages_path + "deals/createScope");
require(steps_path + "deals/createScope");
//require(pages_path + "incomeProvider");
require(steps_path + "royalties/incomeProvider");

exports.beforeFeature = function () {
    steps.login.itLogin();
    //steps.deal_general.itFillDealMandatoryFieldsGeneralTab();
    //steps.deal.itContinueToNextPage();
    //steps.deal_contract_period.itFillDealMandatoryFieldsContractPeriod();
};

exports.commonFeatureTags = ['royalties', 'incomeProvider', 'broken'];

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
        tags: ["IP3"],
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
        tags: ["IP4"],
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