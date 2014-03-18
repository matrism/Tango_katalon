var assert = require('assert'),
    path = require('path'),
    browserName = process.env.browser || 'chrome',

    protractor = require('protractor'),
    webdriver = require('selenium-webdriver'),
    expect = require('expect.js'),

    driver = new webdriver.Builder().
        usingServer('http://localhost:4444/wd/hub').
        withCapabilities(webdriver.Capabilities.chrome()).
        build(),
        
    ptor,
    World,
    exec = require('child_process').exec,
    util = require('util');
    
driver
    .manage()
    .timeouts()
    .setScriptTimeout(100000);

ptor = protractor.wrapDriver(driver);
    
module.exports = function() {
  this.registerHandler('AfterFeatures', function (e, done) {
    ptor.quit();
 
    if (browserName === 'chrome') {
      exec('pkill chromedriver');
    } else if (browserName === 'phantomjs') {
      exec('pkill phantomjs');
    }
     
    setTimeout(function() {
       done();
    }, 500);
  });
};

World = function World(callback) {
    this.browser = ptor;
    this.By = protractor.By;
    this.assert = assert;
    this.expect = expect;
    this.visit = function(url, callback) {
        return this.browser.driver.get(url, callback);
    };
    this.wait_for_ajax = function(callback) {
        this.browser.sleep(1500); //config.default_timeout;
        if (callback) {
            callback();
        }
    };
    this.getElement = function(search_text, by) {
        if (!(by in this.By)) {
            throw new Error("incorrect By:"+by);
        }
        return this.browser.driver.findElement(this.By[by](search_text));
    };
    callback();
};

module.exports.World = World;