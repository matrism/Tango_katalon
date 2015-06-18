"use strict";
var _ = require("lodash");
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
if (pages.rateSetIncomeTypes === undefined) {


    var pages_path = _tf_config._system_.path_to_pages;
    require(pages_path + "base");

    pages.rateSetIncomeTypes = new ftf.pageObject({
        url: _tf_config.urls.app_url + "#/create/deal",
        locators: {



        },
      getRateSetGroup: function (incomeGroupName) {

          //tbody//td[contains(text(),'1-2-3')]

      //    contains(text(),'Cover Mechanical')
      //    return $('.rate-set-groups>div:not(.rate-set-row):not(.rate-set-column-header-border):contains('+incomeGroupName+')');



        //  descendant-or-self::*[contains(concat(' ', normalize-space(@class), ' '), ' rate-set-groups ')]/div[not(contains(concat(' ', normalize-space(@class), ' '), ' rate-set-row ')) and (not(contains(concat(' ', normalize-space(@class), ' '), 'rate-set-column-header-border ')))]/*[contains(concat(' ', normalize-space(@class), ' '), ' rate-set-group-header ')] /descendant-or-self::div[contains(concat(' ', normalize-space(@class), ' '), ' rate-set-entity-name ')]/descendant-or-self::span[contains(concat(' ', normalize-space(@class), ' '), ' rate-set-view-values ') and  contains(text(),'Cover Mechanical')]
          return element(by.xpath(
              " descendant-or-self::*[contains(concat(' ', normalize-space(@class), ' '), ' rate-set-groups ')]/div[not(contains(concat(' ', normalize-space(@class), ' '), ' rate-set-row ')) and (not(contains(concat(' ', normalize-space(@class), ' '), 'rate-set-column-header-border ')))]/*[contains(concat(' ', normalize-space(@class), ' '), ' rate-set-group-header ')] /descendant-or-self::div[contains(concat(' ', normalize-space(@class), ' '), ' rate-set-entity-name ')]/descendant-or-self::span[contains(concat(' ', normalize-space(@class), ' '), ' rate-set-view-values ') and  contains(text(),'"+incomeGroupName+"')]/parent::div/parent::div/parent::div/parent::div        "
          ));
      },
        getRateSetBody: function (rateSetGroup) {
            return  rateSetGroup.$(".rate-set-group-body");
        },

        getIncomeType: function (rateSetBody,incomeType) {
          //  return rateSetBody.$('div:contains('+incomeType+')');
      //  return rateSetBody.element(By.("*[contains(text(),'"+incomeType+"')]"));



           // var child = element(by.xpath("*[contains(text(),'"+incomeType+"')]"));

         //   var child = element(by.css(".rate-set-income-type-rates"));
         //
         //return    rateSetBody.element(child.locator());
        //    ptor.findElement(By.xpath("/body/div[@id='menu']/div[@id='button']"))
   //  return protractor.findElement(rateSetBody.protractor.By.xpath("*[contains(text(),'"+incomeType+"')]"));

         //return   ptor.findElement(rateSetBody.findElement(protractor.By.xpath('tr')).then(function(rows){
         //       expect(rows.length).toBe(10);
         //   });

            //descendant-or-self::*[contains(concat(' ', normalize-space(@class), ' '), ' rate-set-groups ')]/div[not(contains(concat(' ', normalize-space(@class), ' '), ' rate-set-row ')) and (not(contains(concat(' ', normalize-space(@class), ' '), 'rate-set-column-header-border ')))]/*[contains(concat(' ', normalize-space(@class), ' '), ' rate-set-group-header ')] /descendant-or-self::div[contains(concat(' ', normalize-space(@class), ' '), ' rate-set-entity-name ')]/descendant-or-self::span[contains(concat(' ', normalize-space(@class), ' '), ' rate-set-view-values ') and  contains(text(),'Cover Mechanical')]/parent::div/parent::div/parent::div/parent::div/descendant-or-self::*[contains(concat(' ', normalize-space(@class), ' '), ' rate-set-group-body ')]/descendant-or-self::*[contains(concat(' ', normalize-space(@class), ' '), ' rate-set-income-type ')]/descendant-or-self::*[contains(concat(' ', normalize-space(@class), ' '), ' rate-set-row ')]/*[contains(concat(' ', normalize-space(@class), ' '), ' rate-set-entity-name ')]/span[ contains(text(),'Cover Mechanical')]/parent::div /parent::div /parent::div

            var rateBody = rateSetBody.$(".rate-set-income-type")
            return
        },

        getRateSetIncomeTypeRates: function (incomeType) {
            return incomeType.$(".rate-set-income-type-rates")
        }
        ,
        getRateSetRow: function (rateSetIncomeTypeRates) {
            return rateSetIncomeTypeRates.$('[name="rateForm"]');
        }
        ,
        getRateSetname: function (rateSet) {
            return rateSet.$(".rate-set-rate-name");
        },
       getRateSetField: function (rateSet) {
            return rateSet.$(".rate-set-rate-field")
        }
        ,
        getRateSetFieldInput: function (rateSetField) {
            return rateSetField.$("div>input");
        },

        getInputValue: function (input) {
            return input.getAttribute('value');
        }
















    });
}

module.exports = pages.rateSetIncomeTypes;