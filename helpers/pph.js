"use strict";
var pph = module.exports = {};
var promise = protractor.promise;
pph.arrayMethod = function(methodName, array, callback) {
	array = [].slice.call(array, 0);
	return promise
		.all(array.map(function(value) {
			return promise.when(value);
		}))
		.then(function(values) {
			return values[methodName](callback);
		});
};
pph.arraySome = function(array, predicate) {
    return promise.when(array).then(function(array) {
        if(array.length === 0) {
            return true;
        }
        return promise.when(array[0]).then(function(value) {
            if(!predicate(value) && array.length === 1) {
                return false;
            }
            else {
                return pph.arraySome(array.slice(1), predicate);
            }
        });
    });
};
pph.not = function(value) {
	return promise.when(value).then(function(value) {
		return !value;
	});
};
pph.and = function() {
	return pph.arrayMethod("every", arguments, function(value) {
		return !!value;
	});
};
pph.or = function() {
	return pph.arrayMethod("some", arguments, function(value) {
		return !!value;
	});
};
pph.areEqual = function() {
	return pph.not (
		pph.arrayMethod("some", arguments, function(value, i, values) {
			return (value !== values[0]);
		})
	);
};
pph.areNotEqual = function() {
	return pph.not(pph.areEqual.apply(null, arguments));
};
pph.indexOf = function(array, value) {
	return promise
		.all([promise.when(array), promise.when(value)])
		.then(function(promiseResults) {
			var array = promiseResults[0];
			var value = promiseResults[1];
			return promise
				.all(array.map(function(value) {
					return promise.when(value);
				}))
				.then(function(array) {
					return array.indexOf(value);
				});
		});
};
pph.inArray = function(array, value) {
	return pph.areNotEqual(pph.indexOf(array, value), -1);
};
pph.notInArray = function(array, value) {
	return pph.not(pph.inArray(array, value));
};
pph.allInArray = function(array, values) {
	promise.when(values).then (
		function(values) {
			return values.every (
				function(value) {
					return pph.inArray(array, value);
				}
			);
		}
	);
};
pph.toString = function(value) {
	return promise.when(value).then(function(value) {
		return value.toString();
	});
};
pph.toFixed = function(value, precision) {
	return promise.when(value).then(function(value) {
		return value.toFixed(precision);
	});
};
pph.parseInt = function(value) {
	return promise.when(value).then(function(value) {
		return parseInt(value);
	});
};
pph.parseFloat = function(value) {
	return promise.when(value).then(function(value) {
		return parseFloat(value);
	});
};
pph.matchesCssSelector = function(element, selector) {
	if(element instanceof protractor.ElementFinder) {
		element = element.getWebElement();
	}
	return browser.executeScript (
		function(element, selector) {
			return $(element).is(selector);
		},
		element,
		selector
	);
};
pph.makeCssSelectorPredicate = function(selector) {
	return function(element) {
		return pph.matchesCssSelector(element, selector);
	};
};

