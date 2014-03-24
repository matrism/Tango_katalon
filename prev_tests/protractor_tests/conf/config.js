var env = process.env,
    _ = require('underscore'),
    cli_args = process.argv.slice(3),
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
                sso: env.URL_SSO,
                security_console: env.URL_DEVPORTAL
            }
        },
        addParamsFromCli: function() {
            var arg, splited, waiting_next = false;
            
            config._cli_args_ = {};
            
            _.each(cli_args, function(arg) {
                if(arg.indexOf("=") >= 0) {
                    splited = arg.split("=");
                    config._cli_args_[splited[0].replace(/^[-=\s]*/mg, "")] = splited[1];
                } else {
                    if (waiting_next !== false) {
                        config._cli_args_[waiting_next] = arg;
                        waiting_next = false;
                    } else {
                        waiting_next = arg.replace(/^[-=\s]*/mg, "");
                    }
                }
            });
            
            return this;
        },
        setEnv: function() {
            for(var i in config._env_) {
                env[i] = config._env_[i];
            }
            return this;
        },
        prepareConf: function(name) {
            var res = _.extend(config._default_, config[name]);
            res._cli = config._cli_args_;
            res._env = env;
            return res;
        }
    };
    
    config.setEnv().addParamsFromCli();
    
module.exports = config;
