var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps,
    random = require('../../helpers/random'),
    randomId = random.id.makeMemoizedGenerator();

require(steps_path + 'mainHeader');
require(steps_path + 'orgs/newOrganisation');

var beforeFeature = function () {
        steps.login.itLogin();
    },

    feature = [
        {
            name: 'Create Organisation form',
            tags: ['newOrganisationFormProductionSmokeTest', 'smokeProd'],
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


module.exports = {
    commonFeatureTags: ['smokeTestsProd', 'productionTest', 'organisationSmokeTests'],
    feature: feature,
    beforeFeature: beforeFeature
};
