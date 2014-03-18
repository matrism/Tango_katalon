module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cucumberjs: {
            src: 'features',
            options: {
              steps: "features/step_definitions",
              format: "pretty",
              tags: "@moreFeatures,@again"
            }
          }
    });

    // Load the plugin that provides the "cucumberjs" task.
    grunt.loadNpmTasks('grunt-cucumber');
    // Default task(s).
    grunt.registerTask('default', ['cucumber']);

};