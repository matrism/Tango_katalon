// An example configuration file.
exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome' //firefox, ie
  },

  // Spec patterns are relative to the location of the spec file. They may
  // include glob patterns.
  specs: ['../tests/e2e/**/*.js'],
  
  // Spec patterns are relative to the location of the spec file. They may
  // include glob patterns.
  suites: {
      dashboard: '../tests/e2e/dashboard/**/*.js',
      provision_1 : "../tests/e2e/provisioning_step_1/**/*Spec.js"
  },
  
  onPrepare: function() {

    // The require statement must be down here, since jasmine-reporters
    // needs jasmine to be in the global and protractor does not guarantee
    // this until inside the onPrepare function.

    require('jasmine-reporters');
    jasmine.getEnv().addReporter(
      new jasmine.JUnitXmlReporter('xml_reports', true, true)
    );

  },  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }
};