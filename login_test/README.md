### How to run tests:

 * [Setup environment](http://developer.dsp.wmg.com/docs/reliability/js_testing_framework/environment_setup)
 
 * Set TEST_USERNAME and TEST_PASSWORD environment variables. Testing suite will use these values to perform login to your wmg application. Otherwise you can rewrite these values in your local file configs/config.js (structure of config file is described [here](http://developer.dsp.wmg.com/docs/reliability/js_testing_framework/configuration_files_structure)). By default test will run on your local application environment, which is set in configs/config.js.   
 * How to execute tests you can find [here](http://developer.dsp.wmg.com/docs/reliability/js_testing_framework/bash_runner)
 
 * After executing tests you can see full report in reports/html/reporter.html. (Information about reporter can be found via [this link](http://developer.dsp.wmg.com/docs/reliability/js_testing_framework/reporting_and_jenkins_job_setup))