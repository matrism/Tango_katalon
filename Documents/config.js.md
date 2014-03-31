##conf/config.js

###A. Create object for config:

####I. Initializing configer module of Framework

```js
var configer = ftf.configer,
```

####II. Processing Command Line arguments

```js
    cli = configer.getParamsFromCli(),
```

####III. Creating Object with Environment Variables

```js
    env = {
        URL_SSO: cli["URL_SSO"] || "http://sso.devportal-qa.dspdev.wmg.com",
        URL_DEVPORTAL: cli["URL_DEVPORTAL"] || "http://security-console.devportal-ci.dspdev.wmg.com/",
        ENV_TYPE: cli["ENV_TYPE"] || "ci"
    },
```

####IV. Starting Creating Config pre-object

```js
    config = {
```

####V. Default Values:

```js
        _default_: {
            client_id: "devportal",
            client_secret: "appclientsecret",
            user_name: "DSP_TestUser2",
            user_password: "W@rn3rTestU$3r",
        },
```

####VI. System values:

```js
        _system_: {
            browser: (cli.browser in ["chrome", "firefox", "ie"] ? cli.browser : "chrome"),
            resolution: {
                width: 800,
                height: 600
            },
            reporting: cli.reporting in ["html", "xml"] ? cli.reporting : "none"
        },
```

####VIII. Adding Object with Environment Variables to pre-config object

```js
        _env_: env,
```

####IX. Setting up different environment set ups for executing. If variables from environment set up are in conflicts with variables from `_default_`, variables from `_default_` are overriden by variables from environment set up.

```js
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
        }
    };
```

####X. Compiling config object and exporting it.

```js
config = configer.process(config);
module.exports = config;
```

###B. Creating config: 
(See conf/protractor-conf.js.md file)

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
    _system_: {
        browser: 'chrome',
        resolution:  {
            width: 800,
            height: 600
        },
        reporting: 'xml'
    },
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
