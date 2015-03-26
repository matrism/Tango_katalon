"use strict";
var configer = ftf.configer,
    cli = configer.getParamsFromCli(),
    env = {
        ENV_TYPE: cli["ENV_TYPE"] || configer.getEnvVarByKey("ENV_TYPE") || "localhost"
    },
    config = {
        _default_:  {
            client_id: "devportal",
            client_secret: "appclientsecret"
        },
        _system_: {
            browser: (cli.browser in ["chrome", "firefox", "ie"] ? cli.browser : "chrome"),
            resolution: {
                width: 1024,
                height: 768
            },
            reporting: cli.reporting in ["html", "xml", "all"] ? cli.reporting : "none",
            path_to_features: "./features/",
            path_to_steps: "../steps/",
            path_to_pages: "../pages/",
            wait_timeout: 15000,
            show_skipped_tests: false,
            screenshot_only_on_fail: false
        },
        _env_: env,
        localhost: {
            urls: {
                sso: configer.getEnvVarByKey("URL_SSO"),
                app_url:  "http://tango.tango-qa-aws.dspdev.wmg.com",
                service_url: "http://tango.tango-qa-aws.dspdev.wmg.com"
            },
            user_name: configer.getEnvVarByKey("TEST_USERNAME"),
            user_password: configer.getEnvVarByKey("TEST_PASSWORD")
        },
        custom: {
            urls: {
                sso: cli["URL_SSO"],
                app_url:  cli["URL"],
                service_url: cli["URL_SERVICE"]
            },
            user_name: cli["TEST_USERNAME"],
            user_password: cli["TEST_PASSWORD"]
        }
    };
config = configer.process(config);

module.exports = config;
