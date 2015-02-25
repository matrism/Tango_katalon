Change log v 0.0.3

1. Added feature `commonFeatureTags`.

2. Removed validation of RESTclient requests.

3. Added `single_thread_only` tag to be run in single thread after finishing all parallel threads.

4. `_tf_config._system_.show_skipped_tests` is false by default

5. added `getLength(prop_name)` method to indexed_property

6. Changed find element strategy in pageObject

7. Update Protractor to 1.7.0:

    * protractor-conf.js changes:

        ** using `directConnect: true` instead of `chromeOnly: true`;

        ** resultJsonOutputFile can be used for further simplifying the reporting module

        ** jasmineNodeOpts.print function can be used to change the output results to console

        ** When using CSS Selectors as a locator, you can use the shortcut $() notation: 

            ```javascript
            $('my-css');

            // Is the same as
            element(by.css('my-css'));
            ```

        ** added debug features

        ** jasmine 2.0 can be used from the box

        ** add `by.deepCss` selector for finding elements in the shadow dom

        ** add `by.exactRepeater`

        ** `expectedConditions` : add helper library for syncing with non-angular apps

            Usage:

            ```javascript
            var EC = protractor.ExpectedConditions;
            var button = $('#xyz');
            var isClickable = EC.elementToBeClickable(button);

            browser.get(URL); browser.wait(isClickable, 5000); //wait for an element to become clickable 
            button.click();
            ```

            You can also customize the conditions:

            ```javascript
            var urlChanged = function() {
              return browser.getCurrentUrl().then(function(url) {
                return url != 'http://www.angularjs.org';
              });
            };

            // condition to wait for url to change, title to contain 'foo', and $('abc') element to contain text 'bar'
            var condition = EC.and(urlChanged, EC.titleContains('foo'),
                EC.textToBePresentInElement($('abc'), 'bar'));
            $('navButton').click(); browser.wait(condition, 5000); //wait for condition to be true.
            // do other things
            ```
