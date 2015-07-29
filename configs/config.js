'use strict';
var configer = global.ftf.configer,
    cli = configer.getParamsFromCli(),
    env = {
        ENV_TYPE: cli.env || configer.getEnvVarByKey('ENV_TYPE') || 'qa'
    },
    config = {
        _default_: {
            client_id: 'devportal',
            client_secret: 'appclientsecret'
        },
        _system_: {
            browser: (cli.browser in ['chrome', 'firefox', 'ie'] ? cli.browser : 'chrome'),
            directConnect: !cli.selenium,
            resolution: {
                width: 1280,
                height: 720
            },
            reporting: cli.reporting in ['html', 'xml', 'all'] ? cli.reporting : 'html',
            singleReport: cli['single-report'],
            path_to_features: __dirname + '/../features/',
            path_to_steps: __dirname + '/../steps/',
            path_to_pages: __dirname + '/../pages/',
            wait_timeout: 15000,
            show_skipped_tests: false,
            screenshot_only_on_fail: false
        },
        _env_: env,
        localhost: {
            urls: {
                sso: configer.getEnvVarByKey('URL_SSO'),
                app_url: 'http://localhost:3000',
                service_url: 'http://localhost:3000'
            },
            user_name: configer.getEnvVarByKey('TEST_USERNAME') || 'TangoTest1',
            user_password: configer.getEnvVarByKey('TEST_PASSWORD') || 'P@ssw0rd78'
        },
        qa: {
            urls: {
                sso: configer.getEnvVarByKey('URL_SSO'),
                app_url: 'http://tango.tango-qa-aws.dspdev.wmg.com',
                service_url: 'http://tango.tango-qa-aws.dspdev.wmg.com'
            },
            user_name: configer.getEnvVarByKey('TEST_USERNAME') || 'TangoTest1',
            user_password: configer.getEnvVarByKey('TEST_PASSWORD') || 'P@ssw0rd78'
        },
        staging: {
            urls: {
                sso: configer.getEnvVarByKey('URL_SSO'),
                app_url: 'http://musicpublishing.staging.dsp.wmg.com',
                service_url: 'http://musicpublishing.staging.dsp.wmg.com'
            },
            user_name: configer.getEnvVarByKey('TEST_USERNAME') || 'TangoTest1',
            user_password: configer.getEnvVarByKey('TEST_PASSWORD') || 'P@ssw0rd78'
        },
        custom: {
            urls: {
                sso: cli.URL_SSO,
                app_url: cli.URL,
                service_url: cli.URL_SERVICE
            },
            user_name: cli.TEST_USERNAME,
            user_password: cli.TEST_PASSWORD
        }
    };

    config._system_.noReport = cli['no-report'];

config = configer.process(config);

module.exports = config;
