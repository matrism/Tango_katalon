"use strict";
var pph = require("../helpers/pph");
var promise = protractor.promise;
module.exports = pages.deal = new ftf.pageObject();


module.exports.dealBriefNumber = function(){
    return element(By.xpath("//*[@id='RECORD-HEADER']//div/div/div[6]/div/p[@class='info ng-binding']"))
};

