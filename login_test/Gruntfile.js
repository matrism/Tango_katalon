var ftf = require("./vendor/factory-testing-framework"),
    SSReporter_instance = new ftf.htmlReporter({baseDirectory: "reports/html"});;

module.exports = function (grunt) {
    'use strict';
    grunt.loadTasks('./vendor/factory-testing-framework/modules/parallel');
    
    grunt.initConfig({
        parallel: {
            shell: {
                tasks: [{
                    cmd: "bash",
                    args: ["start.sh", "--tags", "search_service", "--reporting", "all"]
                },{
                    cmd: "bash",
                    args: ["start.sh", "--tags", "application_service", "--reporting", "all"]
                }]
            }
        }
    });
    
    grunt.registerTask('check', function() {
        SSReporter_instance.compileReport();
        console.timeEnd(">>Total time");
        if (grunt.__failed) {
            grunt.fail.warn("Done with errors");
        }
    })
    
    console.time(">>Total time");
    grunt.registerTask('default', ['parallel','check']);
};