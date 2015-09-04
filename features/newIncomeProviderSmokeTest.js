'use strict';

var steps_path = _tf_config._system_.path_to_steps,
    fnutils = require('../helpers/fnutils'),
    using = fnutils.using,
    random = require('../helpers/random'),
    randomId = random.id.makeMemoizedGenerator();

require(steps_path + 'login');
require(steps_path + 'mainHeader');
require(steps_path + 'organisationSmokeTests');

exports.commonFeatureTags = [
    'newIncomeProviderSmokeTest',
    'incomeProvider',
    'smokeTest',
];

exports.beforeFeature = [
    [steps.login.itLogin],
];

exports.feature = [
    {
        name: 'Create an organisation with an income provider role',
        tags: [],
        steps: function() {
            steps.mainHeader.createNewRecord('Organisation');

            using(steps.organisationSmokeTests, function() {
                this.populateName(
                    'TEST INCOME PROVIDER ' + randomId('incomeProvider')
                );

                this.selectTerritoryOfOperation('United States');
                this.selectTerritoryOfOperation('Argentina');

                this.selectOrgType('Publisher');
                this.selectPublisherType('WCM');

                this.makeOrgIncomeProvider();

                this.selectPrimaryIncomeProviderTerritoryOfOperation(
                    'Argentina'
                );

                this.setDefaultIncomeProviderCurrency('USD');
                this.setIncomeFileType('ASCAP Domestic');

                _.times(3, function(i) {
                    this.enterIncomeTypeMappingType(i, 'Type ' + (i + 1));
                    this.enterIncomeTypeMappingDescription(i, 'Description ' + (i + 1));
                    this.enterIncomeTypeMappingFileTypeSearchTerms(i, 'ASCAP Domestic');
                    this.selectIncomeTypeMappingFileTypeSearchResultByIndex(0);
                    this.enterIncomeTypeMappingInternalTypeSearchTerms(i, 'Mechanical');
                    this.selectIncomeTypeMappingInternalTypeSearchResultByIndex(0);
                }, this);

                this.saveOrganisation();
            });
        },
    },
];
