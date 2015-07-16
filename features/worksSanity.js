'use strict';

var pages_path = _tf_config._system_.path_to_pages,
	steps_path = _tf_config._system_.path_to_steps,
	random = require('../helpers/random'),
	randomId = random.id.makeMemoizedGenerator();

require(steps_path + 'login');
require(steps_path + 'new_work');

var beforeFeature = [
		[steps.login.itLogin]
	],
	feature = [
		{
			name: 'Create work with 2 creators',
			tags: [],
			steps: [
				[steps.new_work.goToNewWorkPage],

				[steps.new_work.enterPrimaryWorkTitle, [
					'TEST WORK ' + randomId('mainWork'),
				]],

				[function() {
					var creatorCount = 2;
					var evenContribution = 100 / creatorCount;

					_.times(creatorCount, function(i) {
						steps.new_work.selectRandomCreator(i);
						steps.new_work.enterCreatorContribution(i, evenContribution);
					});
				}],

				[steps.new_work.selectRandomMusicalDistributionCategory],
				[steps.new_work.selectRandomTextMusicRelationship],
				[steps.new_work.selectRandomExcerptType],
				[steps.new_work.selectRandomVersionType],
				[steps.new_work.selectRandomLyricAdaptation],
				[steps.new_work.selectRandomMusicArrangement],

				[steps.new_work.selectRandomIntendedPurpose],
				[steps.new_work.enterRandomProductionTitle],
				[steps.new_work.selectRandomBltvr],
				[steps.new_work.selectRandomMusicLibrary],

				[steps.new_work.optToIncludeWorkOnWebsite, [false]],

				[steps.new_work.saveWork],
				[steps.new_work.validateSaveWorkRedirection],

				[steps.work.findCurrentlyOpenWorkId],
			]
		},
		{
			name: 'Validate created work data',
			tags: [],
			steps: [
				[steps.work.goToWorkPage],

				[steps.work.validatePrimaryWorkTitle, [
					'TEST WORK ' + randomId('mainWork'),
				]],

				[steps.work.validateMusicalDistributionCategory],
				[steps.work.validateTextMusicRelationship],
				[steps.work.validateExcerptType],
				[steps.work.validateVersionType],
				[steps.work.validateLyricAdaptation],
				[steps.work.validateMusicArrangement],

				[steps.work.validateIncludeWorkOnWebsite, [false]],

				[steps.work.goToScopeDelivery],
				[steps.work.validateSubjectCreatorNames, [2]],
				[steps.work.validateSubjectCreatorContributions, [2]],
			]
		},
	];

module.exports = {
	commonFeatureTags: ['sanity', 'works-sanity'],
	feature: feature,
	beforeFeature: beforeFeature
};
