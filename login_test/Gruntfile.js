var ftf = require("./vendor/factory-testing-framework"),
    SSReporter_instance = new ftf.htmlReporter({baseDirectory: "reports/html"}),
    params = ftf.configer.getParamsFromCli() || false,
    profile = params !== false && typeof params["p"] !== "undefined" ? params["p"] : "ci";

module.exports = function (grunt) {
    "use strict";
    grunt.loadTasks("./vendor/factory-testing-framework/modules/parallel");
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
                    args: ["start.sh", "-p", profile, "--tags", "login"]
                }]
            }
        },
        shell: {
            singleTask: {
                command: "bash ./start.sh -p " + profile + " --tags login",
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
        try {
            SSReporter_instance.compileReport();
        } catch (e) {
            console.error(e.message);
        }
        console.timeEnd(">>Total time");
        if (grunt.__failed) {
            grunt.fail.warn("Done with errors");
        }
    });
    console.time(">>Total time");
    grunt.registerTask("tests", ["shell:chromeDriver", "parallel", "shell:singleTask", "check"]);
};