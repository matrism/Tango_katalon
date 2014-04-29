##start.sh description

###What is start.sh

start.sh file provides shortcut for protractor tests run.
Instead of typing `protractor conf/protractor-conf.js --verbose` you should just type `start.sh` in command line. It will send all CLI arguments to protractor.
`--verbose` argument makes reports in CLI to have next look:

```Shell
Using the selenium server at http://localhost:4444/wd/hub

Provisioning module

    Navigate to page
        Login and open page

     First step

        Select user in typeahead
            typeahead input should be present
            set value for typeahead
            list of suggestions should be present
            select Sam, Alexander from suggestions list
            user should see item Sam, Alexander in typeahead step 1
            set value for typeahead
            list of suggestions should be present
            select Coleman, Alexis from suggestions list
            user should see item Coleman, Alexis in typeahead step 1
            set value for typeahead
            list of suggestions should be present
            select Kargher, Alex from suggestions list
            user should see item Kargher, Alex in typeahead step 1
            set value for typeahead
            list of suggestions should be present
            select Tenta, Alex from suggestions list
            user should see item Tenta, Alex in typeahead step 1
            set value for typeahead
            list of suggestions should be present
            select Alexis, Keisha from suggestions list
            user should see item Alexis, Keisha in typeahead step 1
            user clicks on tag option Kargher, Alex in step 1

Failures:

  1) Provisioning module Navigate to page Login and open page
   Message:
     Expected 'Login | Warner Music Group' to equal 'Security-console'.
     ...
```

###CLI arguments to `start.sh`/`protractor`

####Default protractor CLI arguments can be found in command `protractor --help`:
```Shell
Usage: protractor [options] [configFile]
The [options] object will override values from the config file.
See the reference config for a full list of options.

Options:
  --help                                             Print Protractor help menu
  --version                                          Print Protractor version
  --browser, --capabilities.browserName              Browsername, e.g. chrome or  firefox
  --seleniumAddress                                  A running seleium address to use
  --seleniumServerJar                                Location of the standalone selenium jar file
  --seleniumPort                                     Optional port for the selenium standalone server
  --baseUrl                                          URL to prepend to all relative paths
  --rootElement                                      Element housing ng-app, if not html or body
  --specs                                            Comma-separated list of files to test
  --exclude                                          Comma-separated list of files to exclude
  --verbose, --jasmineNodeOpts.isVerbose             Print full spec names
  --stackTrace, --jasmineNodeOpts.includeStackTrace  Print stack trace on error 
  --params                                           Param object to be passed to the tests
  --framework                                        Test framework to use. jasmine or mocha.
```

####Additional (our) CLI arguments:

* `-u` - runs `npm update` and `bower update` before tests executing
* `-s` - starts selenium standalone server before tests executing
* `-p %prof_name%` - runs pre-configured profile file from profile folder: `profile/%prof_name%.yml`.

* `ENV_TYPE` - select environment setup, specified in `conf/config.js`

```Shell
--ENV_TYPE %env_type%
or
--ENV_TYPE=%env_type%
```

* `browser` - browser to use in tests. Can be one of: "firefox", "chrome" (can be used if chrome driver is installed properly) and "ie" (can be used if ie driver is installed properly). Default: `chrome`

```Shell
--browser ie
or
--browser=ie
```

* `resolution` - resolution of browser window to use in format `%www%x%hhh%`m where %www% - int width, %hhh% - int height. Default: `800x600`

```Shell
--resolution 1280x900
or
--resolution=1450x444
```

* `reporting` - type of reporting. Can be one of `xml`, `html`, `all` and `none`. Default: `none`

```Shell
--reporting xml
or
--reporting=html
```

* `tags` - one tag or comma separated list of tags which should be ran. Default - empty. If no tags specified, all test should run.

```Shell
--tags smoke
or
--tags=wip,bugfix
```

* `@tags` - one or comma separated list of tags which should be excluded from tests. Default: none.

```Shell
--@tags smoke,wip
or
--@tags=bugfix
```


You can specify your own custom cli arguments which you want to use. 
Rules:

1. Keys always have leading `--`, e.g. `--reporting` or `--browser`
2. If there are two keys one after another, this means first cay automatically equals `true` (bool).
E.g.: `start.sh --verbose --browser ie` will give the object `{verbose: true, browser: "ie"}`;
3. If last argument is key, it becomes `true` (bool).
E.g.: `start.sh --browser ie --verbose` will give the object `{browser: "ie", verbose: true}`
4. If value is passed with commas, it becomes an array splitted by commas.
E.g.: `start.sh --tags aa,bb,cc` will give the object `{tags: ["aa","bb","cc"]}`
5. All other variants of values are always strings. 
E.g.: `start.sh --browser ie --other_key 123` will give the object `{browser: "ie", other_key: "123"}`

All CLI arguments can be accessed in object `_tf_config._cli`.
