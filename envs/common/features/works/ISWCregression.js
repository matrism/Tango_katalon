'use strict';


var random = require('../../../../helpers/random'),
    randomISWC = random.tenDigitCode.makeMemoizedGenerator();

//exports.id = '05c77628-80ae-43bf-ba24-0502f76911a1';

exports.beforeFeature = function() {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['ISWCregression','regression'];

exports.feature = [
    {
        name: 'Enter ISWC code and validate',
        tags: [],
        steps: function() {
        //steps: criticalScenario(() => {
            var ISWCno;
            steps.work.goToWorkPageById('WW 008912132 00');
            steps.work.goToGeneralTab();
            steps.work.editISWC();
            _.times(5, function (i) {
                if (i===0 || i===4) {
                    steps.work.inputISWCCode("T" + randomISWC('iswc' + i), i, "primary"); //iswc no, row, tick primary
                } else {
                    steps.work.inputISWCCode("T" + randomISWC('iswc' + i), i); //iswc no, row, tick primary
                }
            });
            steps.base.sleep(500);
            steps.ISWC.expectSaveButtonToBeDisabled();
            steps.work.inputISWCCode(null, 4, "primary"); //iswc no, row, tick primary
            steps.ISWC.expectSaveButtonToBeEnabled();
            steps.work.saveISWC();
            steps.base.refreshPage();

            //validate primary ISWC code in header
            steps.ISWC.validateISWCPrimaryNoHeader('T' + randomISWC('iswc0'));
            _.times(5, function (i) {
                steps.ISWC.validateISWCPopup('T' + randomISWC('iswc' + i));
            });

            //validate ISWC code in edit view
            steps.work.editISWC();
            ISWCno = 'T' + randomISWC('iswc0') + ' T' + randomISWC('iswc1') + ' T' + randomISWC('iswc2')  + ' T' + randomISWC('iswc3') + ' T' + randomISWC('iswc4');
            steps.ISWC.editValidateISWC(ISWCno,5);

            //delete iswc code and cancel
            _.times(5, function (i) {
                steps.ISWC.deleteISWCcode(0);
            });
            steps.work.cancelISWC('Confirm Cancellation');

            //validate ISWC code in edit view
            steps.work.editISWC();
            ISWCno = 'T' + randomISWC('iswc0') + ' T' + randomISWC('iswc1') + ' T' + randomISWC('iswc2')  + ' T' + randomISWC('iswc3') + ' T' + randomISWC('iswc4');
            steps.ISWC.editValidateISWC(ISWCno,5);

            //delete iswc code and confirm delete
            _.times(5, function (i) {
                steps.ISWC.deleteISWCcode(0);
            });
            steps.work.saveISWC();
            steps.base.refreshPage();

            //validate primary ISWC code in header
            steps.ISWC.validateISWCPrimaryNoHeader('');
            steps.work.editISWC();
            steps.ISWC.editValidateISWC(ISWCno,1);
        }
    },

    {
        name: 'Search for ISWC code',
        tags: ['searchISWC'],
        steps: function() {
        //steps: criticalScenario(() => {
            var ISWCno;
            steps.work.goToWorkPageById('WW 008912132 00');
            steps.work.goToGeneralTab();

            steps.work.editISWC();
            _.times(5, function (i) {
                if (i===0) {
                    steps.work.inputISWCCode("T" + randomISWC('iswc' + i), i, "primary"); //iswc no, row, tick primary
                } else {
                    steps.work.inputISWCCode("T" + randomISWC('iswc' + i), i); //iswc no, row, tick primary
                }
            });
            steps.base.sleep(500);
            steps.work.saveISWC();
            steps.base.refreshPage();

            //search for ISWC code
            _.times(5, function (i) {
                steps.searchSection.selectEntityType('Works');
                steps.work.selectWorkSearchFilterTag(0, 'ISWC');
                //steps.base.sleep(1000);
                steps.ISWC.searchISWC("T" + randomISWC('iswc' + i));
                steps.work.expectWorkSearchMatchCountToBe(1);
                steps.work.clickWorkSearchMatch(0);
                steps.base.waitForAjax();
                steps.work.validateWorkId('WW 008912132 00');
                steps.base.refreshPage();
            });
            //delete iswc code and cancel
            steps.work.editISWC();
            _.times(5, function (i) {
                steps.ISWC.deleteISWCcode(0);
            });
            steps.work.saveISWC();
        }
    }
];
