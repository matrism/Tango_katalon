var _ = require("lodash");
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
if (steps.new_deal === undefined) {
    steps.new_deal = {
        itCreateBasicDeal: function () {
            describe("Create basic deal", function () {

                it("Open create deal page", function () {
                    pages.new_deal.open().waitForAjax();

                });

                it("Select desired deal signing territory", function () {
                   pages.new_deal.selectDesiredSigningTerritory();
                    //  pages.new_deal.addTerritoryByTypingToScope();
                });

                it("Fill in contracting parties field specific value", function () {
                    pages.new_deal.fillContractingPartiesField("bmi");
                });

                it(
                    "Wait for suggestions dropdown to appear", function () {
                        var suggestion = $(".tg-typeahead__suggestions-container");
                        browser.wait(ExpectedConditions.visibilityOf(suggestion));
                        expect(suggestion.getText()).not.toContain("No results");
                    }
                );

                it("Select specific suggestion", function () {
                        pages.new_deal.selectContractingPartyValue("(021)\n BMI");
                    }
                );

                it("Expect continue button to be enabled", function () {
                    expect(pages.new_deal.elems.continueButton.isEnabled);
                });

                it("Continue with next page", function () {
                    pages.new_deal.continueToNextPage();
                });

                it("Fill mandatory fields contract period", function () {
                    expect(pages.new_deal.elems.start_date.isDisplayed);
                    pages.new_deal.fillStartActualDate();
                    pages.new_deal.fillTargetEndMonths();
                });

                it("Add simple scope", function () {
                    pages.new_deal.addScopeForm();
                    //pages.new_deal.selectContractTypeScope("Administration");
                    //pages.new_deal.addTerritoryByTypingToScope();
                });



            });
        },





        test: function(){


            it("Test Step",function()
            {
                browser.pause();

            });

        }

    };
}

module.exports = steps.new_deal;
