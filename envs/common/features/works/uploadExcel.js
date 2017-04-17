'use strict';

let path = require('path'),
    fs = require('fs-extra'),
    tmp = require('tmp'),
    leftPad = require('left-pad'),

    generateExcel = requireFromEnvFolder('features/works/data/generateUploadExcel');

exports.commonFeatureTags = [
    'uploadWorksExcelRegression',
    'uploadWorksExcel',
    'works',
    'regression'
];

exports.beforeFeature = () => {
    steps.login.itLogin();
};

exports.feature = [
    {
        name: 'Create albums and recordings',

        tags: [],

        steps: criticalScenario(() => {
            let base = steps.base,

                mh = steps.mainHeader,
                wuh = steps.worksUploadHistory,
                uw = steps.uploadWorks,
                vwf = steps.viewWorkFile,
                vwfu = vwf.unconfirmed,
                vwfc = vwf.created,

                w = steps.work,
                wr = steps.workRecordings,
                wra = wr.albums,

                alb = steps.album,
                ah = alb.header,
                ar = alb.recordings,

                albCode = random.id();

            mh.goToLink('Works Upload History');
            steps.base.sleep(1000);
            wuh.uploadWorks();

            it('Generate Excel file', () => {
                browser.controlFlow().execute(() => {
                    return generateExcel(albCode).then(filePath => {
                        hash.testVariables['generated Excel file path'] = (
                            filePath
                        );

                        hash.testVariables['generated Excel file name'] = (
                            path.basename(filePath)
                        );
                    });
                });
            });

            describe('Upload file', () => {
                uw.enterFilePath(fromTestVariable('generated Excel file path'));

                uw.enterSourceSearchTerms('BMI');
                uw.selectSourceSearchResultByIndex(0, 'BMI');

                uw.selectFormat('Production Music Excel');

                uw.selectMusicLibrary('AUDIOMACHINE');

                steps.criticalSection.wrap(() => {
                    uw.upload();
                });
            });
            steps.base.sleep(1000);
            wuh.waitUntilFileNameIsStaged(fromTestVariable(
                'generated Excel file name'
            ));

            wuh.findRowByFileName(
                fromTestVariable('generated Excel file name'), 'uploaded row'
            );

            let iUploaded = fromTestVariable('uploaded row');

            describe('Validate row header data', () => {
                wuh.validateUnconfirmedCount(iUploaded, 3);
                wuh.validateOpenCount(iUploaded, 0);
                wuh.validateCreatedCount(iUploaded, 0);

                wuh.validateUploadDate(
                    iUploaded, moment().format('YYYY-MM-DD')
                );

                wuh.validateSource(iUploaded, 'BMI');
            });

            wuh.viewFile(iUploaded);

            describe('Validate header data', () => {
                steps.base.sleep(1000);
                vwf.validateFileName(fromTestVariable(
                    'generated Excel file name'
                ));

                vwf.validateTotalWorks(3);
            });

            steps.base.sleep(1000);
            vwfu.validateRowCount(3);

            _.times(3, i => {
                describe(`Create work ${i}`, () => {
                    vwfu.toggle(0);
                    vwfu.create(0);
                    vwfu.confirmation();
                });
            });

            vwf.goToTab('Created');

            _.times(3, i => {
                describe(`Validate created work data (${i})`, () => {
                    let iOne = (i + 1),
                        iOnePadded = leftPad(iOne, 2, 0);

                    vwfc.createdWorksView.openWork(i);
                    base.switchToTab(1);

                    w.goToRecordingsTab();

                    describe('Validate work recording data', () => {
                        wr.validateRowCount(1);

                        wr.validateTitle(0, `TEST WORK ${iOne} ${albCode}`);
                        wr.validateLibraryName(0, 'AUDIOMACHINE');
                        wr.validateDuration(0, `00 : ${iOnePadded} : ${iOnePadded}`);

                        wr.toggle(0);

                        wra.validateAlbumTitle(0, 0, `TEST ALBUM ${albCode}`);
                        wra.validateTrackNumber(0, 0, iOne);
                    });

                    wra.open(0, 0);
                    base.closeCurrentTabAndSwitchTo(1);

                    describe('Validate created album data', () => {
                        ah.validateTitle(`TEST ALBUM ${albCode}`);
                        ah.validateLibraryName('AUDIOMACHINE');
                        ah.validateTrackCount(3);
                        ah.validateDuration('00:00:00');
                        ah.validateAlbumCode(`TESTALB${albCode}`);
                    });

                    describe('Validate created album recording data', () => {
                        ar.validateTrackNumber(i, iOne);
                        ar.validateTitle(i, `TEST WORK ${iOne} ${albCode}`);
                        ar.validateLibraryName(i, 'AUDIOMACHINE');
                        ar.validateDuration(i, `00:${iOnePadded}:${iOnePadded}`);
                    });

                    base.closeCurrentTabAndSwitchTo(0);
                });
            });
        })
    }
];
