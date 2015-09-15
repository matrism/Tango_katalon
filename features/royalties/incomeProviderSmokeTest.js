'use strict';

var steps_path = _tf_config._system_.path_to_steps,
    fnutils = require('../../helpers/fnutils'),
    using = fnutils.using,
    random = require('../../helpers/random'),
    randomId = random.id.makeMemoizedGenerator();

require(steps_path + 'login');
require(steps_path + 'mainHeader');
require(steps_path + 'orgs/organisation');
require(steps_path + 'orgs/newOrganisation');

exports.beforeFeature = [
    [steps.login.itLogin],
];

exports.commonFeatureTags = ['royalties', 'incomeProvider', 'smokeTest'];

exports.feature = [
    {
        name: 'Create an organisation with an income provider role and then edit it',
        tags: [],
        steps: function () {
            steps.mainHeader.createNewRecord('Organisation');

            using(steps.newOrganisation, function () {
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
                this.setIncomeFileType('ASCAP DOMESTIC');

                _.times(2, function (i) {
                    this.enterIncomeTypeMappingType(i, 'T' + (i + 1));
                    this.enterIncomeTypeMappingDescription(i, 'D' + (i + 1));
                    this.enterIncomeTypeMappingFileTypeSearchTerms(i, 'ASCAP DOMESTIC');
                    this.selectIncomeTypeMappingFileTypeSearchResultByIndex(0);
                    this.enterIncomeTypeMappingInternalTypeSearchTerms(i, 'Mechanical');
                    this.selectIncomeTypeMappingInternalTypeSearchResultByIndex(0);
                }, this);

                this.saveOrganisation();
            });

            using(steps.organisation.general, function () {
                this.editSection();

                this.enterName(
                    'TEST INCOME PROVIDER ' + randomId('editedIncomeProvider')
                );

                this.editTerritoriesOfOperation();
                this.deleteTerritoryOfOperation('United States');
                this.enterTerritoryOfOperationSearchTerms('Brazil');
                this.selectTerritoryOfOperationSearchResultByIndex(0);

                this.selectOrganisationType('Society');
                this.selectOrganisationType('Publisher');

                this.selectPublisherType('WCM 3rd Party');
                this.selectPublisherType('WCM');

                this.saveSection();
                this.expectSectionToBeInViewMode();
            });

            using(steps.organisation.incomeProvider, function () {
                this.editSection();

                this.selectPrimaryTerritoryOfOperation('Brazil');

                this.selectDefaultCurrency('BRL');

                this.deleteIncomeFileType('ASCAP DOMESTIC');
                this.enterIncomeFileTypeSearchTerms('ABRAMUS');
                this.selectIncomeFileTypeSearchResultByIndex(0);
            });

            using(
                steps.organisation.incomeProvider.incomeTypeMapping,
                function () {
                    this.deleteRow(0);

                    this.enterInboundIncomeType(1, 'T3');

                    this.enterInboundIncomeTypeDescription(1, 'D3');

                    this.enterIncomeFileTypeSearchTerms(1, 'ABRAMUS');
                    this.selectIncomeFileTypeSearchResultByIndex(0);

                    this.enterTangoIncomeTypeSearchTerms(1, 'Mechanical');
                    this.selectTangoIncomeTypeSearchResultByIndex(0);
                }
            );

            using(steps.organisation.incomeProvider, function () {
                this.saveSection();
                this.expectSectionToBeInViewMode();
            });
       }
    }
];