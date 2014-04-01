var configer = ftf.configer,
    cli = configer.getParamsFromCli(),
    env = {
        URL_SSO: cli["URL_SSO"] || "http://sso.devportal-ci.dspdev.wmg.com",
        URL_DEVPORTAL: cli["URL_DEVPORTAL"] || "http://security-console.devportal-ci.dspdev.wmg.com/",
        ENV_TYPE: cli["ENV_TYPE"] || "ci"
    },
    config = {
        _default_: {
            client_id: "devportal",
            client_secret: "appclientsecret",
            user_name: "DSP_TestUser2",
            title: "Security-console",
            user_password: "W@rn3rTestU$3r"
        },
        _system_: {
            browser: (cli.browser in ["chrome", "firefox", "ie"] ? cli.browser : "chrome"),
            resolution: {
                width: 800,
                height: 600
            },
            reporting: cli.reporting in ["html", "xml"] ? cli.reporting : "none"
        },
        _env_: env,
        ci: {
            urls: {
                sso: "http://sso.devportal-ci.dspdev.wmg.com",
                security_console: "http://security-console.devportal-ci.dspdev.wmg.com/"
            }
        },
        qa: {
            urls: {
                sso: "http://sso.devportal-qa.dspdev.wmg.com",
                security_console: "http://security-console.devportal-qa.dspdev.wmg.com/"
            },
            user_name: "uaa_test_user01@wmgdsp.dev",
            user_password: "No!daIN@124"
        },
        localhost: {
             urls: {
                 sso: "http://sso.devportal-ci.dspdev.wmg.com",
                 security_console:  "http://localhost:9000"
             }
        },
        custom: {
            urls: {
                sso: env.URL_SSO,
                security_console: env.URL_DEVPORTAL
            }
        }
    };
    config = configer.process(config);
    
module.exports = config;
