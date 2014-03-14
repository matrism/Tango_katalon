## Login tests with redirects using Protractor, NightWatch and Chai-webdriver

### Protractor

    describe('Login test', function() {
    
      it('should login to Security Console', function() {
        
        browser.driver.get('http://security-console.devportal-ci.dspdev.wmg.com');
        
        var emailInput = browser.driver.findElement(by.id('username'));
        emailInput.sendKeys('DSP_TestUser2');
        
        var passwordInput = browser.driver.findElement(by.id('password'));
        passwordInput.sendKeys('W@rn3rTestU$3r');
        
        var signInButton = browser.driver.findElement(by.tagName('button'));
        signInButton.click();
        
        expect(element(by.className('fa-sign-out')).isPresent()).toBe(true);
        
      });
    
    });
    
### NightWatch

    module.exports = {
      "Login To Security Console" : function (browser) {
        browser
          .url("http://security-console.devportal-ci.dspdev.wmg.com")
          .waitForElementVisible('body', 5000)
          .setValue('input[id="username"]', 'DSP_TestUser2')
          .setValue('input[id="password"]', 'W@rn3rTestU$3r')
          .click('button[type="submit"]')
          .assert.elementPresent('span.fa-sign-out')
          .end();
      }
     }

### Chai-webdriver

    var webdriver = require('selenium-webdriver');
    var driver = new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.chrome())
      .build()
    
    var chai = require('chai');
    var chaiWebdriver = require('..');
    chai.use(chaiWebdriver(driver));
    
    describe('Login page', function(){
      this.timeout(15000);
    
      it('should login to Security Console', function(done) {
        driver.get('http://security-console.devportal-ci.dspdev.wmg.com');
        driver.findElement(webdriver.By.id('username')).sendKeys('DSP_TestUser2');
        driver.findElement(webdriver.By.id('password')).sendKeys('W@rn3rTestU$3r');
        driver.findElement(webdriver.By.tagName('button')).click();
        driver.isElementPresent(webdriver.By.className('fa-sign-out')).then(function(result) {
          assert.isTrue(result);
          done();
        }, done);
      });
    });
    
**Result:** As it turns after testing Protractor and NightWatch perform login with redirecting, but Chai fails it. 