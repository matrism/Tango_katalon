###New structure including tags system:

We've investigated abilities of integrating framework with tags system. In the same time we were hardly working on creating Framework for e2e tests based on ProtractorJS.
We've found that current structure of ProtractorJS is not convenient to extend it with tags and we developed tags-convenient structure.
Common ProtractorJS specs file structure looks like:

```js
describe("Components", function() {
    var docs_page = require("../../pages/docs");
        require("../../pages/login");
        require("../../steps/components");
    
    describe("Before all features, is executed only once", function() {
        // No ability to run this before each describe. Only copy-paste.
    });
    
//  @APSF-166 @smoke
    describe("Validate Breadcrumb Component tutorial on frontend page", function() {
        beforeEach(function() {
            //make something before each step,
            //e.g. check if still logged in
        });
        afterEach(function() {
            //make something after each step,
            //e.g. make screenshot
        });
        steps.components.itNavigateToDocs();
        steps.components.itClickOnDocsCategory("frontend");
        steps.components.itClickOnComponentItem("frontend", "breadcrumb");
        steps.components.itCheckUrl("/component_library/breadcrumb");
        steps.components.itElementContains(docs_page.elems.header, "tutorial header", docs_page.categories.frontend.components.breadcrumb.value);
    });
    
//  @APSF-166
    describe("Validate breadcrumb live demo component", function() {
        steps.components.itNavigateToDocs();
        steps.components.itClickOnDocsCategory("frontend");
        steps.components.itClickOnComponentItem("frontend", "breadcrumb");
        steps.components.itHoverElement(docs_page.elems.breadcrumb_hover_with_dropdown, "breadcrumb_hover_with_dropdown");
        steps.components.itElementContainsValues(docs_page.elems.breadcrumb_hover_dropdown, "breadcrumb_hover_dropdown", ["SUB LINK 1", "SUB LINK 2", "SUB LINK 3"]);
    });
});
```

We can say that current structure of code makes impossible extending it with simple and clear tags system. So, we decided to make it to look like this:

```js
var steps_path = _tf_config._system_.path_to_steps,
    pages_path = _tf_config._system_.path_to_pages;

require(steps_path + "components");
require(steps_path + "login");
require(pages_path + "login");
    
var docs_page = require(pages_path + "docs"),

    beforeFeature = [
        //make something before each feature,
        //e.g. login and navigate to page.
        //note: pass steps to this function
        [steps.components.itNavigateToDocs],
        [steps.components.itClickOnDocsCategory,["frontend"]];
    ],
    afterFeature = [
        //make something after each feature,
        //e.g. logout.
        //note: pass steps to this function
    ],
    globalBeforeEach = function() {
        //setup your beforeEach function for all features
    },
    globalAfterEach = function() {
        //setup your afterEach function for all features
    },
    feature = [{
        name: "Validate Breadcrumb Component tutorial on frontend page",
        tags: ["APSF-166", "smoke"],
        beforeEach: function() {
            //make something before each step,
            //e.g. check if still logged in
        },
        afterEach: function() {
            //make something after each step,
            //e.g. make screenshot
        },
        steps: [
            // steps.components.itClickOnComponentItem - step function,
            // ["frontend", "breadcrumb"] - arguments for step function
            [steps.components.itClickOnComponentItem,["frontend", "breadcrumb"]],
            [steps.components.itCheckUrl,["/component_library/breadcrumb"]],
            [steps.components.itElementContains,[docs_page.elems.header, "tutorial header", docs_page.categories.frontend.components.breadcrumb.value]]
        ]
    },{
        name: "Validate breadcrumb live demo component",
        tags: ["APSF-166"],
        steps: [
            [steps.components.itClickOnComponentItem,["frontend", "breadcrumb"]],
            [steps.components.itHoverElement,[docs_page.elems.breadcrumb_hover_with_dropdown, "breadcrumb_hover_with_dropdown"]],
            [steps.components.itElementContainsValues,[docs_page.elems.breadcrumb_hover_dropdown, "breadcrumb_hover_dropdown", ["SUB LINK 1", "SUB LINK 2", "SUB LINK 3"]]]
        ]
    }];

module.exports = {
    feature: feature,
    beforeFeature: beforeFeature,
    afterFeature: afterFeature,
    globalBeforeEach: globalBeforeEach,
    globalAfterEach: globalAfterEach
};
```

And we added one little file where feature files should be specified: `init.js`:

```js
ftf.controller.process();
```

This script will read the folder you specified in config.js:

```js
config = {
    ...
    _system_: {
        ...
        path_to_steps: "../steps/", //relative to feature files path
        path_to_pages: "../pages/", //relative to feature files path
        ...
    },
    ...
    env_name: {
        ...
        path_to_features: "./path/to/features", //will search features in folder path/to/features
        ...
    },
    ...
    env_name_other: {
        ...
        path_to_features: ["./path/to/features1", "./path/to/another/features"]
        ...
    }
}
```

and read all feature files from there.

So, the final structure of files is next:

```
...
[path_to_tests]
---->[configs]
--------->config.js
--------->init.js
--------->protractor-conf.js
---->[features]
--------->feature_name1.js
--------->feature_name2.js
--------->...
--------->feature_nameN.js
---->[pages]
--------->page_obj1.js
--------->...
---->[profiles]
--------->profile_name1.yml
--------->...
---->[reports]
--------->[html]
-------------->...(empty)
--------->[xml]
-------------->...(empty)
--------->[screens]
-------------->...(empty)
---->[steps]
--------->step_name1.js
--------->...
---->[utils]
--------->helper.js(optional)
--------->...
---->.bowerrc
---->bower.json
---->ds.sh
---->package.json
---->README.md
---->start.sh
```
When no tags are specified, system runs all tests and features.
If you want to run tests only with special tags, you can add CLI option:

```Shell
start.sh --tags tag1[,tag2[,tag3...]]
```

If you want to exclude tests with some tags, you can add CLI option:

```Shell
start.sh --@tags tag4[,tag5[,tag6...]]
```
