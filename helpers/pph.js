"use strict";
var pph = module.exports = {};
var promise = protractor.promise;
pph.areEqual = function() {
	promise
		.all (
			[].map.call(arguments, promise.when)
		)
		.then (
			function(values) {
				return !values.some (
					function(value) {
						return (value !== values[0]);
					}
				);
			}
		)
	;
};
pph.indexOf = function(array, value) {
	return promise
		.all ([
			promise.when(array),
			promise.when(value)
		])
		.then (
			function(promiseResults) {
				var array = promiseResults[0];
				var value = promiseResults[1];
				return array.indexOf(value);
			}
		)
	;
};
pph.inArray = function(array, value) {
	return pph.indexOf(array, value).then (
		function(index) {
			return (index !== -1);
		}
	);
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
