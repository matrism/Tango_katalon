###Config

I. Create object for config:
```js
    config = {
        /**
         * This part will be always in config
         */
        _default_: {
            client_id: "devportal",
            client_secret: "appclientsecret",
            user_name: "DSP_TestUser2",
            user_password: "W@rn3rTestU$3r"    
        },
        /**
         * Specify environment variables:
         * ENV_TYPE - type of environment to use. It must be one of custom configs
         */
        _env_: {
//          ENV_TYPE: "custom",
//          URL_SSO: "http://sso.devportal-qa.dspdev.wmg.com",
//          URL_DEVPORTAL: "http://security-console.devportal-ci.dspdev.wmg.com/"
            ENV_TYPE: "qa"
        },
        
        /**
         * Custom configs: "qa" and "custom". 
         * If you want to use "qa" settings, specify `_env_ -> ENV_TYPE` as "qa"
         * If you want to use "custom" settings, specify `_env_ -> ENV_TYPE` as "custom"
         *      And don't forget to specify 
         */
        qa: {
            urls: {
                sso: "http://sso.devportal-qa.dspdev.wmg.com",
                security_console: "http://security-console.devportal-ci.dspdev.wmg.com/"
            },
            user_name: "uaa_test_user01@wmgdsp.dev",
            user_password: "No!daIN@124"
        },
        custom: {
            urls: {
                sso: configer.env.URL_SSO,
                security_console: config.env.URL_DEVPORTAL
            }
        }
    };
```

II. Creating config:

```js
config = ftf.configer.process(config);
```
You should pass your config object to configer factory. As a result you should get object with next structure (if using the example from this document):

```js
{ 
    client_id: 'devportal',
    client_secret: 'appclientsecret',
    user_name: 'uaa_test_user01@wmgdsp.dev',
    user_password: 'No!daIN@124',
    urls: { 
        sso: 'http://sso.devportal-qa.dspdev.wmg.com',
        security_console: 'http://security-console.devportal-ci.dspdev.wmg.com/' 
    },
    _cli: {
        //cli parameters should be here
    },
    _env: {
        //environment variables should be here
    }
}
```
