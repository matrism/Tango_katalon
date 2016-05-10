'use strict';

var fnutils = require('../../../../helpers/fnutils'),
    using = fnutils.using;

exports.id = 'c4a31f69-95d2-4280-9fa7-77d54fdcb691';

exports.commonFeatureTags = [
    'albums', 'smoke', 'albumsSmoke', 'searchForAlbum', 'production', 'productionSmoke'
];

exports.beforeFeature = function() {
    steps.login.itLogin();
};

exports.feature = [
    {
        name: 'Search for an album by title',
        tags: [],
        steps: function() {

            using(steps.mainHeader.search, function () {
                this.selectEntityType('Albums');
                this.selectFilterTag('Title');
                this.enterTerms('TUXEDO');
                this.selectResultByIndex(0);
            });

            using(steps.album, function() {
                using(this.header, function() {
                    this.expectHeaderToBeVisible();
                    this.validateAlbumCode('90217178');
                    this.validateTitle('TUXEDO');
                    this.validateArtistName('Tuxedo');
                });
                this.recordings.validateTitle(0, 'DO IT');
            });

        }
    }
];
