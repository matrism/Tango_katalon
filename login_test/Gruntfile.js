var ftf = require("./vendor/factory-testing-framework"),
    SSReporter_instance = new ftf.htmlReporter({baseDirectory: "reports/html"}),
    params = ftf.configer.getParamsFromCli() || false,
    profile = params !== false ? params["p"] : "ci";

module.exports = function (grunt) {
    'use strict';
    grunt.loadTasks('./vendor/factory-testing-framework/modules/parallel');
    grunt.loadNpmTasks("grunt-shell");
    
    global.__using_grunt = true;
    process.env.__using_grunt = true;
    
    var int = setInterval(function() {
        grunt.log.write(".");
    }, 1000);
    
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
        //for those tests that should run single thread only
        shell: {                                // Task
            singleTask: {                       // Target
                command: "bash ./start.sh -p " + profile + " --tags single_thread_only"
            },
            chromeDriver: {
                command: "bash ./chromeDriver.sh"
            }
        }
    });
    
    grunt.registerTask('check', function() {
        try {
            SSReporter_instance.compileReport();
        } catch (e) {
            console.error(e.message);
        }
        clearInterval(int);
        console.timeEnd(">>Total time");
        if (grunt.__failed) {
            grunt.fail.warn("Done with errors");
        }
    })
    
    console.time(">>Total time");
    grunt.registerTask('tests', ['shell:chromeDriver','parallel','shell:singleTask','check']);
};