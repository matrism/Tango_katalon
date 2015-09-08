"use strict";
var steps_path = _tf_config._system_.path_to_steps;
var pages_path = _tf_config._system_.path_to_pages;
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
require(steps_path + "deal");
require(pages_path + "deal");
require(pages_path + "finder_deal");

if (steps.deal === undefined) {
    steps.deal = {

        goToNextPage: function () {
            it("Click on continue to next page button", function () {
                pages.deal.continueToNextPage();
            });
        },

        waitContinueButtonEnabled: function () {
            it("Check continue button to be enabled", function () {
                pages.deal.expectContinueButtonEnabled();
            });
        },

        saveDeal: function () {
            it("Click on save deal button", function () {
                pages.deal.saveNewDeal();
            });
        },

        clickFirstScopeHeader:function()
        {
            it("Click the first scope header",function(){

          pages.deal.clickScopeHeader();



            });


        },
        clickLastScopeHeader:function()
        {
            it("Click the last scope header",function(){

                pages.deal.clickScopeHeaderLast();



            });


        },



        waitForDealToBeSaved: function () {
            it("Expect deal screen to be loaded and brief number displayed ", function () {
                browser.wait(ExpectedConditions.visibilityOf(pages.deal.elems.dealBriefNumber));
            });
        },


        returnDealNumber: function () {
            it("Return deal number ", function () {
                element(By.css("#RECORD-HEADER div.header-info div.metadata-box:nth-child(6) p.info.ng-binding")).getText().
                    then(function (promise) {
                        console.log("Deal number is: " + promise);
                    });
            });
        },

        findId: function() {
            it('Find deal ID', function () {
                var idBinding = element(By.xpath('//*[@id="RECORD-HEADER"]//div/div/div[6]/div/p[@class="info ng-binding"]'));

                idBinding.getText().then(function(value) {
                    hash.currentEntityDataSlotsByType.deal.id = value;
                });
            });
        },

        itContinueToNextPage: function () {
            describe("Check continue button enabled and go to next page", function () {
                    //steps.deal.waitContinueButtonEnabled();
                    steps.deal.goToNextPage();
                }
            );
        },

        goToGeneralDealTabDetail: function () {
            it("Click on general header and go to general deal tab details ", function () {
                pages.deal.goToGeneralDealDetails();
            });
        },

        goToGeneralDealTabDetails: function () {
            it("Click on general header and go to general deal tab details ", function () {
                pages.deal.goToGeneralDealDetails();
                browser.wait(ExpectedConditions.visibilityOf(pages.deal.elems.dealGeneralSummaryHeader));
            });
        },

        goToTermsDealTabDetails: function () {
            it("Click on terms header and go to terms deal tab details ", function () {
                pages.deal.goToTermsDealDetails();
            });
        },

        expectTermsDetailsAreOk: function () {
            it("Expect terms tab is opened successfully ", function () {
                browser.wait(ExpectedConditions.visibilityOf(pages.deal.elems.dealTermsSummaryHeader));
            });
        },

        goToFinderDealTermsTabDetails: function () {
            it("Click on finder deal terms link ", function () {
                pages.deal.goToFinderDealTerms();
                browser.wait(ExpectedConditions.visibilityOf(pages.deal.elems.finderDealsTitle));
            });
        },

        goToIncomeRatesPage:function()
        {
            it("Go to Income Rates Summary Page",function()
            {


                pages.deal.clickIncomeRatesLink();

            });



        },

        verifyErrorMessages:function()
        {it("Check that error messages are displayed correctly",function()
            {
               expect(pages.deal.errorHeaderIsVisible()).toBeTruthy();

              //  expect(pages.deal.errorIconsAreVisible()).toBeTruthy();
              expect(pages.deal.errorRRIsVisible()).toBeTruthy();


            }
        )


        },
        getRRIconData:function()
        {
            it("",function()
            {
                pages.deal.errorIconsAreVisible();

            })

        }

    };
}






