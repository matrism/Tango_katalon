var ftf = require("./vendor/factory-testing-framework"),
    SSReporter_instance = new ftf.htmlReporter({baseDirectory: "reports/html"}),
    params = ftf.configer.getParamsFromCli() || false,
    profile = params !== false ? params["p"] : "ci";

module.exports = function (grunt) {
    'use strict';
    grunt.loadTasks('./vendor/factory-testing-framework/modules/parallel');
    
    global.__using_grunt = true;
    
    grunt.initConfig({
        parallel: {
            shell: {
                // Configuration of parallel tasks
                tasks: [{
                    cmd: "bash",
                    args: ["start.sh", "-p", profile, "--tags", "search_service"]
                },{
                    cmd: "bash",
                    args: ["start.sh", "-p", profile, "--tags", "application_service"]
                }]
                // End of configuration of parallel tasks
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
    grunt.registerTask('tests', ['parallel','check']);
};