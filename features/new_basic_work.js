"use strict";
var pages_path = _tf_config._system_.path_to_pages;
var steps_path = _tf_config._system_.path_to_steps;

require(steps_path + "login");
require(steps_path + "new_work");
    
var beforeFeature = [
	[steps.login.itLogin]
];

var workData = {};

//workData = {
	//workId: "WW 015006249 00",
	//primaryWorkTitle: "TEST WORK TITLE 142792447241860",
	//alternateWorkTitles: [
		//"TEST ALTERNATE WORK TITLE 1427924474205725",
		//"TEST ALTERNATE WORK TITLE 1427924476582667"
	//],
	//creators: [
		//{
			//name: "FAUZE",
			//contribution: 50
		//},
		//{
			//name: "WANDO",
			//contribution: 50
		//}
	//],
	//includeOnWebsite: false
//};

var feature = [
	{
		name: "New basic work",
		tags: [],
		steps: [
			[steps.new_work.createBasicWork, [workData]],
			[steps.works.validateWork, [workData]],
		]
	},
	{
		name: "Edit basic work",
		tags: ["edit"],
		steps: [
			[steps.works.editBasicWork, [workData]],
			[steps.works.validateWork, [workData]]
		]
	}
];

module.exports = {
    commonFeatureTags: [],
    feature: feature,
    beforeFeature: beforeFeature
};
