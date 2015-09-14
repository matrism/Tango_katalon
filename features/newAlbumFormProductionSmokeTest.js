'use strict';

var steps_path = _tf_config._system_.path_to_steps,
    fnutils = require('../helpers/fnutils'),
    using = fnutils.using,
    random = require('../helpers/random'),
    randomId = random.id.makeMemoizedGenerator();

require(steps_path + 'login');
require(steps_path + 'newAlbum');

var beforeFeature = [
        [steps.login.itLogin],
    ],
    feature = [
        {
            name: 'Fill album creation form',
            tags: [],
            steps: function() {
                using(steps.newAlbum, function() {
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
            },
        },
    ];

module.exports = {
    commonFeatureTags: [
        'newAlbumFormProductionSmokeTest',
        'productionAlbums',
        'productionSmokeTest',
        'productionTest',
    ],
    feature: feature,
    beforeFeature: beforeFeature
};
