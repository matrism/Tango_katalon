'use strict';

var pageStep = require('../../../../helpers/basicPageStep'),
    fnutils = require('../../../../helpers/fnutils'),
    using = fnutils.using;

steps.workRegistrationActivity = exports;

pageStep([
    ['Activity Group', [
        'Find',
        'Validate recipient name',
        'Go to recipient page',
        'Toggle blind',

        ['Events', [
            'Validate event count',
            'Find',
            'Validate status',
            'Wait until any event status becomes',
            'Toggle blind',
            'Store file name in test variable',
            'Validate Ack Creation Date',
            'Validate InitiatedBy',
            'Validate Message',
            'Validate Record Type',
            'Validate Message Level',
            'Validate Validation Number',
            'Validate Society Code',
            'Validate Processed Date'
        ]]
    ]],
]);

exports.activityGroup.events.validateDeliveries = function () {
    it('Verify That All inner deliveries are delivered', function () {
        using(pages.workRegistrationActivity.activityGroup.events, function () {
            var self = this;
            if (hash.emailDeliveries) {
                hash.emailDeliveries.forEach(function (emailDelivery, i) {
                    expect(self.getEmailMethodEmail(i)).toBe(emailDelivery.email);
                });
            }
            if (hash.ftpDeliveries) {
                hash.ftpDeliveries.forEach(function (ftpDelivery, i) {
                    expect(self.getFtpMethodAddress(i)).toBe(ftpDelivery.deliveryMethodAddress);
                    expect(self.getFtpMethodPort(i)).toContain(ftpDelivery.deliveryMethodPort);
                });
            }
        });
    });
};

exports.activityGroup.validateThirdPartyDelivery = function () {
    describe('Validate third party delivery (if present)', function () {
        if (hash.thirdPartyDeliveries) {
            hash.thirdPartyDeliveries.forEach(function (thirdPartyDelivery, i) {
                using(steps.workRegistrationActivity.activityGroup, function() {
                    steps.base.sleep(20000);
                    this.find({ firstWithRecipientName: hash.thirdPartyDelivery.name });
                    this.toggleBlind();

                    using(this.events, function() {
                        this.find({ firstWithFileName: fromTestVariable('last event file name') });
                        this.toggleBlind();
                        this.validateStatus('Delivered');
                        this.validateInitiatedBy();
                        this.validateProcessedDate('2014-09-01');
                    });
                });
            });
        }
    });
};
