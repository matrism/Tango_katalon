/**
 * Creating HTML reporter for compiling HTML report after finishing all threads
 */
var ftf = require("factory-testing-framework"),
    _ = require("lodash"),
    SSReporter_instance = new ftf.htmlReporter({ baseDirectory: "reports/html" });

module.exports = function (grunt) {
    'use strict';

    // loading parallelizing task
    grunt.loadTasks('./node_modules/factory-testing-framework/modules/parallel');

    //registering task for compiling report and making decision if tests failed and loging info of total time
    grunt.registerTask('check', function () {
        SSReporter_instance.compileReport();
        console.timeEnd(">>Total time");
        if (grunt.__failed) {
            grunt.fail.warn("Done with errors");
        }
        console.timeEnd(">>Total time");
    })

    grunt.registerTask('prepareParallel', function () {
        var tags = [];
        var excludedTags = [];
        var tasks = [];
        var cmd = {
            cmd: 'bash',
            args: ['./start.sh']
        };

        //if (grunt.option('xvfb')) {
        //    cmd.cmd = 'xvfb-run'
        //    //cmd.cmd = grunt.option('xvfb');

        //    if (grunt.option('screen')) {
        //        cmd.args.unshift('-screen 0 ' + grunt.option('screen'));
        //    }

        //    cmd.args.unshift('-s');
        //    cmd.args.unshift('-a');
        //}

        if (grunt.option('env')) {
            cmd.args.push('--env');
            cmd.args.push(grunt.option('env'));
        };

        if (grunt.option('app-url')) {
            cmd.args.push('--app-url');
            cmd.args.push(grunt.option('app-url'))
        }

        if (grunt.option('single-report')) {
            cmd.args.push('--single-report');
        };

        if (grunt.option('timeout')) {
            cmd.args.push('--timeout ');
            cmd.args.push(grunt.option('timeout'));
        };

        if (grunt.option('tags')) {
            tags = grunt.option('tags').split(',');
        };

        if (grunt.option('@tags')) {
            excludedTags = grunt.option('@tags').split(',');
        };

        // add reporting
        cmd.args.push('--reporting');
        cmd.args.push('all');

        // loop through tags, creating a task per each tag, excluding all other tags that were passed in
        for (var i = 0; i < tags.length; i++) {
            var copiedCmd = _.cloneDeep(cmd);
            var copiedTags = _.cloneDeep(tags);
            var tagsToPush = tags[i];
            copiedTags.splice(i, 1)

            copiedCmd.args.push('--tags');

            if (grunt.option('test-type')) {
                tagsToPush += ',' + grunt.option('test-type');
            };

            copiedCmd.args.push(tagsToPush);

            copiedCmd.args.push('--@tags');
            copiedCmd.args.push(excludedTags + (excludedTags.length > 0 ? ',' : '') + copiedTags);

            tasks.push(copiedCmd);
        }

        console.log(tasks);

        grunt.initConfig({
            parallel: {
                shell: {
                    tasks: tasks
                }
            }
        });
    });

    // registering timer and tasks for running. 
    console.time(">>Total time");
    grunt.registerTask('default', ['prepareParallel', 'parallel', 'check']);
    grunt.registerTask('e2e', ['prepareParallel', 'parallel', 'check']);
};