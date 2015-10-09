'use strict';

var fnutils = require('../../../../helpers/fnutils'),
    using = fnutils.using,
    random = require('../../../../helpers/random'),
    randomId = random.id.makeMemoizedGenerator();

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['orgs', 'smoke', 'production'];

exports.feature = [
    {
        name: 'Create Organisation form',
        tags: ['create'],
        steps: function () {
            steps.mainHeader.createNewRecord('Organisation');

            using(steps.newOrganisation, function () {
                this.populateName('Org smoke test');
                this.selectTerritoryOfOperation('United States');
                this.selectOrgType('Publisher');
                this.selectPublisherType('WCM');
                this.makeOrgRegistrationRecipient();

                var deliveryMethod = 'FTP';
                this.addDeliveryMethod(deliveryMethod);
                this.fillRequiredFieldsForDeliveryMethod(deliveryMethod);

                this.selectAcknowledgementProcess('Single');
                this.selectAcknowledgementProcessDeliveryMethod('Email');

                //make sure we can add a second delivery method
                this.addDeliveryMethod(deliveryMethod);
                this.fillRequiredFieldsForDeliveryMethod(deliveryMethod);

                this.clickSubpublisherRelationshipButton('Yes');
                this.fillRequiredFieldsForLastSubpublisher('WARNER CHAPPELL MUSIC FINLAND OY', 'Finland');
                this.clickAddSubpublisherButton();
                this.fillRequiredFieldsForLastSubpublisher('WARNER CHAPPELL MUSIC FINLAND OY', 'Sweden');

                this.makeOrgIncomeProvider();
                this.setDefaultIncomeProviderCurrency('USD');
                this.setIncomeFileType('ASCAP Domestic');
                /*this.addIncomeTypeMapping(20, 'description', '', 'Mechanical');
                this.addIncomeTypeMapping(25, 'different description', 'ASCAP Domestic', 'Mechanical');
                this.addIncomeTypeMapping(30, 'description', 'ASCAP Domestic', 'Digital Mechanical');*/

                this.makeOrgPayee();
                this.makeOrgStatementRecipient();
                this.setStatementRecipientData('Excel', 'Email with Attachment');

                this.expectFormToBeValid();
                this.expectDoneButtonToBeClickable();
            });
        }
    }
];
