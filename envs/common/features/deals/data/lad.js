exports.lad = {
    publisherOverride: [
        'India',
        'Algeria',
        'Albania',
        'Brazil',
        'Canada',
        'Croatia',
        'China',
        'France',
        'Indonesia',
        'Japan',
        'Moldova',
        'Romania',
        'Hungary',
        'Greece',
        'Panama'
    ],
    societyAgreement: {
        rightPanel: [
            'bmi',
            'ascap',
            'mcps',
            'socan',
            'sacem',
            'akm',
            'cmrra',
            'zaiks',
            'bum/ste',
            'stim'
        ],
        leftPanel: [
            'test',
            'shilpa',
            'creator',
            'adrian',
            'deni',
            'alex'
        ],
        leftPanelRow: [
            'bmi',
            'ascap',
            'mcps',
            'socan',
            'sacem',
            'akm',
            'sokoj',
            'zaiks',
            'bum/ste',
            'stim',
            'stemra',
            'cmrra',
            'fox',
            'osa',
            'musicaut',
            'koda',
            'komca',
            'abramus',
            'acum',
            'aepi',
            'apra',
            'cash',
            'compass',
            'gema',
            'msg',
            'sabam',
            'sazas',
            'sayco',
            'sesac',
            'siae'
        ]
    },
    endRules: [
        {
            endRule: 'Repayment Date',
            ruleParams: ['Balance Repaid', 10, false, '=', 'MDRC Complete']
        },
        {
            endRule: 'MDRC Complete Date',
            ruleParams: ['MDRC Complete', 20, undefined, '<', 'Pre-Defined Date', '2016-03-03'],
        },
        {
            endRule: 'Pre-Defined Date',
            endRuleParam: '2016-03-03',
            ruleParams: ['Current date', undefined, undefined, '=', 'Pre-Defined Date', '2016-03-03'],
        },
        {
            endRule: 'Recouped Date',
            ruleParams: ['Final Contract Period', undefined, undefined, '=', 'TRUE'],
        },
        {
            endRule: 'Target End Date',
            ruleParams: ['Recouped', 50, true, '< or =', 'MDRC Complete'],
        }

    ],
    creators: [
        'BOBEK, BEDRICH',
        'COOPER, ROBERT WILLIAM BOB',
        'SANDERS, BOBBI',
        'FULTS, BOB',
        'BOTH, BOB',
        'DYLAN, BOB'
    ]
};
