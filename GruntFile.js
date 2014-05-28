'use strict';

module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
	    pkg: grunt.file.readJSON('package.json'),
	    meta: {
	      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n' +
	        '------------------------------\n' +
	        'Build @ <%= grunt.template.today("yyyy-mm-dd") %>\n' +
	        '<%= pkg.repository.url %>\n' +
	        '.*/'
	    },

	   	watch: {
	      scripts: {
	        files: ['Gruntfile.js', 'tasks/**/*.js', 'lib/**/*.js'],
	        tasks: 'default',
	        options: {
	        	interrupt: true
	        }
	      }
	    }
    });

	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', []);
	//grunt.registerTask('travis', 'default');
};