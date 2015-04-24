var _ = require("lodash");
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
if (steps.editRoyaltyRates === undefined) {
    steps.editRoyaltyRates = {

        addNewRoyaltySet : function() {


            it("Add new Royalty Rate Set", function () {

                    pages.editRoyaltyRates.clickNewRoyaltySetButton();
                }
            );
        },

        test: function(){


            it("Test Step",function()
            {
                browser.pause();

            });

        }

    };
}

module.exports = steps.editRoyaltyRates;
