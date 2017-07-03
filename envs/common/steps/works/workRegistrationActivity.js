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
            var x;
            if (x == 0){ x=1; }
            else  { x=0;}
            if (hash.emailDeliveries) {
                hash.emailDeliveries.forEach(function (emailDelivery, i) {
                    expect(self.getEmailMethodEmail(i)).toBe(emailDelivery.email);
                });
            }
            if (hash.ftpDeliveries) {
                hash.ftpDeliveries.forEach(function (ftpDelivery, i) {
                    expect(self.getFtpMethodAddress(i)).toBe(ftpDelivery.deliveryMethodAddress);
                    expect(self.getFtpMethodPort(i)).toContain(ftpDelivery.deliveryMethodPort[x]);
                });
            }
        });
    });
};
