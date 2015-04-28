"use strict";
exports.id = function() {
	return Date.now().toString() + Math.floor(Math.random() * 1000);
};
