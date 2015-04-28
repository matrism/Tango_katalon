"use strict";
var _ = require("lodash");
exports.id = function() {
	return Date.now().toString() + Math.floor(Math.random() * 1000);
};
exports.date = function(a, b) {
	a = a.getTime();
	if(b) {
		b = b.getTime();
	}
	else {
		b = Date.now();
	}
	return new Date(_.random(a, b));
};
