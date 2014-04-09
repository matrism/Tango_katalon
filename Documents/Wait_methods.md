##Wait functions

List of wait functions:

* `page_object.waitForAjax()` - looks into jQuery's `$.active` and angular's `$http.pendingRequests` and waits for them to become empty. This method is the best for waiting of initial loading page with jQuery or AngularJS (even if you don't know which is used) and for waiting loading after navigating via `page_object.open` or different actions that occure redirect/ajax requests. Works even for pages with ProgressBar.
* `page_object.waitForAngular()` - method looks into angular's `$http.pendingRequests` and wait for it to become empty. This method expects Angular to be on the page for sure. It waits only for finishing \$http provider requests. It is useful for initial loading of page with Angular. Should work on pages with ProgressBar.
* `browser.waitForAngular()` - built-in Protractor method. It waits for Angular to finish rendering. Useful for places where angular manipulations are made and requests are not made. E.g. for hover actions. 
* `page_object.waitForDocumentToLoad()` - method waits for `document.readyState` to become `"complete"`. Statuses of `document.readyState`: 
    * Returns "loading" while the document is loading, 
    * "interactive" once it is finished parsing but still loading sub-resources, 
    * and "complete" once it has loaded.
* `page_object.waitForUrlToChangeTo(regex)` - method waits until the URL changes to match a provided regex. It is useful to wait while multiple redirects are performed and final url should match the regex
* `page_object.waitForProgressBar(timeout)` - method waits ProgressBar to finish loading. It is convinient to use it in different WMG application with ProgressBar.
* `helper.waitForElement(element,timeout)` - method waits for element to appear. Useful for different custom actions when it is needed to wait for element.

All methods use default timeout (configured in `config._system_.wait_timeout`). You can specify your timeout for some functions.