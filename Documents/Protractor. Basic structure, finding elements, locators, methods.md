Protractor is an end to end test framework for AngularJS applications built on top of WebDriverJS.


Basic Test Structure
--------------------

The test files use Jasmine framework by default. We get to use the beforeEach() and afterEach() functions as well as nested describe() blocks for the structure around our tests.

To actually implement tests, we’ll use the same expect() syntax that Jasmine gives us.


    var util = require('util');

    describe('Adjunct List', function () {
        beforeEach(function () {
            browser.get('#/');
        });

        it('should do something', function () {
            element(By.className('brand')).click();
            browser.getCurrentUrl().then(function(url) {
                expect(url).toContain('#/');
            });
        }, 10000);
    });



Writing tests for Protractor requires us to work with a few global variables that Protractor exposes to us in our tests. The following is a list of a few of those global variables:


Finding Elements
----------------

## elementFinder.find

**_Use as: element(locator).find()_**

## element.all

**_Use as: element.all(locator)_**

## elementArrayFinder.count

**_Use as: element.all(locator).count()_**

    <ul class="items">
      <li>First</li>
      <li>Second</li>
      <li>Third</li>
    </ul>

    var list = element.all(by.css('.items li'));
    expect(list.count()).toBe(3);

## elementArrayFinder.get

**_Use as: element.all(locator).get(index)_**

    <ul class="items">
      <li>First</li>
      <li>Second</li>
      <li>Third</li>
    </ul>

    var list = element.all(by.css('.items li'));
    expect(list.get(0).getText()).toBe('First');
    expect(list.get(1).getText()).toBe('Second');

## elementArrayFinder.first

**_Use as: element.all(locator).first()_**

    <ul class="items">
      <li>First</li>
      <li>Second</li>
      <li>Third</li>
    </ul>

    var list = element.all(by.css('.items li'));
    expect(list.first().getText()).toBe('First');

## elementArrayFinder.last

**_Use as: element.all(locator).last()_**

    <ul class="items">
      <li>First</li>
      <li>Second</li>
      <li>Third</li>
    </ul>

    var list = element.all(by.css('.items li'));
    expect(list.last().getText()).toBe('Third');

## elementArrayFinder.each

**_Use as: element.all(locator).each(eachFunction)_**

    <ul class="items">
      <li>First</li>
      <li>Second</li>
      <li>Third</li>
    </ul>

    element.all(by.css('.items li')).each(function(element) {
      // Will print First, Second, Third.
      element.getText().then(console.log);
    });

## elementArrayFinder.map

**_Use as: element.all(locator).map(mapFunction)_**

    <ul class="items">
      <li class="one">First</li>
      <li class="two">Second</li>
      <li class="three">Third</li>
    </ul>

    var items = element.all(by.css('.items li')).map(function(elm, index) {
      return {
        index: index,
        text: elm.getText(),
        class: elm.getAttribute('class')
      };
    });

    expect(items).toEqual([
      {index: 0, text: 'First', class: 'one'},
      {index: 1, text: 'Second', class: 'two'},
      {index: 2, text: 'Third', class: 'three'}
    ]);


Protractor Locators
-------------------

protractor.By.className('redBtn')

protractor.By.css('.redBtn')

protractor.By.id('loginButton')

protractor.By.linkText('Go Home')

protractor.By.partialLinktext('Home')

protractor.By.name('email')

protractor.By.tagName('h2')

protractor.By.xpath('')

protractor.By.binding('{{status}}')

    <span>{{person.name}}</span>
    <span ng-bind="person.email"></span>

    var span1 = element(by.binding('person.name'));
    expect(span1.getText()).toBe('Foo');

    var span2 = element(by.binding('person.email'));
    expect(span2.getText()).toBe('foo@bar.com');

protractor.By.select("user")

    <select ng-model="user" ng-options="user.name for user in users"></select>

    element(by.select('user'));

protractor.By.selectedOption("user")

    <select ng-model="user" ng-options="user.name for user in users"></select>

    element(by.selectedOption("user"));

protractor.By.input("user")

    <input ng-model="user" type="text"/>

    element(by.input('user'));

protractor.By.model("user")

    <input type="text" ng-model="person.name"/>

    var input = element(by.model('person.name'));
    input.sendKeys('123');
    expect(input.getAttribute('value')).toBe('Foo123');

protractor.By.repeater("cat in pets")

    <div ng-repeat="cat in pets">
        <span>{{cat.name}}</span>
        <span>{{cat.age}}</span>
    </div>

    // Returns the DIV for the second cat.
    var secondCat = element(by.repeater('cat in pets').row(1));

    // Returns the SPAN for the first cat's name.
    var firstCatName = element(by.repeater('cat in pets').
        row(0).column('{{cat.name}}'));

    // Returns a promise that resolves to an array of WebElements from a column
    var ages = element.all(by.repeater('cat in pets').column('{{cat.age}}'));

    // Returns a promise that resolves to an array of WebElements containing
    // all rows of the repeater.
    var rows = element.all(by.repeater('cat in pets'));


WebElement Methods
------------------

`clear()` - If this element is a text entry element, this will clear the value.

`click()` - Click this element.

`getAttribute(name)` - Get the value of a the given attribute of the element.

`getCssValue(propertyName)` - Get the value of a given CSS property.

`getLocation()` - Where on the page is the top left-hand corner of the rendered element?

`getSize()` - What is the width and height of the rendered element?

`getTagName()` - Get the tag name of this element.

`getText()` - Get the visible (i.e. not hidden by CSS) innerText of this element, including sub-elements, without any leading or trailing whitespace.

`isDisplayed()` - Is this element displayed or not? This method avoids the problem of having to parse an element's "style" attribute.

`isEnabled()` - Is the element currently enabled or not? This will generally return true for everything but disabled input elements.

`isSelected()` - Determine whether or not this element is selected or not.

`sendKeys(keysToSend)` - Use this method to simulate typing into an element, which may set its value.