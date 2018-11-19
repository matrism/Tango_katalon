var Page = function(o) {
    o = o || {};
    for (var i in o) {
        this[i] = o[i];
    }
    this.index();
    return this;
},
_ = require("underscore");

Page.prototype.url = "";
Page.prototype._url = {
    template: "",
    args: []
};
Page.prototype.dynamic_url = false;
Page.prototype.text = "";
Page.prototype.title = "";
Page.prototype.html = "";

Page.prototype.index = function() {
    var locs = this.locators,
        ind_props = this.indexed_properties,
        include = this.include, i;

    if (typeof include !== "undefined") {
        for (i in include) {
            locs = _.extend(locs, include[i].locators);
        }
    }
    this.elems = this.prepareLocators(locs);
    this.indexed = this.prepareIndexedProperties(ind_props);

    if (this._url.template === "" || this._url.args.length < 1) {
        this.dynamic_url = false;
    } else {
        this.dynamic_url = true;
    }
    return this;
};
Page.prototype.prepareIndexedProperties = function(props) {
    var i, page = this,
        // Creating factory of indexed_property
        factory = function(k) {
            // This main function will return the content of indexed property
            var ret_function = function(index) {
                var locs = {}, loc, elems, j, type, m,
                    prop = props[k];

                for (j in prop) {
                    loc = prop[j];
                    type = Object.keys(loc)[0];
                    locs[j] = {};
                    locs[j][type] = loc[type].replace("%s", index);
                }
                elems = page.prepareLocators(locs);
                return elems;
            };
            // This subfunction will return number of elements for the first item for indexed property
            ret_function.getLength = function(prop_name) {
                var m, prop = props[k], loc, elems, type;
                if (prop_name) {
                    m = prop_name;
                } else {
                    for (m in prop) break;
                }
                loc = prop[m];
                type = Object.keys(loc)[0];
                elems = element.all(By[type](loc[type].replace("[%s]", "")));
                return elems.count();
            };
            return ret_function;
        };

    for (i in props) {
        page[i] = factory(i);
    }

    return this;
};
Page.prototype.prepareLocators = function(locators) {
    var loc, i, type, elems = {}, all;

    for(i in locators) {
        loc = locators[i];
        type = Object.keys(loc)[0];

        if (type === "custom") {
            elems[i] = loc[type]();
        } else if (typeof loc[type] === "function") {
            elems[i] = element(By[type](loc[type]()));
            elems[i]._all = element.all(By[type](loc[type]()));
            elems[i].getFirst = function() {
                return this._all.first();
            };
        } else {
            elems[i] = element(By[type](loc[type]));
            elems[i]._all = element.all(By[type](loc[type]));
            elems[i].getFirst = function() {
                return this._all.first();
            };
        }
    }

    return elems;
};
Page.prototype.extendLocators = function(locators) {
    this.elems = _.extend(this.elems, this.prepareLocators(locators));
    return this;
};
Page.prototype.prepare = function() {
    var page = this;

    browser.wait(protractor.ExpectedConditions.presenceOf(element(By.tagName('body'))));
    element(By.tagName("body")).getText().then(function(t) {
        page.text = t;
    });
    browser.getTitle().then(function(title) {
        page.title = title;
    });
    element(By.tagName("body")).getInnerHtml().then(function(html) {
        page.html = html;
    });
};
Page.prototype.setUrl = function(url) {
    this.url = url;
    this.dynamic_url = false;
    return this;
};
Page.prototype.setDynamicUrl = function(template, args) {
    this.dynamic_url = true;
    this._url.template = template;
    this._url.args = _.clone(args);
    return this;
};
Page.prototype.setDynamicUrlTemplate = function(template) {
    this._url.template = template;
    return this;
};
Page.prototype.setDynamicUrlArgs = function(args) {
    this._url.args = _.clone(args);
    return this;
};
Page.prototype.makeUrlStatic = function() {
    this.dynamic_url = false;
    return this;
};
Page.prototype.makeUrlDynamic = function() {
    this.dynamic_url = true;
    return this;
};
Page.prototype.prepareUrl = function() {
    var arg,
        _split_,
        _url_ = this._url.template,
        args = this._url.args,
        i = 0, max = args.length;

    if (!this.dynamic_url) {
        return this.url;
    }
    for ( ;i < max; i++) {
        arg = args[i];
        _split_ = new Array("{",i+1,"}").join("");
        _url_ = _url_.split(_split_).join(arg);
    }
    return _url_;
};
Page.prototype.getUrl = function() {
    return this.url;
};
Page.prototype.getDynamicUrlData = function() {
    return this._url;
};
Page.prototype.getText = function() {
    return this.text;
};
Page.prototype.getTitle = function() {
    return this.title;
};
Page.prototype.getHtml = function() {
    return this.html;
};
Page.prototype.executeScript = function(code,callback) {
    return browser.executeScript(code).then(function(res) {
        callback(res);
    });
};
Page.prototype.refresh = function() {
    browser.navigate().refresh();
    return this;
};
Page.prototype.back = function() {
    browser.navigate().back();
    return this;
};
Page.prototype.forward = function() {
    browser.navigate().forward();
    return this;
};
Page.prototype.clearCookies = function() {
    browser.manage().deleteAllCookies();
    return this;
};
Page.prototype.saveScreen = function(name) {
    name = name || "screen";
    browser.takeScreenshot().then(function(png) {
        var fs = require("fs"),
            date = new Date(),
            newdate = date.getDate() + "_" + date.getMonth() + "_" + date.getFullYear() + "-" + date.getHours() + "_" + date.getMinutes() + "_" + date.getSeconds(),
            filename = "reports/screens/" + name + "_" + newdate + ".png",
            stream = fs.createWriteStream(filename);

        stream.write(new Buffer(png, "base64"));
        stream.end();
    });
    return this;
};
Page.prototype.waitForAjax = function(timeout) {
    return browser.wait(function() {
        browser.sleep(300);
        return browser.executeScript("return typeof jQuery === 'undefined' ? 0 : jQuery.active").then(function(res) {
            return res == 0;
        }) && browser.executeScript("return typeof angular === 'undefined' ? 0 : angular.element(document.body).injector().get('$http').pendingRequests.length").then(function(res) {
            return res == 0;
        });
    }, timeout || _tf_config._system_.wait_timeout);
};
Page.prototype.waitForAngularRequests = function() {
    return browser.wait(function() {
        browser.sleep(300);
        return browser.executeScript("return angular.element([$('body')]).injector().get('$http').pendingRequests.length").then(function(res) {
            return res == 0;
        });
    }, _tf_config._system_.wait_timeout);
};
Page.prototype.waitForProgressBar = function(timeout) {
    timeout = timeout || _tf_config._system_.wait_timeout;
    return browser.wait(function() {
        return element(By.css(".ugol-page-progress-bar .progress-bar")).getCssValue("width").then(function(width) {
            return width === "0px";
        });
    }, timeout);
};
Page.prototype.waitForDocumentToLoad = function() {
    return browser.wait(function() {
        return browser.executeScript("return document.readyState === 'complete';").then(function(res) {
            return res === true;
        });
    });
};

/**
 * From here: https://github.com/angular/protractor/issues/610#issuecomment-37917269
 *
 * @name waitForUrlToChangeTo
 * @description Wait until the URL changes to match a provided regex
 * @param {RegExp} urlRegex wait until the URL changes to match this regex
 * @returns {!webdriver.promise.Promise} Promise
 */
Page.prototype.waitForUrlToChangeTo = function(urlRegex) {
    var currentUrl;

    return browser.getCurrentUrl().then(function storeCurrentUrl(url) {
        currentUrl = url;
    }).then(function waitForUrlToChangeTo() {
        return browser.wait(function waitForUrlToChangeTo() {
            return browser.getCurrentUrl().then(function compareCurrentUrl(url) {
                return urlRegex.test(url);
            });
        });
    });
};
Page.prototype.open = function(is_not_angular) {
    is_not_angular = is_not_angular || false;
    if (is_not_angular) {
        browser.ignoreSynchronization = true;
        browser.driver.get(this.prepareUrl());
    } else {
        browser.get(this.prepareUrl());
    }
    this.prepare();
    return this;
};
/**
 * Scrolls an element into view, as much towards the middle of the viewport as possible.
 * This is typically enough to avoid having sticky headers and footers covering the element.
 */
Page.prototype.scrollIntoView = function(el) {
    if(el instanceof protractor.ElementFinder) {
        el = el.getWebElement();
    }

    return browser.executeScript (
        function(el) {
            var bbox;
            var bbox_middle;
            var viewport_middle;

            el.scrollIntoView(false);

            bbox = el.getBoundingClientRect();
            bbox_middle = bbox.top + (bbox.height / 2);
            viewport_middle = window.innerHeight / 2;
            window.scrollBy(0, bbox_middle - viewport_middle);
        }, el
    );
};

module.exports = Page;