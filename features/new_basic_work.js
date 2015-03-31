"use strict";
var pages_path = _tf_config._system_.path_to_pages;
var steps_path = _tf_config._system_.path_to_steps;

require(steps_path + "login");
require(steps_path + "new_work");
    
var beforeFeature = [
	[steps.login.itLogin]
];

var feature = [{
	name: "New basic work",
	tags: [],
	steps: function() {
		var primaryWorkTitle;
		var alternateWorkTitles;
		var creators;
		var includeOnWebsite;
		steps.new_work.goToNewWorkPage();
		describe (
			"Create basic work", function() {
				steps.new_work.validateDefaultPrimaryWorkLanguage();
				primaryWorkTitle = steps.new_work.enterRandomPrimaryWorkTitle();
				alternateWorkTitles = _.times (
					2, function(i) {
						steps.new_work.validateDefaultAlternateWorkTitleLanguage(i);
						return steps.new_work.enterRandomAlternateWorkTitle(i);
					}
				);
				creators = (function() {
					var howMany = 2;
					var creators = _.times (
						howMany, function(i) {
							var creator = {};
							steps.new_work.validateDefaultCreatorRole(i);
							creator.name = steps.new_work.selectRandomCreator(i);
							creator.contribution = 100 / howMany;
							steps.new_work.enterCreatorContribution(i, creator.contribution);
							return creator;
						}
					);
					steps.new_work.validateTotalContributionPercentage();
					return creators;
				})();
				steps.new_work.validateDefaultMusicalDistributionCategory();
				steps.new_work.validateDefaultTextMusicRelationship();
				steps.new_work.validateDefaultExcerptType();
				steps.new_work.validateDefaultVersionType();
				steps.new_work.validateDefaultIntendedPurpose();
				includeOnWebsite = (function() {
					var includeOnWebsite = _.sample([true, false]);
					steps.new_work.optToIncludeWorkOnWebsite(includeOnWebsite);
					return includeOnWebsite;
				})();
				steps.base.itClickOnElement("Save Work", pages.new_work.saveWorkButton());
				steps.base.itCheckIsRedirectToPage("created work page", "/metadata");
			}
		);
		describe (
			"Validate created work data", function() {
				steps.works.validatePrimaryWorkTitle(primaryWorkTitle);
				alternateWorkTitles.forEach (
					function(alternateWorkTitle) {
						steps.works.validateAlternateWorkTitle(alternateWorkTitle);
					}
				);
				steps.works.validateIncludeWorkOnWebsite(includeOnWebsite);
				steps.works.goToScopeDelivery();
				creators.forEach (
					function(creator, i) {
						describe (
							"Validate creator #" + (i + 1), function() {
								steps.works.validateCreatorName(creator.name);
								steps.works.validateCreatorContribution(creator.contribution);
							}
						);
					}
				);
			}
		);
	}
}];
module.exports = {
    commonFeatureTags: [],
    feature: feature,
    beforeFeature: beforeFeature
};
