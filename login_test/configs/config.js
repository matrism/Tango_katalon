var configer = ftf.configer,
    cli = configer.getParamsFromCli(),
    env = {
        URL_SSO: cli["URL_SSO"] || "http://sso.devportal-ci.dspdev.wmg.com",
        URL_DEVPORTAL: cli["URL_DEVPORTAL"] || "http://devportal.devportal-ci.dspdev.wmg.com/",
        ENV_TYPE: cli["ENV_TYPE"] || configer.getEnvVarByKey("ENV_TYPE") || "ci"
    },
    config = {
        _default_: {
            client_id: "devportal",
            client_secret: "appclientsecret",
            user_name: configer.getEnvVarByKey("USER_NAME") || "DSP_TestUser2",
            user_password: configer.getEnvVarByKey("USER_PASSWORD") || "W@rn3rTestU$3r"
        },
        _system_: {
            browser: (cli.browser in ["chrome", "firefox", "ie"] ? cli.browser : "chrome"),
            resolution: {
                width: 1360,
                height: 768
            },
            reporting: cli.reporting in ["html", "xml", "all"] ? cli.reporting : "none",
            path_to_features: "./features/",
            path_to_steps: "../steps/",
            path_to_pages: "../pages/",
            wait_timeout: 5000
        },
        _env_: env,
        ci: {
            urls: {
                sso: "http://sso.devportal-ci.dspdev.wmg.com",
                app_url: "http://devportal.devportal-ci.dspdev.wmg.com/",
                devportal_service: "http://devportalsvc.devportal-ci.dspdev.wmg.com",
                bootstrap_components: "http://bootstrap-components.devportal-ci.dspdev.wmg.com/",
                webconsole_service: "http://webconsolesvc.devportal-ci.dspdev.wmg.com"
            },
            path_to_features: ["./features/"]
        },
        qa: {
            urls: {
                sso: "http://sso.devportal-qa.dspdev.wmg.com",
                app_url: "http://devportal.devportal-qa.dspdev.wmg.com/"
            },
            user_name: "uaa_test_user01@wmgdsp.dev",
            user_password: "No!daIN@124"
        },
        cloudconsole: {
            urls: {
                sso: "http://uaa.cloudconsole.io/login.do",
                app_url:  "http://webconsole.cloudconsole.io",
                webconsole:  "http://webconsole.cloudconsole.io",
                webconsole_service: "http://webconsole.cloudconsole.io"
            },
            user_name: configer.getEnvVarByKey("USER_NAME"),
            user_password: configer.getEnvVarByKey("USER_PASSWORD")
        },
        localhost: {
             urls: {
                 sso: "http://sso.devportal-ci.dspdev.wmg.com",
                 app_url:  "http://localhost:9000"
             }
        },
        custom: {
            urls: {
                sso: env.URL_SSO,
                app_url: env.URL_DEVPORTAL
            }
        }
    };
    config = configer.process(config);
    
module.exports = config;
