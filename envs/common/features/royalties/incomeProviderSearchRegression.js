'use strict';

exports.id = '34a1bb82-4988-4839-ad61-47980393af89';

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = [
    'incomeProviderSearchRegression',
    'royaltyRates',
    'incomeProvider',
    'regression'
];

exports.feature = [
    {
        name: 'Check positive case of income provider validation rules',
        tags: [],
        steps: function () {
            steps.incomeProvider.createValidRoyaltySetPair(
                [
                    ['Income_Provider_1', 'Date_1 ', 'Income_Provider_2', 'Date_2    '],
                    ['FINLAND SYNCH INCOME,ASCAP        ', '2017-01-01', '                 ', '2017-01-01'],
                    ['FINLAND SYNCH INCOME              ', '           ', '                 ', '          '],
                    ['                 ', '           ', '                 ', '          '],
                    ['                 ', '2017-01-01 ', '                 ', '          '],
                    ['                 ', '2017-01-01 ', '                 ', '2017-01-03'],
                    ['FINLAND SYNCH INCOME              ', '2017-01-01 ', 'FINLAND SYNCH INCOME              ', '2017-01-03']
                ],
                'Check that income provider pair - Provider1: %Income_Provider_1% - Date1: %Date_1% and Provider2: %Income_Provider_2% - Date2: %Date_2%  is valid'
            );
        }
    },
    {
        name: 'Check negative case of income provider validation rules',
        tags: [],
        steps: function () {
            steps.incomeProvider.createInvalidRoyaltySetPair(
                [
                    ['Income_Provider_1', 'Date_1 ', 'Income_Provider_2', 'Date_2    '],
                    ['FINLAND SYNCH INCOME,ASCAP        ', '2017-01-01', 'FINLAND SYNCH INCOME              ', '2017-01-01'],
                    ['FINLAND SYNCH INCOME              ', '2017-01-01', 'FINLAND SYNCH INCOME              ', '2017-01-01'],
                    ['                 ', '2017-01-01', '                 ', '2017-01-01']
                ],
                'Check that income provider pair - Provider1: %Income_Provider_1% - Date1: %Date_1% and Provider2: %Income_Provider_2% - Date2: %Date_2%  is invalid'
            );
        }
    },
    {
        name: 'I would like to check positive case of income provider validation rules',
        tags: [],
        steps: function () {
            steps.incomeProvider.editValidRoyaltySetPair(
                [
                    ['Income_Provider_1', 'Date_1 ', 'Income_Provider_2', 'Date_2    '],
                    ['FINLAND SYNCH INCOME              ', '           ', '                 ', '          '],
                    ['                 ', '           ', '                 ', '          '],
                    ['FINLAND SYNCH INCOME,ASCAP        ', '2017-01-01', '                 ', '2017-01-01'],
                    ['                 ', '2017-01-01 ', '                 ', '          '],
                    ['                 ', '2017-01-01 ', '                 ', '2017-01-03'],
                    ['FINLAND SYNCH INCOME              ', '2017-01-01 ', 'FINLAND SYNCH INCOME              ', '2017-01-03']
                ],
                'Check that income provider pair - Provider1: %Income_Provider_1% - Date1: %Date_1% and Provider2: %Income_Provider_2% - Date2: %Date_2%  is valid'
            );
        }
    },
    {
        name: 'I would like to check negative case of income provider validation rules upon editing a deal',
        tags: [],
        steps: function () {
            steps.incomeProvider.editInvalidRoyaltySetPair(
                [
                    ['Income_Provider_1', 'Date_1 ', 'Income_Provider_2', 'Date_2    '],
                    ['                 ', '2017-01-01', '                 ', '2017-01-01'],
                    ['FINLAND SYNCH INCOME,ASCAP        ', '2017-01-01', 'FINLAND SYNCH INCOME              ', '2017-01-01'],
                    ['FINLAND SYNCH INCOME              ', '2017-01-01', 'FINLAND SYNCH INCOME              ', '2017-01-01']
                ],
                'Check that income provider pair - Provider1: %Income_Provider_1% - Date1: %Date_1% and Provider2: %Income_Provider_2% - Date2: %Date_2%  is invalid'
            );
        }
    }
];
