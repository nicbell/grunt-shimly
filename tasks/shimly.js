/*
 * grunt-shimly
 * https://github.com/nicbell/Shimly
 */

'use strict';

module.exports = function (grunt) {

    //load requires
    var uglify = require('uglify-js'),
        fs = require('fs'),
        path = require('path');


    //Tasks
    grunt.registerTask('shimly', 'Builds a set of shims', function () {
        createShims(grunt.config.get('shimly'));
    });


    //Create shims
    var createShims = function (config) {
        var files = config.shim,
            banner = '/*! \nIncluded shims: ' + files + '\n*/\n\n';

        grunt.log.writeln(files);

        //Convert files into paths
        for (var i = 0; i < files.length; i++) {
            files[i] = path.normalize(__dirname + '/../src/' + files[i] + '.js');
        }

        var uglified;
        var dest = path.resolve(config.dest);
        var destDir = path.dirname(dest);

        if (config.minify) {
            uglified = uglify.minify(files, { output: null, preserveComments: false, compress: {} });
        } else {
            uglified = uglify.minify(files, { output: { comments: true, beautify: true }, compress: null });
        }

        if (!fs.existsSync(destDir)) {
            fs.mkdirSync(destDir);
        }
        fs.writeFileSync(dest, banner + uglified.code);

        grunt.log.writeln('Shims created at: ' + dest);
    };
};