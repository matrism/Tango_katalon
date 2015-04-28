"use strict";
var _ = require("lodash");
var ExpectedConditions = protractor.ExpectedConditions;
var randomId = require("../helpers/randomId");
var pages_path = _tf_config._system_.path_to_pages;
require(pages_path + "base");
module.exports = pages.create_deal_contract_period = new ftf.pageObject({});

//locators
module.exports.startDate = function () {
    return element(By.css("div#actualStartDate input"));
};

module.exports.endTargetMonths = function () {
    return element(By.name("targetEndDuration"));
};

module.exports.addMdrcLink = function () {
    return element(By.css("a[data-ng-click='addCommitment()']"));
};

module.exports.incompleteMdrc = function () {
    return element(By.css("button[data-ng-class='{ active: !mdrc.is_completed && !mdrc.showDeemedCompleteDetails }']"));
};

module.exports.deemedCompleteMdrc = function () {
    return element(By.css("button[data-ng-class='{ active: mdrc.is_completed && mdrc.showDeemedCompleteDetails }']"));
};

module.exports.completeMdrc = function () {
    return element(By.css("button[data-ng-class='{ active: mdrc.is_completed && !mdrc.showDeemedCompleteDetails }']"));
};

module.exports.mdrcQuantity = function () {
    return element(By.name("quantity"));
};

module.exports.mdrcMinimumWorkContribution = function () {
    return element(By.model("mdrc.work_percent"));
};

module.exports.mdrcQuantityForCommercialRelease = function () {
    return element(By.model("mdrc.com_release_major_territory"));
};

module.exports.mdrcMajorTerritoriesForCommercialRelease = function () {
    return element(By.id("territories"));
};

module.exports.mdrcTerritoriesField = function () {
    return element(By.css("#mdrcTerritories0 div.territoriesStaticView"));
};

module.exports.mdrcTerritoriesInputField = function () {
    return element(By.css("#mdrcTerritories0 div.territoriesContainer  input[ng-model='typeaheadQuery']"));
};

module.exports.mdrcTerritoriesDropDown = function(){
    return element(By.css("div.typeaheadDropdown div.item.ng-scope"));
};

module.exports.mdrcYesCommercialReleaseByMajorLabel = function(){
    return element(By.css("button[data-ng-model='mdrc.release_label']:nth-child(1)"));
};

module.exports.mdrcNoCommercialReleaseByMajorLabel = function(){
    return element(By.css("button[data-ng-model='mdrc.release_label']:nth-child(2)"));
};

module.exports.mdrcLabels = function(){
    return element(By.css("div[data-ng-model='mdrc.labels'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"));
};

module.exports.mdrcLabelsDropDownData = function(){
    return element(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"));
};

module.exports.mdrcYesSelfRecord = function () {
  return element(By.css("button[data-ng-model='mdrc.self_record']:nth-child(1)"));
};

module.exports.mdrcNoSelfRecord = function () {
    return element(By.css("button[data-ng-model='mdrc.self_record']:nth-child(2)"));
};

module.exports.mdrcPercentOfMinStatutoryRate = function(){
    return elment(By.model("mdrc.min_stat_mech_rate_percent"));
};

module.exports.mdrcInNoEventLessThan = function () {
  return element(By.model("mdrc.no_less_than"));
};

module.exports.mdrcYesProportionalRecoupmentAllowed = function(){
    return element(By.css("button[data-ng-model='mdrc.proportional_recoupment']:nth-child(1)"));
};

module.exports.mdrcNoProportionalRecoupmentAllowed = function(){
    return element(By.css("button[data-ng-model='mdrc.proportional_recoupment']:nth-child(2)"));
};

module.exports.mdrcYesSeeContractForAdditionalMdrcComplexities = function () {
  return element(By.css("button[data-ng-model='mdrc.additional_complexity']:nth-child(1)"));
};

module.exports.mdrcNoSeeContractForAdditionalMdrcComplexities = function () {
    return element(By.css("button[data-ng-model='mdrc.additional_complexity']:nth-child(2)"));
};

module.exports.mdrcDeliverySchedule = function(){
    return element(By.model("mdrc.delivery_schedule.quantity"));
};

module.exports.mdrcEveryWeeks = function(){
    return element(By.model("mdrc.delivery_schedule.frequency"));
};

module.exports.mdrcDateCompleted = function() {
    return element(By.css("#dateCompleted input[data-ng-model='date']"));
};

module.exports.mdrcShortfallAmount = function(){
    return element(By.id("shortfall"));
};

module.exports.mdrcForgivenShortfallButton = function () {
  return element(By.css("div.btn-group.shortfall-action button:nth-child(1)"));
};

module.exports.mdrcCarriedForwardShortfallButton = function () {
    return element(By.css("div.btn-group.shortfall-action button:nth-child(2)"));
};

module.exports.mdrcSaveButton = function () {
  return element(By.css("button[data-ng-click='activeContractPeriod.freshlyAdded ? saveCommitment(form.terms.activeCp.id, mdrc.id, mdrcForm.$valid) : updateDeal(mdrcForm.$valid, form.deal, activeForm, dealUpdateCallbackFunction)']"));
};

module.exports.mdrcCancelLink = function(){
    return element(By.css("a[data-ng-click='cancelCommitmentChanges(form.terms.activeCp.id, mdrc.id);']"))
};

module.exports.mdrcDeleteButton = function(){
    return element(By.css("button[data-ng-click='showDeleteCommitmentModal(mdrc.id, form.terms.activeCp.id, modularInitView)']"));
};


//methods
module.exports.fillStartActualDate = function () {
    pages.create_deal_contract_period.startDate().sendKeys("2015-03-12");
};

module.exports.fillTargetEndMonths = function () {
    pages.create_deal_contract_period.endTargetMonths().sendKeys("3");
};

module.exports.clickOnAddMdrcLink = function () {
    pages.create_deal_contract_period.addMdrcLink().click();
};

module.exports.clickOnIncompleteOption = function () {
    pages.create_deal_contract_period.incompleteMdrc().click();
};

module.exports.clickOnDeemedCompleteOption = function () {
    pages.create_deal_contract_period.deemedCompleteMdrc().click();
};

module.exports.clickOnCompleteOption = function () {
    pages.create_deal_contract_period.completeMdrc().click();
};

module.exports.fillIntoMdrcQuantity = function () {
    var number = Math.floor(Math.random() * 20) + 1;
    pages.create_deal_contract_period.mdrcQuantity().sendKeys(number);
};

module.exports.fillIntoMdrcMinimumWorkContribution = function () {
    var number = Math.floor(Math.random() * 100) + 1;
    pages.create_deal_contract_period.mdrcMinimumWorkContribution().clear();
    pages.create_deal_contract_period.mdrcMinimumWorkContribution().sendKeys(number);
};

module.exports.fillIntoMdrcQuantityForCommercialRelease = function () {
    var number = Math.floor(Math.random() * 20) + 1;
    pages.create_deal_contract_period.mdrcQuantityForCommercialRelease().sendKeys(number);
};

module.exports.fillIntoMdrcMajorTerritoriesForCommercialeRelease = function () {
    var number = Math.floor(Math.random() * 5) + 1;
    pages.create_deal_contract_period.mdrcMajorTerritoriesForCommercialRelease().clear();
    pages.create_deal_contract_period.mdrcMajorTerritoriesForCommercialRelease().sendKeys(number);
};

module.exports.fillIntoTerritoriesFieldLetter = function(){
    pages.create_deal_contract_period.mdrcTerritoriesField().click();
    pages.create_deal_contract_period.mdrcTerritoriesInputField().sendKeys("a");
};

module.exports.selectRandomTerritory = function(){
    browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_contract_period.mdrcTerritoriesDropDown()));
    browser.driver.findElements(By.css("div.typeaheadDropdown div.item.ng-scope"))
        .then(function (options) {
            var randomNumber = Math.floor((Math.random() * options.length));
            options[randomNumber].click();
        })
};






