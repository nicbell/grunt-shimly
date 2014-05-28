/**/

module.exports = function (grunt) {
    'use strict';

    grunt.registerTask('shimly', 'Builds a set of shims', function (mode) {

        //load requires
        var uglify = require('uglify-js');
        var fs = require('fs');
        var path = require('path');

        //Get shimly config from user grunt
        var config = grunt.config.get('shimly');

        console.log(config.shim);

        //Convert config into paths
        for (var i = 0; i < config.shim.length; i++) {
            config.shim[i] = path.normalize(__dirname + '/../src/' + config.shim[i] + '.js');
        }

        var uglified;
        var dest = path.resolve(config.dest);
        var destDir = path.dirname(dest);
        var banner = '/*! \nIncluded shims: ' + config.shim + '\n*/\n\n';

        if (config.minify) {
            uglified = uglify.minify(config.shim, { output: null, preserveComments: false, compress: {} });
        }
        else {
            uglified = uglify.minify(config.shim, { output: { comments: true, beautify: true }, compress: null });
        }

        if (!fs.existsSync(destDir)) {
            fs.mkdirSync(destDir);
        }
        fs.writeFileSync(dest, banner + uglified.code);

        console.log('Shims created at: ' + dest);
    });
};