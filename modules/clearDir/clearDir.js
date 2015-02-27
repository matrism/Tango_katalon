'use strict';
var fs = require("fs"),
    path = require('path'),
    _ = require('underscore');

module.exports = function(grunt) {
    grunt.registerTask("clearReports", function() {
        var dirPath = "./reports/html";        
        var files = fs.readdirSync(dirPath);

        _.each(files, function(file) {
            var filePath = dirPath + "/" + file,
            stats = fs.statSync(filePath);

            if (stats.isFile() && path.extname(file).indexOf("htm") < 0) {
                fs.unlink(filePath, function(err) {
                    if (err) {
                        console.log(JSON.stringify(err));
                    }
                });
            }
        });
    });
};
