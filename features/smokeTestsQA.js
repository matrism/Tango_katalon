var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps,
    random = require('../helpers/random'),
    randomId = random.id.makeMemoizedGenerator(),
    fnutils = require('../helpers/fnutils'),
    using = fnutils.using;


require(steps_path + "login");
require(steps_path + "base");

var beforeFeature = function () {
        steps.login.itLogin();
    },

    feature = [
        {
            name: "Royalties Manual Statement",
            tags: ["smokeManualStatement", "smokeQA"],
            steps: function () {
                steps.royaltyRates.goToRoyaltyStatements();
                steps.royaltyRates.clickCreateManualStatement();

                steps.royaltyRates.typeIncomeProvider("HFA");

                steps.royaltyRates.setStatementDistributionPeriod("1991", "02", "2013", "03");

                steps.royaltyRates.setStatementAmount("1000");
                steps.royaltyRates.setExchangeRate("1");
                steps.royaltyRates.createManualStatement();

                steps.royaltyRates.enterBatchAmmount("1000");
                steps.royaltyRates.clickDefaultSettingsOnBatch();
                steps.royaltyRates.selectIncomeTypeForBatch("Mechanical");

                steps.royaltyRates.selectExploitationTerritoryForBatch("Lithuania");
                steps.royaltyRates.addWorkByTitle("test");


                steps.royaltyRates.setAmountRecievedForWork("1000");
                steps.royaltyRates.clickDoneButtonForManualStatement();


                steps.royaltyRates.goToRoyaltyStatements();
                steps.royaltyRates.expandSavedManualStatement();
                steps.royaltyRates.validateManualStatement();



            }
        }
    ];


module.exports = {
    commonFeatureTags: ["smokeTestsQA"],
    feature: feature,
    beforeFeature: beforeFeature
};
