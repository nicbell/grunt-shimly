/*
 * grunt-shimly
 * https://github.com/nicbell/Shimly
 */

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

        // JS hint is very relaxed because all the shims are written in different styles
	    jshint: {
            options: {
                globals: { JSON: true },
                browser: true,
                node: true,
                jquery: false,
                debug: false,
                devel: false,
                asi: true,
                laxbreak: true,
                laxcomma: true,
                bitwise: false,
                boss: false,
                curly: false,
                eqeqeq: false,
                eqnull: true,
                evil: false,
                expr: false,
                forin: false,
                immed: true,
                latedef: true,
                loopfunc: false,
                shadow: false,
                supernew: false,
                undef: true,
                newcap: false,
                noempty: true,
                nonew: false,
                nomen: false,
                onevar: false,
                plusplus: false,
                sub: false,
                trailing: true,
                white: false,
                "-W041": false
            },
            files: ['Gruntfile.js', 'tasks/**/*.js', 'src/**/*.js']
        }
    });

	grunt.loadTasks('tasks');

	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('test', ['jshint:files']);
};