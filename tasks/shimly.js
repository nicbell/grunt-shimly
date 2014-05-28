/**/

module.exports = function (grunt) {
	'use strict';

  	grunt.registerTask('shimly', 'Builds a set of shims', function (mode) {

      var uglify = require('uglify-js');
      var fs = require('fs');
      var path = require('path');

  		var config = grunt.config.get('shimly');

      var pkg = grunt.file.readJSON('package.json');
      var banner = '/*! ' + pkg.name + ' - v' + pkg.version +
          '\n------------------------------\n' +
          'Included shims: ' + config.shim + '\n' +
          '.*/\n\n';

      console.log(config.shim);

      //Get paths
  		for(var i = 0; i < config.shim.length; i++) {
  			config.shim[i] = path.normalize(__dirname + '/../src/' + config.shim[i] + '.js');
  		}

      var uglified;

      if(config.minify) {
        uglified = uglify.minify(config.shim, { output: null, preserveComments: false, compress: {} });
      }
      else {
        uglified = uglify.minify(config.shim, { output: { comments: true, beautify: true }, compress: null });
      }

  		fs.writeFileSync(path.resolve(config.dest), banner + uglified.code);

      console.log('Shims created at: ' + path.resolve(config.dest));
  	}); 
};