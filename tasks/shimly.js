/*
 * grunt-shimly
 * https://github.com/nicbell/grunt-shimly
 */

'use strict';

module.exports = function (grunt) {

    //load requires
    var shimly = require('shimly');
    
    //Create shims
    var createShims = function (config) {
        shimly.shim(config.shim, config.minify, config.dest);
    };

    //Tasks
    grunt.registerTask('shimly', 'Builds a set of shims', function () {
        createShims(grunt.config.get('shimly'));
    });
};