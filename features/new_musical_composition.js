"use strict";
var pages_path = _tf_config._system_.path_to_pages;
var steps_path = _tf_config._system_.path_to_steps;

require(steps_path + "login");
require(steps_path + "new_work");
    
var beforeFeature = [
	[steps.login.itLogin]
];

var feature = [{
	name: "Create a Musical Composition",
	tags: [],
	steps: function() {
		var work = steps.new_work.create ({
			primaryTitle: pages.new_work.randomTitle(),
			alternateTitles: [pages.new_work.randomTitle()],
			creators: [
				{
					searchTerms: pages.new_work.randomCreator(),
					contributionPercentage: 40
				},
				{
					searchTerms: pages.new_work.randomCreator(),
					contributionPercentage: 60
				}
			],
			includeWorkOnWebsite: false
		});
		steps.works.validate(work);
	}
}];

module.exports = {
    commonFeatureTags: [],
    feature: feature,
    beforeFeature: beforeFeature
};
