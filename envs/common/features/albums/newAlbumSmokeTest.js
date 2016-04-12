'use strict';

let fnutils = require('../../../../helpers/fnutils'),
    using = fnutils.using,
    random = require('../../../../helpers/random'),
    randomId = random.id.makeMemoizedGenerator();

exports.commonFeatureTags = ['albums', 'smoke', 'albumsSmoke'],

exports.beforeFeature = () => {
    steps.login.itLogin();
};

exports.feature = [
    {
        name: 'Create person',
        tags: [
            'newAlbumSmokeTestCreatePerson',
            'newAlbumSmokeTestCreateWork',
            'newAlbumSmokeCreateCommercialAlbum',
        ],
        steps: function() {
            steps.person.useBlankPersonSlot(0);

            using(steps.newPerson, function() {
                this.goToNewPersonPage();

                this.enterLastName('TEST PERSON ' + randomId('mainPerson'));

                this.enterAffiliatedSocietySearchTerms('ASCAP');
                this.selectAffiliatedSocietySearchResultByIndex(0);

                this.save();
            });

            steps.person.findInternalIpiNumber();
        },
    },
    {
        name: 'Create work',
        tags: [
            'newAlbumSmokeTestCreateWork',
            'newAlbumSmokeCreateCommercialAlbum',
        ],
        steps: function() {
            steps.base.useBlankEntityDataSlot('work', 'mainWork');

            using(steps.newWork, function() {
                this.goToNewWorkPage();

                this.enterPrimaryWorkTitle(
                    'TEST WORK ' + randomId('mainWork')
                );

                this.selectCreatorFromPersonSlot(0, 0);
                this.enterCreatorContribution(0, 100);

                this.optToIncludeWorkOnWebsite(false);

                this.saveWork();
            });

            steps.work.findCurrentlyOpenWorkId();
        },
    },
    {
        name: 'Create commercial album',
        tags: ['newAlbumSmokeCreateCommercialAlbum'],
        steps: function() {
            using(steps.newAlbum, function() {
                this.goToNewAlbumPage();

                this.enterTitle('TEST ALBUM ' + randomId('commercialAlbum'));

                this.selectReleaseType('Commercial');

                this.enterArtistSearchTerms(
                    'TEST ARTIST ' + randomId('commercialAlbumArtist')
                );

                this.createEnteredArtist();

                this.enterAlbumCode(
                    'TEST ALBUM CODE ' + randomId('commercialAlbumCode')
                );

                this.enterRecordingSearchTerms(
                    0, 'TEST RECORDING ' + randomId('commercialAlbumRecording')
                );

                this.createEnteredRecording();

                this.enterWorkIdFromWorkSlotAsWorkSearchTerms(0, 'mainWork');

                this.selectRecordingWorkSearchResultByIndex(0);

                this.enterRecordingArtistSearchTerms(
                    0, 'TEST ARTIST ' + randomId('commercialAlbumArtist')
                );

                this.selectRecordingArtistSearchResultByIndex(0);

                this.save();
            });

            steps.album.header.expectHeaderToBeVisible();
        },
    },
];
