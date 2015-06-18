"use strict";
var _ = require("lodash");
var moment = require("moment");
var memoizeNonNullaryCalls = require('./memoizeNonNullaryCalls');
exports.id = function() {
	return Math.floor(Math.random() * 1000) +  Date.now().toString();
};
exports.id.makeMemoizedGenerator = memoizeNonNullaryCalls.makeFactoryFor(exports.id);
exports.letter = function() {
    return String.fromCharCode("A".charCodeAt(0) + Math.round(Math.random() * 25));
};
exports.letter.makeMemoizedGenerator = memoizeNonNullaryCalls.makeFactoryFor(exports.letter);
exports.moment = function(a, b) {
	a = a.valueOf();
	if(b) {
		b = b.valueOf();
	}
	else {
		b = moment().valueOf()
	}
	return moment(_.random(a, b));
};
