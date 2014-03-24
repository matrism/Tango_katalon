var configer = ftf.configer,
    config = {
        _default_: {
            client_id: "devportal",
            client_secret: "appclientsecret",
            user_name: "DSP_TestUser2",
            user_password: "W@rn3rTestU$3r"    
        },
        _env_: {
//          ENV_TYPE: "custom",
//          URL_SSO: "http://sso.devportal-qa.dspdev.wmg.com",
//          URL_DEVPORTAL: "http://security-console.devportal-ci.dspdev.wmg.com/"
            ENV_TYPE: "qa"
        },
        ci: {
            urls: {
                sso: "http://sso.devportal-ci.dspdev.wmg.com",
                security_console: "http://security-console.devportal-ci.dspdev.wmg.com/"
            }
        },
        qa: {
            urls: {
                sso: "http://sso.devportal-qa.dspdev.wmg.com",
                security_console: "http://security-console.devportal-ci.dspdev.wmg.com/"
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
                sso: configer.env.URL_SSO,
                security_console: configer.env.URL_DEVPORTAL
            }
        }
    };
    
    config = configer.process(config);
    
module.exports = config;
