module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        protractor: {
            options: {
                configFile: "conf/protractor-conf.js", // Default config file
                keepAlive: true,
                noColor: false,
                args: {}
            },
            run: {}
        }
    });

    grunt.loadNpmTasks('grunt-protractor-runner'); 
    grunt.registerTask('tests', ['protractor:run']);

};