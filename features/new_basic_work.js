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
		var validationData;
		//describe (
			//"Create basic work", function() {
				//validationData = steps.new_work.newWork();
			//}
		//);
		describe (
			"Validate created work data", function() {
				validationData = {
					workId: "WW 015006029 00",
					primaryWorkTitle: "TEST WORK 1426781308581479",
					creators: [
						{
							name: "PAPACACA",
							contribution: 100
						}
					],
					includeOnWebsite: true
				};
				steps.works.validateWork(validationData);
			}
		);
	}
}];
module.exports = {
    commonFeatureTags: [],
    feature: feature,
    beforeFeature: beforeFeature
};
