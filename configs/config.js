'use strict';
let jobRunnerConfig = require('./jobRunnerConfig'),

    _ = require('lodash'),
    configer = global.ftf.configer,
    userConfig = require('config-file').home('.tatconfig') || {},
    userCli = _.clone(userConfig.cli),
    cli = _.defaultsDeep(userCli, configer.getParamsFromCli()),
    tags = (function () {
        if(cli.tags === true) {
            cli.tags = '';
        }

        var tags = (cli.tags || '').toString().split(',');
        var negatedTags = (cli['@tags'] || '').toString().split(',');

        [tags, negatedTags].forEach(function (tags) {
            if (tags.length === 1 && tags[0] === '') {
                tags.length = 0;
            }
        });

        tags.negated = negatedTags;

        return tags;
    })(),

    env = cli.env || configer.getEnvVarByKey('ENV_TYPE');

if(!env || env === true) {
    env = 'refactor';
}

if(cli['app-url'] === true) {
    delete cli['app-url'];
}

global.userConfig = userConfig;
if (userConfig.cli) {
    console.log(`User configuration params: ${Object.keys(userConfig.cli)}`);
}

var defaultUserName = 'TangoTest1',
    defaultPassword = 'P@ssw0rd78',
 //var defaultUserName = 'AfinaAshley',
    //defaultPassword = 'M@hadi3970!@',
    user = cli['app-user'] || configer.getEnvVarByKey('TEST_USERNAME') || defaultUserName,
    password = cli['app-password'] || configer.getEnvVarByKey('TEST_PASSWORD') || defaultPassword,
    config = {
        _default_: {
            client_id: 'devportal',
            client_secret: 'appclientsecret'
        },
        _system_: {
            browser: (cli.browser in ['chrome', 'firefox', 'ie'] ? cli.browser : 'chrome'),
            directConnect: !cli.selenium,
            seleniumAddress: cli['use-selenium-server'] ? 'http://selenium-hub.shared.wmg.com:4444/wd/hub' : '',
            resolution: {
                width: 1400,
                height: 1024
            },
            streamId: cli['stream'] || 1,
            //protractor Zapi related
            projectId: cli.projectId,
            tcn: cli.tcn,
            dealId: cli['deal-id'],
            flow: cli.flow,
            reporting: cli.reporting in ['html', 'xml', 'all'] ? cli.reporting : 'all',
            singleReport: cli['single-report'],
            noUnicode: cli['no-unicode'],
            htmlReportPath: jobRunnerConfig.htmlReportPath,
            path_to_features: [],
            path_to_steps: [],
            path_to_pages: [],
            interactiveMode: cli.interactive || cli.i,
            wait_timeout: cli.timeout || 60000,
            show_skipped_tests: false,
            screenshot_only_on_fail: false,
            buildNumber: cli.build,
            branch: cli.branch,
            commitHash: cli.commit,
            feat: cli.feat,
            tags: tags,
            noReport: cli['no-report'],
            bugLabel: cli['bug-label'],
            dontSkipBroken: cli['dont-skip-broken'],
            failFast: cli['fail-fast'],
            noUpload: cli['no-upload'],
            orphanOnError: cli['orphan-on-error'],
            demoReporter: cli['demo-reporter'],
            cycle: cli['cycle'],
            stepByStep: cli['step-by-step'],
            fingerprints: cli.fingerprints,
            saveDiskSpace: cli['save-disk-space'],
            persistProfile: cli['persist-profile'],
            simpleReporter: cli['simple-reporter']
        },
        _env_: { ENV_TYPE: env },
        refactor:{
            urls:{
                sso: configer.getEnvVarByKey('URL_SSO'),
                app_url: (
                    //cli['app-url'] || 'http://tango.tango.qa.wmg.com/'
                    cli['app-url'] || 'http://tango.tango-refactor.tango.dev.wmg.com/'
                ),
                service_url: (
                    cli['service-url'] || cli['app-url'] ||
                    'http://tango.tango-refactor.tango.dev.wmg.com/'
                    //'http://tango.tango.qa.wmg.com/'
                )

            },

            user_name: user,
            user_password: password

        },
        qa: {
            urls: {
                sso: configer.getEnvVarByKey('URL_SSO'),
                app_url: (
                    cli['app-url'] || 'http://tango.tango.qa.wmg.com/'
                    //cli['app-url'] || 'http://tango.tango-refactor.tango.dev.wmg.com/'
                ),
                service_url: (
                    cli['service-url'] || cli['app-url'] ||
                    //'http://tango.tango-refactor.tango.dev.wmg.com/'
                    'http://tango.tango.qa.wmg.com/'
                ),
                cr_url: (
                    cli['cr-url'] || 'http://tancrsrv.tango.qa.wmg.com:80'
                ),
                royalties_url: (
                    cli['royalties-url'] || 'http://tanroysrv.tango.qa.wmg.com:80'
                )
            },
            user_name: user,
            user_password: password
        },
        staging: {
            urls: {
                sso: configer.getEnvVarByKey('URL_SSO'),
                app_url: cli['app-url'] || 'http://tango.internal.staging.wmg.com',
                cr_url: (
                    cli['cr-url'] ||
                    'http://tancrsrv.internal.staging.wmg.com:80'
                )
            },
            user_name: user,
            user_password: password
        },
        prod: {
            urls: {
                sso: cli['sso-url'] || configer.getEnvVarByKey('URL_SSO'),
                app_url: cli['app-url'],
                cr_url: cli['cr-url']
            },
            user_name: user,
            user_password: password
        }
    };

if(!config[env]) {
    throw new Error('Unknown environment: ' + env);
}

config._system_.env = {
    name: env,
    url: config[env].urls.app_url,
    cr_url: config[env].urls.cr_url,
    royalties_url: config[env].urls.royalties_url
};

config = configer.process(config);

module.exports = config;
