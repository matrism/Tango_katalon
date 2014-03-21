var env = jasmine.getEnv(),
    _ = require('underscore'),
    config = {
        _default_: {
            client_id: "devportal",
            client_secret: "appclientsecret",
            user_name: "DSP_TestUser2",
            user_password: "W@rn3rTestU$3r"    
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
                sso: env.URL_SSO,
                security_console: env.URL_DEVPORTAL
            }
        },
        prepareConf: function(name) {
            return _.extend(config._default_, config[name]);
        }
    };
    console.log(env);
    
module.exports = config;
