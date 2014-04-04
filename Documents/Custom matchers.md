## Using custom matchers

To add the matcher to your test, call jasmine.addMatchers() from within a before or it block. Call it with an object mapping matcher name to `matcher.create("matcher_type")`, where `matcher_type` should be defined in the matchers library matchers.js:

    beforeEach(function() {
        this.addMatchers({
            shouldContainText: matchers.create("ShouldContain"),
            shouldBePresent: matchers.create("ShouldBePresent")
        });
    });

Then you can use defined matchers for testing your code `expect(x).customMatcher(options)`, where `options` is an object which consists of the custom message and additional parameters needed for matcher. Add marker `{not}` to the message property for nagative matcher type.

    expect(element.getText()).shouldContainText({
        compare: elementData.value,
        message: elementName + " should {not} contain " + elementData.value
    });

Every matcher can be inverted by prepending `.not`

    expect(element).not.shouldBePresent({
        message: elementName + " should {not} be present on the Main page"
    });

Matchers types are in the matchers.js module:

    Matcher.ShouldContain = function() {
        this.pass = function(actual, options){
            return (actual.indexOf(options.compare) !== -1) ? true : false;
        };
        return this.match();
    };
    
    Matcher.ShouldBePresent = function() {
        this.pass = function(actual){
            return (actual.isPresent()) ? true : false;
        };
        return this.match();
    };

The `pass` is the matcher function which returns a Truthy or Falsy value indicating the result of the comparison.