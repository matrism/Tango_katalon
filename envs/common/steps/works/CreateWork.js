"use strict";

var moment = require('moment'),
    pad = require('left-pad'),
    pph = require('../../../../helpers/pph'),
    random = require('../../../../helpers/random'),
    randomId = random.id.makeMemoizedGenerator(),
    randomString = random.string.makeMemoizedGenerator(),
    _ = require('lodash'),
    promise = protractor.promise,
    callResultOrValue = require('../../../../helpers/callResultOrValue'),
    pageStep = require('../../../../helpers/basicPageStep');
    hash.PriWorkName = {};
    hash.AltWorkName = {};
    //hash.WorkId = {};

steps.CreateWorkComp = exports;

exports.CreateWork = function (howMany) {
    describe('Create Work', function () {
        _.times(howMany, function (i) {
            hash.PriWorkName[i]='TEST AUTO WORK ' + randomId('mainWork');
            hash.AltWorkName[i] = 'TEST WORK ALTERNATE TITLE ' + randomId('mainWork');
            console.log(hash.PriWorkName[i]);
            steps.base.useBlankEntityDataSlot('work', 'mainWork');

                steps.newWork.goToNewWorkPage();

                steps.newWork.enterPrimaryWorkTitle(hash.PriWorkName[i]);

                steps.newWork.enterAlternateWorkTitle(
                    0, hash.AltWorkName[i]);

                //steps.work.selectRandomCreator(i)
                //steps.newWork.selectCreatorFromPersonSlot(0, 0);
                steps.newWork.selectCreator('Mohd Ibrahim, Mohd Shahrul Iman');
                //    [steps.newWork.selectCreatorSearchResultByIndex(0)],
                steps.newWork.enterCreatorContribution(0, 100);

                //steps.newWork.selectCreatorFromPersonSlot(1, 1);
                //steps.newWork.enterCreatorContribution(1, 50);

                steps.newWork.selectRandomMusicalDistributionCategory();
                steps.newWork.selectRandomTextMusicRelationship();
                steps.newWork.selectRandomExcerptType();
                steps.newWork.selectRandomVersionType();
                steps.newWork.selectRandomLyricAdaptation();
                steps.newWork.selectRandomMusicArrangement();

                steps.newWork.optToIncludeWorkOnWebsite(false);

                //steps.newWork.continueToNextTab();
            steps.newWork.saveWork();
            steps.newWork.validateSaveWorkRedirection();/*
            steps.work.findCurrentlyOpenWorkId().then(function(value) {
                //hash.WorkId[i] = value;
               console.log('work id ' + hash.WorkId[i])

             });
             */
            steps.work.storeTheWorkIdInTestVariable('work id');
        })
    });
};


