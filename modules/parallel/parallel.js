/*
 * grunt-parallel
 * https://github.com/iammerrick/grunt-parallel
 *
 * Copyright (c) 2013 Merrick Christensen
 * Licensed under the MIT license.
 */
/*jshint es5:true*/
module.exports = function(grunt) {
    var Q = require('q'),
        lpad = require('lpad');
        grunt.__failed = false;

  function spawn(task) {
    var deferred = Q.defer(), cp;
    
    cp = grunt.util.spawn(task, function(error, result, code) {
      grunt.log.writeln();
//      lpad.stdout('    ');

      if (error || code !== 0) {
        if (typeof result.stderr !== "undefined" && result.stderr !== "") {
            grunt.__failed = true;
            grunt.log.warn("---------------");
            grunt.log.warn("Parallel error: ");
            grunt.log.warn("code: ", code);
            grunt.log.warn("error: ", error);
            grunt.log.warn("stderr:", result.stderr);
            grunt.log.warn("---------------");
        }
//        var message = result.stderr || result.stdout;
////        grunt.log.writeln("--------code", message);
////
        
////        lpad.stdout();
////        
//        return deferred.reject();
      }

//      grunt.log.writeln(result);
//      lpad.stdout();

      deferred.resolve();
    });
    
//    cp.on("close",function(){
//        
//    })
//    cp.stderr.on("data", function(data){
//        grunt.log.write("Error:" + data);
//        deferred.reject();
//    });
//
    cp.stdout.on("data", function(data){
        grunt.log.write(data);
    });

    return deferred.promise;
  }

  grunt.registerMultiTask('parallel', 'Run sub-tasks in parallel.', function() {
    var done = this.async();
    var options = this.options({
      grunt: false,
      stream: false 
    });
    
    // If the configuration specifies that the task is a grunt task. Make it so.
    if (options.grunt === true) {
      this.data.tasks = this.data.tasks.map(function(task) {
        return {
          args: [task],
          grunt: true
        }
      });
    }

    // Normalize tasks config.
    this.data.tasks = this.data.tasks.map(function(task) {

      // Default to grunt it a command isn't specified
      if ( ! task.cmd ) {
        task.grunt = true;
      }

      // Pipe to the parent stdout when streaming.
      if ( task.stream || ( task.stream === undefined && options.stream ) ) {
        task.opts = task.opts || {};
        task.opts.stdio = 'inherit';
      }

      return task;
    });

    // Pass verbose flag to spawned tasks
    if (grunt.option('verbose')) {
      this.data.tasks.forEach(function(task) {
        if (task.grunt) {
          task.args.push('--verbose');
        }
      });
    }

    Q.all(this.data.tasks.map(spawn)).then(done, done.bind(this, false));
  });
};
