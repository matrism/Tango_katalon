"use strict";
var _ = require("lodash"),
    moment = require("moment"),
    randomstring = require("randomstring"),
    memoizeNonNullaryCalls = require('./memoizeNonNullaryCalls');

exports.id = function() {
	return Math.floor(Math.random() * 100) +  Date.now().toString();
};

exports.id.makeMemoizedGenerator = memoizeNonNullaryCalls.makeFactoryFor(exports.id);

exports.string = function() {
	return randomstring.generate({charset: '0123456789ABCDEFGHIJKLMNOPQRSTUVXZY'});
};

exports.threeDigitCode = function() {
	return randomstring.generate({
		length: 3,
		charset: 'numeric'
	});
};

exports.tenDigitCode = function() {
    return randomstring.generate({
        length: 10,
        charset: 'numeric'
    });
};

exports.tenDigitCode.makeMemoizedGenerator = memoizeNonNullaryCalls.makeFactoryFor(exports.tenDigitCode);

exports.string.threeDigitCodeGenerator = memoizeNonNullaryCalls.makeFactoryFor(exports.threeDigitCode);

exports.string.makeMemoizedGenerator = memoizeNonNullaryCalls.makeFactoryFor(exports.string);

exports.stringLowerCase = function() {
	return randomstring.generate({charset: '0123456789abcdefghijklmnopqrstuvxzy'});
};
exports.stringLowerCase.makeMemoizedGenerator = memoizeNonNullaryCalls.makeFactoryFor(exports.stringLowerCase);

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

exports.randomSuisaIpi = function() {
	return randomstring.generate({
		length: 11,
		charset: 'numeric'
	});
};

exports.string.makeSuisaIpiMemoizedGenerator = memoizeNonNullaryCalls.makeFactoryFor(exports.randomSuisaIpi);