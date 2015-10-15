'use strict';
var configer = global.ftf.configer,
    cli = configer.getParamsFromCli(),
    tags = (function() {
        var tags = (cli.tags || '').toString().split(',');
        var negatedTags = (cli['@tags'] || '').toString().split(',');

        [tags, negatedTags].forEach(function(tags) {
            if(tags.length === 1 && tags[0] === '') {
                tags.length = 0;
            }
        });

        tags.negated = negatedTags;

        return tags;
    })(),
    env = {
        ENV_TYPE: cli.env || configer.getEnvVarByKey('ENV_TYPE') || 'qa'
    },
    defaultUserName = 'TangoTest1',
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
                width: 1600,
                height: 900
            },
            reporting: cli.reporting in ['html', 'xml', 'all'] ? cli.reporting : 'html',
            singleReport: cli['single-report'],
            noUnicode: cli['no-unicode'],
            path_to_features: __dirname + '/../features/',
            path_to_steps: __dirname + '/../steps/',
            path_to_pages: __dirname + '/../pages/',
            env_name: env.ENV_TYPE,
            wait_timeout: cli.timeout || 60000,
            show_skipped_tests: false,
            screenshot_only_on_fail: false,
            tags: tags,
            legacyOverrides: {
                legacyPerson: {
                    newPerson: 'newPersonProduction',
                    person: 'personProduction',
                },
            },
        },
        _env_: env,
        localhost: {
            urls: {
                sso: configer.getEnvVarByKey('URL_SSO'),
                app_url: 'http://localhost:3000',
                service_url: 'http://localhost:3000'
            },
            user_name: configer.getEnvVarByKey('TEST_USERNAME') || defaultUserName,
            user_password: configer.getEnvVarByKey('TEST_PASSWORD') || defaultPassword
        },
        qa: {
            urls: {
                sso: configer.getEnvVarByKey('URL_SSO'),
                app_url: 'http://tango.tango-qa-aws.dspdev.wmg.com',
                service_url: 'http://tango.tango-qa-aws.dspdev.wmg.com'
            },
            user_name: configer.getEnvVarByKey('TEST_USERNAME') || defaultUserName,
            user_password: configer.getEnvVarByKey('TEST_PASSWORD') || defaultPassword
        },
        staging: {
            urls: {
                sso: configer.getEnvVarByKey('URL_SSO'),
                app_url: 'http://musicpublishing.staging.dsp.wmg.com',
                service_url: 'http://musicpublishing.staging.dsp.wmg.com'
            },
            user_name: configer.getEnvVarByKey('TEST_USERNAME') || defaultUserName,
            user_password: configer.getEnvVarByKey('TEST_PASSWORD') || defaultPassword
        },
        custom: {
            urls: {
                sso: cli['sso-url'] || configer.getEnvVarByKey('URL_SSO'),
                app_url: cli['app-url'],
                service_url: cli['service-url'] || cli['app-url']
            },
            user_name: configer.getEnvVarByKey('TEST_USERNAME') || defaultUserName,
            user_password: configer.getEnvVarByKey('TEST_PASSWORD') || defaultPassword
        }
    };

    config._system_.noReport = cli['no-report'];

config = configer.process(config);

module.exports = config;
