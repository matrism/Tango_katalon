'use strict';

var fnutils = require('../../helpers/fnutils'),
    using = fnutils.using,
    random = require('../../helpers/random'),
    randomId = random.id.makeMemoizedGenerator();

exports.commonFeatureTags = ['albums', 'smoke', 'production'];

exports.beforeFeature = [
    [steps.login.itLogin],
];

exports.feature = [
    {
        name: 'Fill album creation form',
        tags: [],
        steps: function () {
            using(steps.newAlbum, function () {
                this.goToNewAlbumPage();

                this.enterTitle('TEST ALBUM ' + randomId('commercialAlbum'));

                this.selectReleaseType('Commercial');

                this.enterArtistSearchTerms(
                    'TEST ARTIST ' + randomId('commercialAlbumArtist')
                );

                this.expectNewArtistOptionToBeVisible();
                this.cancelArtistSearch();

                this.enterAlbumCode(
                    'TEST ALBUM CODE ' + randomId('commercialAlbumCode')
                );

                this.enterRecordingSearchTerms(
                    0, 'TEST RECORDING ' + randomId('commercialAlbumRecording')
                );

                this.expectNewRecordingOptionToBeVisible();
                this.cancelRecordingSearch();
            });
        }
    }
];
