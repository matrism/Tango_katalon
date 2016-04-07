'use strict';
var configer = global.ftf.configer,
    cli = configer.getParamsFromCli(),
    tags = (function () {
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
    env = {
        ENV_TYPE: cli.env || configer.getEnvVarByKey('ENV_TYPE') || 'qa'
    };

var defaultUserName = 'TangoTest1',
    defaultPassword = 'P@ssw0rd78',
    config = {
        _default_: {
            client_id: 'devportal',
            client_secret: 'appclientsecret'
        },
        _system_: {
            browser: (cli.browser in ['chrome', 'firefox', 'ie'] ? cli.browser : 'chrome'),
            directConnect: !cli.selenium,
            resolution: {
                width: 1400,
                height: 1024
            },
            //protractor Zapi related
            projectId: cli.projectId,
            tcn: cli.tcn,
            dealId: cli.dealId,
            flow: cli.flow,
            reporting: cli.reporting in ['html', 'xml', 'all'] ? cli.reporting : 'all',
            singleReport: cli['single-report'],
            noUnicode: cli['no-unicode'],
            path_to_features: [],
            path_to_steps: [],
            path_to_pages: [],
            wait_timeout: cli.timeout || 60000,
            show_skipped_tests: false,
            screenshot_only_on_fail: false,
            buildNumber: cli.build,
            branch: cli.branch,
            commitHash: cli.commit,
            tags: tags,
            bugLabel: cli['bug-label'],
            legacyOverrides: {
                stagingPerson: {
                    newPerson: 'newPersonStaging',
                    person: 'personStaging',
                },
                stagingOrganisation: {
                    newOrganisation: 'newOrganisationStaging',
                    organisation: 'organisationStaging',
                },
            },
            dontSkipBroken: cli['dont-skip-broken'],
            failFast: cli['fail-fast'],
            noUpload: cli['no-upload'],
            orphanOnError: cli['orphan-on-error'],
            demoReporter: cli['demo-reporter'],
            stepByStep: cli['step-by-step'],
            fingerprints: cli.fingerprints
        },
        _env_: env,
        qa: {
            urls: {
                sso: configer.getEnvVarByKey('URL_SSO'),
                app_url: (
                    cli['app-url'] || 'http://tango.tango.qa.wmg.com'
                ),
                service_url: (
                    cli['service-url'] || cli['app-url'] ||
                    'http://tango.tango.qa.wmg.com'
                ),
                cr_url: (
                    cli['cr-url'] || 'http://tancrsrv.tango.qa.wmg.com:80'
                ),
                royalties_url: (
                    cli['royalties-url'] || 'http://tanroysrv.tango.qa.wmg.com:80'
                )
            },
            user_name: configer.getEnvVarByKey('TEST_USERNAME') || defaultUserName,
            user_password: configer.getEnvVarByKey('TEST_PASSWORD') || defaultPassword
        },
        staging: {
            urls: {
                sso: configer.getEnvVarByKey('URL_SSO'),
                app_url: cli['app-url'] || 'http://musicpublishing.staging.wmg.com',
                service_url: (
                    cli['service-url'] || cli['app-url'] ||
                    'http://musicpublishing.staging.wmg.com'
                ),
                cr_url: (
                    cli['cr-url'] ||
                    'http://tancrsrv.internal.staging.wmg.com:80'
                )
            },
            user_name: configer.getEnvVarByKey('TEST_USERNAME') || defaultUserName,
            user_password: configer.getEnvVarByKey('TEST_PASSWORD') || defaultPassword
        },
        prod: {
            urls: {
                sso: cli['sso-url'] || configer.getEnvVarByKey('URL_SSO'),
                app_url: cli['app-url'],
                service_url: cli['service-url'] || cli['app-url'],
                cr_url: cli['cr-url']
            },
            user_name: configer.getEnvVarByKey('TEST_USERNAME') || defaultUserName,
            user_password: configer.getEnvVarByKey('TEST_PASSWORD') || defaultPassword
        }
    };

config._system_.env = {
    name: env.ENV_TYPE,
    url: config[env.ENV_TYPE].urls.app_url,
    cr_url: config[env.ENV_TYPE].urls.cr_url,
    royalties_url: config[env.ENV_TYPE].urls.royalties_url
};

config._system_.noReport = cli['no-report'];

config = configer.process(config);

module.exports = config;
