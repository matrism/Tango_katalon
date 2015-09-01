var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps,
    random = require('../helpers/random'),
    randomId = random.id.makeMemoizedGenerator();

require(steps_path + 'mainHeader');
require(steps_path + 'organisationSmokeTests');

var beforeFeature = function () {
        steps.login.itLogin();
    },

    feature = [
        {
            name: 'Create Organisation form',
            tags: ['newOrganisationFormProductionSmokeTest','smokeProd'],
            steps: function () {
                steps.mainHeader.createNewRecord('Organisation');
                steps.organisationSmokeTests.populateName('Org smoke test');
                steps.organisationSmokeTests.selectTerritoryOfOperation('United States');
                steps.organisationSmokeTests.selectOrgType('Publisher');
                steps.organisationSmokeTests.selectPublisherType('WCM');
                steps.organisationSmokeTests.makeOrgRegistrationRecipient();

                var deliveryMethod = 'FTP';
                steps.organisationSmokeTests.addDeliveryMethod(deliveryMethod);
                steps.organisationSmokeTests.fillRequiredFieldsForDeliveryMethod(deliveryMethod);

                steps.organisationSmokeTests.selectAcknowledgementProcess('Single');
                steps.organisationSmokeTests.selectAcknowledgementProcessDeliveryMethod('Email');

                //make sure we can add a second delivery method
                steps.organisationSmokeTests.addDeliveryMethod(deliveryMethod);
                steps.organisationSmokeTests.fillRequiredFieldsForDeliveryMethod(deliveryMethod);

                steps.organisationSmokeTests.clickSubpublisherRelationshipButton('Yes');
                steps.organisationSmokeTests.fillRequiredFieldsForLastSubpublisher('WARNER CHAPPELL MUSIC FINLAND OY', 'Finland');
                steps.organisationSmokeTests.clickAddSubpublisherButton();
                steps.organisationSmokeTests.fillRequiredFieldsForLastSubpublisher('WARNER CHAPPELL MUSIC FINLAND OY', 'Sweden');

                steps.organisationSmokeTests.makeOrgIncomeProvider();
                steps.organisationSmokeTests.setDefaultIncomeProviderCurrency('USD');
                steps.organisationSmokeTests.setIncomeFileType('ASCAP Domestic');
                /*steps.organisationSmokeTests.addIncomeTypeMapping(20, 'description', '', 'Mechanical');
                steps.organisationSmokeTests.addIncomeTypeMapping(25, 'different description', 'ASCAP Domestic', 'Mechanical');
                steps.organisationSmokeTests.addIncomeTypeMapping(30, 'description', 'ASCAP Domestic', 'Digital Mechanical');*/

                steps.organisationSmokeTests.makeOrgPayee();
                steps.organisationSmokeTests.makeOrgStatementRecipient();
                steps.organisationSmokeTests.setStatementRecipientData('Excel', 'Email with Attachment');

                steps.organisationSmokeTests.expectFormToBeValid();
                steps.organisationSmokeTests.expectDoneButtonToBeClickable();
            }
        }

    ];


module.exports = {
    commonFeatureTags: ['smokeTestsProd', 'productionTest', 'organisationSmokeTests'],
    feature: feature,
    beforeFeature: beforeFeature
};
