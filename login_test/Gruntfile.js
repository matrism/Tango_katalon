module.exports = function (grunt) {
    'use strict';
    grunt.loadTasks('./vendor/factory-testing-framework/modules/parallel');
    
    grunt.initConfig({
        parallel: {
            shell: {
                tasks: [{
                    cmd: "bash",
                    args: ["start.sh", "--tags", "feature_file_tag", "--reporting", "all"]
                },{
                    cmd: "bash",
                    args: ["start.sh", "--tags", "feature_file_tag_2", "--reporting", "all"]
                }]
            }
        }
    });
    
    grunt.registerTask('check', function() {
        if (grunt.__failed) {
            grunt.fail.warn("Done with errors");
        }
        console.timeEnd(">>Total time");
    })
    
    console.time(">>Total time");
    grunt.registerTask('default', ['parallel','check']);
};