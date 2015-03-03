###0. Update package.json file

Change version of protractor to `1.7.0`.

```js
/// ...
    "dependencies": { 
        "protractor"        : "1.7.0",
/// ...
```

###1. Update Gruntfile.js

To make html reporting work on parallel mode you should update your 
Gruntfile.js as the [example's one](https://github.com/wmgdsp/factory-testing-framework/blob/master/login_test/Gruntfile.js)

Add next lines:

```js
/// ...
/// 6. 
global._tf_config = require("./configs/config.js");
/// ...
/// 11.
    grunt.loadTasks("./vendor/factory-testing-framework/modules/clearDir");
/// ...
/// Make sure each your parallel thread has `"--reporting", "all"` arguments
    args: ["start.sh", "-p", profile, "--tags", "login", "--reporting", "all"]
/// ...
/// Make sure your `single_thread_only` thread has ` --reporting all` at the end
    command: "bash ./start.sh -p " + profile + " --tags single_thread_only --reporting all",
/// ...
/// Make sure  `check` task has the look as next:
    grunt.registerTask("check", function() {
        var callback = this.async();
        setTimeout(function() {
            try {
                SSReporter_instance.compileReport();
            } catch (e) {
                console.error(e.stack);
            }
            console.timeEnd(">>Total time");
            if (grunt.__failed) {
                grunt.fail.warn("Done with errors");
            }

            callback();
        }, 1000);
    });
/// ...
/// Make sure you added `clearReports` task to the list of your tasks
grunt.registerTask("tests", ["shell:chromeDriver", "clearReports", "parallel", "shell:singleTask", "check"]);
```

###2. `Show Skipped features`  behavior changed

From the version 0.0.3 it is switched off by default. To switch it on you should 
specify this option in `config.js` file:

```js
/// ...
    config = {
/// ...
        _system_: {
/// ...
/// Make sure this option is set to `true`:
            show_skipped_tests: true,
/// ...
        }
/// ...
    }
/// ...
```

###3. Added feature `Create screenshots only on fail`.

If you specify this option in config, html report will contain screenshots only 
for failed steps.

```js
/// ...
    config = {
/// ...
        _system_: {
/// ...
/// Make sure this option is set to `true`:
            screenshot_only_on_fail: true
/// ...
        }
/// ...
    }
/// ...
```

###4. Validation for REST services is now deleted.

You can find the update on this on [devportal](http://devportal.devportal-ci.dspdev.wmg.com/docs/reliability/js_testing_framework/rest_services)

The response from REST Client will be in the next format:

```js
result = {
    status: bool,
    statusCode: number,
    [, response: parsed_json || string]
}
```

###5. Switched to use Protractor 1.7.0

The base changes you can find in [changelog.md](changelog.md) file. 
The full latest [Protractor API](http://angular.github.io/protractor/#/api)

###6. Separate `pages.login.login()` into `pages.login.login();` and `pages.login.check();`

Previous version of `pages.login.login` method included also a verification test that user 
has been logged in. Now we splitted this in two methods.
So now, you should first call `login` method and then call `check` method to verify
if user is successfully logged in.

```js
    pages.login.login();
    pages.login.waitForAjax();
    pages.login.check();
```

As you can provide incorrect login details to the `login` method, you can now check
that user is not logged in with incorrect credentials:

```js
	pages.login.login('incorrect_user_name');
    pages.login.waitForAjax();
    pages.login.check(false);
```

###7. Add method in indexed property feature that returns its length

Before this feature was implemented, you should use extra locator to find out 
how many elements are there in indexed property if you don't know exactly the 
number of ones.

E.g.:

```js
    locators: {
        /// ...
        indexed: { repeater: 'service' },
        /// ...
    },
    indexed_properties: {
        indexed: {
            icon: { xpath: '(//div[contains(@class, "file-icon")])[%s]'},
            file_text: { xpath: '(//span[contains(@class, "file-name")])[%s]'}
        }
    },
    /// ...
    pages.page.elems.indexed._all.count().then(function(countAll) {
        for (var i = 1; i <= countAll; i++) {
            pages.page.elems.indexed(index + 1).title.getText().then(function(text) {
                if (text === serviceName) {
                    count++;
                }
            });
        }
    });
```

But now you can use `getLength(property_name)` method. 
It will return the number of elements that are described under the given property name, e.g. `file_text`.
If property is missed, first property will be used, e.g. `icon`

```js
    indexed_properties: {
        indexed: {
            icon: { xpath: '(//div[contains(@class, "file-icon")])[%s]'},
            file_text: { xpath: '(//span[contains(@class, "file-name")])[%s]'}
        }
    },
    /// ...
    pages.page.indexed.getLength('file_text').then(function(countAll) {
        for (var i = 1; i <= countAll; i++) {
            pages.page.elems.indexed(index + 1).title.getText().then(function(text) {
                if (text === serviceName) {
                    count++;
                }
            });
        }
    });
```

#####Other things you can find in [changelog.md](changelog.md) file. 
