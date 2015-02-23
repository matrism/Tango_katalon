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
            show_skipped_tests: false
        },
        _env_: env,
        localhost: {
            urls: {
                sso: configer.getEnvVarByKey("URL_SSO"),
                app_url:  "http://localhost:9000",
                service_url: "http://localhost:9000"
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
