'use strict';

var path = require('path'),
    resolvePath = path.resolve,
    yaml = require('yamljs'),

    using = fnutils.using,
    bind = fnutils.bind,

    bmiMappings = yaml.load(resolvePath(
        __dirname, 'data/bmiIncomeTypeMappings.yml'
    ));

exports.beforeFeature = function () {
    steps.login.itLogin();
    steps.searchSection.accessSavedOrganisationByName('BMI');
};

exports.commonFeatureTags = ['bmiIncomeTypeMappingsSetupUtility', 'orgs', 'utility'];

exports.feature = [
    {
        name: "I would like to add multiple Income Providers to Organisation",
        tags: [],
        steps: function () {
            using(steps.organisation.incomeProvider, function() {
                this.editSection();
                this.enterIncomeFileTypeSearchTerms('BMI');
                this.selectIncomeFileTypeSearchResultByIndex(0);

                bmiMappings.forEach(
                    bind(this.incomeTypeMapping, function(mapping, i) {
                        this.enterInboundIncomeType(i, mapping.inboundIncomeType);

                        this.enterInboundIncomeTypeDescription(
                            i, mapping.inboundIncomeTypeDescription
                        );

                        this.enterIncomeFileTypeSearchTerms(
                            i, mapping.incomeFileType
                        );

                        this.selectIncomeFileTypeSearchResultByIndex(0);

                        this.enterTangoIncomeTypeSearchTerms(
                            i, mapping.tangoIncomeType
                        );

                        this.selectTangoIncomeTypeSearchResultByIndex(0);
                    })
                );

                this.saveSection();
                this.expectSectionToBeInViewMode();
            });
        }
    }
];
