'use strict';

var promise = protractor.promise,
    ExpectedConditions = protractor.ExpectedConditions;

steps.editDealRtp = exports;

exports.clickOnAddRetentionFromAcquisitionLink = function () {
    it("Click on the add retention from acquisition link", function () {
       pages.editDealRtp.clickOnTheAddRetentionFromAcquisitionLink();
    });
};

exports.editFillRetentionDescriptionFromAcquisition = function(description){
    it("Edit fill into the retention description field from acquisition ", function () {
       pages.editDealRtp.editFillTheRetentionDescriptionFromAcquisition(description);
    });
};

exports.editSelectSpecificScopeNumberIRtpAcquisition = function(i){
    it("Edit select the specific scope number " + i  + " from acquisition", function(){
       pages.editDealRtp.editSelectTheSpecificScopeNumberIRtpAcquisition(i);
    });
};

exports.editSelectSpecificDurationTypeRetentionFromAcquisitionNumberI = function(i, durationType){
    it("Edit select the specific duration type retention from acquisition number " + i, function(){
      pages.editDealRtp.editSelectTheSpecificDurationTypeRetentionFromAcquisitionNumberI(i, durationType);
    });
};

exports.saveRetentionFromAcquisition = function(){
   it("Save the retention from acquisition number ", function(){
      pages.editDealRtp.saveTheRetentionFromAcquisition();
   });
};
