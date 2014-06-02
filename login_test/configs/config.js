var configer = ftf.configer,
    cli = configer.getParamsFromCli(),
    env = {
        ENV_TYPE: cli["ENV_TYPE"] || configer.getEnvVarByKey("ENV_TYPE") || "cloudconsole"
    },
    config = {
        _default_:  {
            client_id: "devportal",
            client_secret: "appclientsecret",
            path_to_features: "./features/",
            user_name: configer.getEnvVarByKey("CLOUDCONSOLE_USERNAME"),
            user_password: configer.getEnvVarByKey("CLOUDCONSOLE_PASSWORD")
        },
        _system_: {
            browser: (cli.browser in ["chrome", "firefox", "ie"] ? cli.browser : "chrome"),
            resolution: {
                width: 1024,
                height: 768
            },
            reporting: cli.reporting in ["html", "xml", "all"] ? cli.reporting : "none",
            path_to_steps: "../steps/",
            path_to_pages: "../pages/",
            wait_timeout: 15000
        },
        _env_: env,
        cloudconsole: {
            urls: {
                sso: configer.getEnvVarByKey("CLOUDCONSOLE_URL_SSO"), 
                app_url:  configer.getEnvVarByKey("CLOUDCONSOLE_URL"), 
                cloudconsole:  configer.getEnvVarByKey("CLOUDCONSOLE_URL"), 
                cloudconsole_service: configer.getEnvVarByKey("CLOUDCONSOLE_URL_SERVICE")
            },
            user_name: configer.getEnvVarByKey("CLOUDCONSOLE_USERNAME"),
            user_password: configer.getEnvVarByKey("CLOUDCONSOLE_PASSWORD")
        },
        custom: {
            urls: {
                sso: cli["URL_SSO"],
                app_url:  cli["URL_CLOUDCONSOLE"], 
                cloudconsole: cli["URL_CLOUDCONSOLE"],
                cloudconsole_service: cli["CLOUDCONSOLE_URL_SERVICE"]
            },
            user_name: cli["CLOUDCONSOLE_USERNAME"],
            user_password: cli["CLOUDCONSOLE_PASSWORD"]
        }
    };
    config = configer.process(config);
    
module.exports = config;
