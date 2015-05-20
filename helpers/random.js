"use strict";
var _ = require("lodash");
var moment = require("moment");
exports.id = function() {
	return Date.now().toString() + Math.floor(Math.random() * 1000);
};
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
