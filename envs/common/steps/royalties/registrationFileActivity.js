'use strict';

var pageStep = require('../../../../helpers/basicPageStep'),
    fnutils = require('../../../../helpers/fnutils'),
    using = fnutils.using;

steps.registrationFileActivity = exports;

exports.goToPage = function () {
    it("Go to Registration File Activity Page", function () {
        pages.registrationFileActivity.clickRegActivityHeader().then(function () {
            pages.registrationFileActivity.clickRegActivityDropDown();
        });
    })
};

exports.validateDeliveries = function () {
    it('Verify That All inner deliveries are delivered', function () {
        using(pages.registrationFileActivity, function () {
            var self = this;
            if (hash.emailDeliveries) {
                hash.emailDeliveries.forEach(function (emailDelivery, i) {
                    expect(self.getEmailMethodEmail(i)).toBe(emailDelivery.email);
                    expect(self.getEmailMethodFileFormat(i)).toBe(emailDelivery.fileFormat);
                });
            }
            if (hash.ftpDeliveries) {
                hash.ftpDeliveries.forEach(function (ftpDelivery, i) {
                    console.log("ftp" + i)
                    var x;
                    if (x == 0){ x=1; }
                    else  { x=0;}
                    expect(self.getFtpMethodAddress(i)).toBe(ftpDelivery.deliveryMethodAddress);
                    expect(self.getFtpMethodPort(i)).toContain(ftpDelivery.deliveryMethodPort[x]);
                    expect(self.getFtpMethodFileFormat(i)).toBe(ftpDelivery.fileFormat);
                });
            }
        });
    });
};

pageStep([
    'Go to Registration File Activity Page',
    'Find Event by File Name',
    'Find Event by Recipient',
    'Toggle blind',
    'Validate Status',
    'Validate Received Date',
    'Validate Total Accepted',
    'Validate Total Rejected',
    'Validate Initiated By',
    'Validate Accepted Values',
    'Validate Rejected Values'
]);
