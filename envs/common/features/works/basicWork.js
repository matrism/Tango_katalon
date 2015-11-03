'use strict';

var workData = {
    workId: "WW 015006249 00",
    primaryWorkTitle: "TEST WORK TITLE 142792447241860",
    alternateWorkTitles: [
		"TEST ALTERNATE WORK TITLE 1427924474205725",
		"TEST ALTERNATE WORK TITLE 1427924476582667"
    ],
    creators: [
		{
		    name: "FAUZE",
		    contribution: 50
		},
		{
		    name: "WANDO",
		    contribution: 50
		}
    ],
    musicalDistributionCategory: "Jazz",
    textMusicRelationship: "Music and Text",
    excerptType: "Movement",
    versionType: "Original Work",
    intendedPurpose: "Theatre",
    productionTitle: "TEST PRODUCTION TITLE 1429744413589291",
    includeOnWebsite: false,
};

exports.beforeFeature = [
	[steps.login.itLogin]
];

module.commonFeatureTags = ['works', 'broken', 'smoke'];

exports.feature = [
    {
        name: "New basic work",
        tags: ['create'],
        steps: [
            [steps.newWork.createBasicWork, [workData]],
            [steps.work.validateWork, [workData]]
        ]
    },
    {
        name: "Edit basic work",
        tags: ['edit'],
        steps: [
            [steps.work.editBasicWork, [workData]],
            [steps.work.validateWork, [workData]],
        ]
    }
];
