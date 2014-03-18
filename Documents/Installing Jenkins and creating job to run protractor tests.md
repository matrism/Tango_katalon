## Installing Jenkins as a Windows service

You can install [Jenkins](http://jenkins-ci.org/) using the windows installer. The windows installer automatically runs Jenkins as a windows service. 
Connect to Jenkins by going to the following URL http:// &lt;hostname&gt; :8080/

Install File System SCM Plugin from Manage Jenkins >> Manage Plugins section. 

## Setting up your project

Click Jenkins >> New job and give it a name of your choice. Select Build a free-style software project as your setting and click OK.

![alt text](https://github.com/wmgdsp/factory-testing-framework/raw/master/Documents/images/new_item.png "Create new job")

## Locate project source

In the next window select File System as the source code and enter the path to your project.

![alt text](https://github.com/wmgdsp/factory-testing-framework/raw/master/Documents/images/source_core.png "Locate project source")

## Configure Build
Add an Execute shell (or Execute Windows batch command) build step:
 
![alt text](https://github.com/wmgdsp/factory-testing-framework/raw/master/Documents/images/build.png "Configure Build")

This allows you to type in whatever commands are needed to run before the build may be tested. In this case, it would start selenium server and run protractor tests.

Gruntfile.js:

    module.exports = function(grunt) {
    
      grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        protractor: {
          options: {
            configFile: "protractor.conf.js", // Default config file
            keepAlive: true,
            noColor: false,
          },
          run: {}
        }
      });
    
      grunt.loadNpmTasks('grunt-protractor-runner'); 
      grunt.registerTask('test', [
        'protractor:run'
      ]);
    
    };

## Configure Post-build actions
Then the test result report is generating (Post-build Actions > Publish JUnit test result report) by reading the protractor test results from the XML file.

![alt text](https://github.com/wmgdsp/factory-testing-framework/raw/master/Documents/images/post_build.png "Configure Post-build actions")

To generate XML reports  install ‘jasmine-reporters’ from the npm and add to the protractor configuration file:

     onPrepare: function() {
    
        // The require statement must be down here, since jasmine-reporters
        // needs jasmine to be in the global and protractor does not guarantee
        // this until inside the onPrepare function.
    
        require('jasmine-reporters');
        jasmine.getEnv().addReporter(
          new jasmine.JUnitXmlReporter('xmloutput', true, true));
    
      },

Example of the XML output generated using ‘jasmine-reporters’:
```xml
    <?xml version="1.0" encoding="UTF-8"?>
      -<testsuites> 
        -<testsuite timestamp="2014-03-17T12:19:53" time="12.739" failures="0" tests="1" errors="0" name="Project tests">                 
          <testcase time="12.738" name="should login to Security Console" classname="my app"/>
        </testsuite>
    </testsuites>
```
---------

Now you can build the project manually by clicking on "Build Now" link.

Main project status page

![alt text](https://github.com/wmgdsp/factory-testing-framework/raw/master/Documents/images/status_page.png "Main project status page")
