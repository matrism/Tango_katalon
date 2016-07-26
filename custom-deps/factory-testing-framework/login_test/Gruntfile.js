var ftf = require("./vendor/factory-testing-framework"),
    SSReporter_instance = new ftf.htmlReporter({baseDirectory: "reports/html"}),
    params = ftf.configer.getParamsFromCli() || false,
    profile = params !== false && typeof params["p"] !== "undefined" ? params["p"] : "ci";

global._tf_config = require("./configs/config.js");

module.exports = function (grunt) {
    "use strict";
    grunt.loadTasks("./vendor/factory-testing-framework/modules/parallel");
    grunt.loadTasks("./vendor/factory-testing-framework/modules/clearDir");
    grunt.loadNpmTasks("grunt-shell");

    global.__using_grunt = true;
    process.env.__using_grunt = true;
    global.__logShell = function(err, stdout, stderr, cb) {
        grunt.log.writeln(stdout);
        cb();
    };
    
    grunt.initConfig({
        parallel: {
            shell: {
                tasks: [{
                    cmd: "bash",
                    args: ["start.sh", "-p", profile, "--tags", "login", "--reporting", "all"]
                }]
            }
        },
        shell: {
            singleTask: {
                command: "bash ./start.sh -p " + profile + " --tags single_thread_only --reporting all",
                options: {
                    failOnError: false
                },
                callback: global.__logShell
            },
            chromeDriver: {
                command: "bash ./chromeDriver.sh",
                options: {
                    failOnError: false
                },
                callback: global.__logShell
            }
        }
    });

    grunt.registerTask("check", function() {
        var callback = this.async();
        setTimeout(function() {
            try {
                SSReporter_instance.compileReport();
            } catch (e) {
                console.error(e.stack);
            }
            console.timeEnd(">>Total time");
            if (grunt.__failed) {
                grunt.fail.warn("Done with errors");
            }

            callback();
        }, 1000);
    });
    
    console.time(">>Total time");
    grunt.registerTask("tests", ["shell:chromeDriver", "clearReports", "parallel", "shell:singleTask", "check"]);
};