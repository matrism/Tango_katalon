###New structure including tags system:

We investigated abilities of integrating framework with tags system. In the same time we were hardly working on creating Framework for e2e tests based on ProtractorJS.
We've found that current structure of ProtractorJS is not convenient to extend it with tags and we created prototype of completely restructured face of feature files of our framework.
How current structure looks like:

```js
var login_page = require("../../pages/login"),
    main_page = require("../../pages/main"),
    require("../../steps/main");

describe("Dashboard module", function() {
    beforeEach(login_page.login);
    afterEach(someFn);
    
    describe("Verify that Dashboard's Provisioning section is enabled", function() {
        steps.main.itButtonShouldBeDisabled(main_page.elems.start_provisioning, "Start Provisioning", false);
    });
    
    describe("Verify that Dashboard's Creation and Management sections are disabled", function() {
        steps.main.itButtonShouldBeDisabled(main_page.elems.start_creating, "Start creating", true);
        steps.main.itButtonShouldBeDisabled(main_page.elems.view_details, "View details", true);
    });
});
```

We can say that current structure of code makes impossible extending it with simple and clear tags system. So, we decided to make it to look like this:

```js
require("../steps/main");

var main_page = require("../pages/main"),
    login_page = require("../pages/login"),
    feature = [{
        name: "Verify that Dashboard's Provisioning section is enabled",
        tags: ["wip", "@CD-168"],
        beforeEach: login_page.login,
        steps: [{
            fn: steps.main.itButtonShouldBeDisabled,
            args: [main_page.elems.start_provisioning, "Start Provisioning", false]
        }]
    },{
        name: "Verify that Dashboard's Creation and Management sections are disabled",
        tags: ["smoke", "@CD-168"],
        beforeEach: login_page.login,
        steps: [{
            fn: steps.main.itButtonShouldBeDisabled,
            args: [main_page.elems.start_creating, "Start creating", true]
        },{
            fn: steps.main.itButtonShouldBeDisabled,
            args: [main_page.elems.view_details, "View details", true]
        }],
        afterEach: someFn
    }];

module.exports = feature;
```

And we added one little file where feature files should be specified: `init.js`:

```js
var features = ["components", "dashboard"];
ftf.controller.process(features);
```

When we accept the structure we can get rid of manual specifying names of features to tests. 

Steps and pages are created in the same way as in current structure. 
When no tags are specified, system runs all tests and features.
If you want to run tests only with special tags, you can add cli option:

```Shell
start.sh --tags tag1[,tag2[,tag3...]]
```
