"use strict";

var _ = require("lodash");
var ExpectedConditions = protractor.ExpectedConditions;
var pages_path = _tf_config._system_.path_to_pages;
browser.ignoreSynchronization = true;

if (pages.affiliateIncomeSwagger === undefined) {
    pages.affiliateIncomeSwagger = new ftf.pageObject({
        locators: {
            affiliateIncomeOperations: {css: "#resources #resource_affiliate h2 a"},
            getAffiliateWorkPipelineLine: {css: "#affiliate_endpoint_list  ul.operations li#affiliate_pipelineWorkIncome_0 span.path a"},
            territoryCodeInputField: {css: "#affiliate_pipelineWorkIncome_0_content input[name='territory_code']"},
            royaltyPeriodInputField: {css: "#affiliate_pipelineWorkIncome_0_content input[name='royalty_period']"},
            tangoWorkCodeInputField: {css: "#affiliate_pipelineWorkIncome_0_content input[name='tango_work_code']"},
            tryItOutButton: {css: "#affiliate_pipelineWorkIncome_0_content div.sandbox_header input[name='commit']"}
        },


        expandTheAffiliateIncomeOperations: function () {
            browser.sleep(2000);
            browser.wait(ExpectedConditions.visibilityOf(pages.affiliateIncomeSwagger.elems.affiliateIncomeOperations));
            pages.base.scrollIntoView(pages.affiliateIncomeSwagger.elems.affiliateIncomeOperations);
            pages.affiliateIncomeSwagger.elems.affiliateIncomeOperations.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.affiliateIncomeSwagger.elems.getAffiliateWorkPipelineLine));
        },

        expandTheGetAffiliateWorkPipelineCall: function () {
            pages.base.scrollIntoView(pages.affiliateIncomeSwagger.elems.getAffiliateWorkPipelineLine);
            pages.affiliateIncomeSwagger.elems.getAffiliateWorkPipelineLine.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.affiliateIncomeSwagger.elems.territoryCodeInputField));
        },

        fillIntoTheTerritoryCodeInputField: function (territoryCode) {
            pages.base.scrollIntoView(pages.affiliateIncomeSwagger.elems.territoryCodeInputField);
            pages.affiliateIncomeSwagger.elems.territoryCodeInputField.sendKeys(territoryCode);
        },

        fillIntoTheRoyaltyPeriodInputField: function (royaltyPeriod) {
            pages.base.scrollIntoView(pages.affiliateIncomeSwagger.elems.royaltyPeriodInputField);
            pages.affiliateIncomeSwagger.elems.royaltyPeriodInputField.sendKeys(royaltyPeriod);
        },

        fillIntoTheTangoWorkCodeInputField: function (tangoWorkCode) {
            pages.base.scrollIntoView(pages.affiliateIncomeSwagger.elems.tangoWorkCodeInputField);
            pages.affiliateIncomeSwagger.elems.tangoWorkCodeInputField.sendKeys(tangoWorkCode);
        },

        selectTheDesiredOptionForForceRecalc: function (forceRecalc) {
            var desiredOption;
            pages.base.scrollIntoView(element(by.css("#affiliate_pipelineWorkIncome_0_content select[name='force_recalc']")));
            browser.driver.findElements(By.css("#affiliate_pipelineWorkIncome_0_content select[name='force_recalc'] option"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(forceRecalc) != -1) {
                                    desiredOption = option;
                                    return true;
                                }
                            }
                        )
                    });
                })
                .then(function clickOption() {
                    if (desiredOption) {
                        desiredOption.click();
                        browser.sleep(1000);
                    }
                });
        },

        clickOnTheTryItOutButton: function () {
            browser.sleep(1000);
            pages.base.scrollIntoView(pages.affiliateIncomeSwagger.elems.tryItOutButton);
            pages.affiliateIncomeSwagger.elems.tryItOutButton.click();
            pages.affiliateIncomeSwagger.elems.tryItOutButton.click();
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("div.block.response_body.json pre.json"))));
            //browser.driver.findElement(By.css("div.block.response_body.json pre.json")).getText().then(function (promise) {
            //    if (promise) {
            //        pages.affiliateIncomeSwagger.elems.tryItOutButton.click();
            //        browser.wait(ExpectedConditions.visibilityOf(element(by.css("div.block.response_body.json pre.json"))));
            //    }
            //});
        }


    });
}