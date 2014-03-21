Custom error messages
======================

The errors are defined in the matchers. Here is no way to set the message from outside a matcher.

Example of the toBeNaN matcher:

    jasmine.Matchers.prototype.toBeNaN = function() {
    	this.message = function() {
    		return [ "Expected " + jasmine.pp(this.actual) + " to be NaN." ];
    	};
    
    	return (this.actual !== this.actual);
    };

The messages is hard coded into the matcher and will be set when you call the matcher. The way to have your own messages is to write your matcher and defined custom error message there.

Example of the custom matcher:

    jasmine.Matchers.prototype.toBeAGoodInvestment = function(){
        var investment = this.actual;
        var what = this.isNot ? 'bad' : 'good';
        this.message = function() {
            return 'Expected investment to be a '+ what +' investment';
        };
        return investment.get('isGood');
    }


