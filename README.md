# grunt-shimly
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/) [![dependency Status](https://img.shields.io/librariesio/release/npm/grunt-shimly)](https://david-dm.org/nicbell/grunt-shimly#info=dependencies) [![Downloads](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fnicbell%2Fnpm-statistics%2Fmaster%2Fpackages%2Fgrunt-shimly.json&label=Downloads&logo=null&color=violet&style=flat)](https://npm-stat.com/charts.html?package=grunt-shimly&from=2015-03-01)

Create a JavaScript shim set using grunt. 

## List of shims
[See shimly](https://github.com/nicbell/shimly)

## Usage

```javascript
grunt.loadNpmTasks('grunt-shimly');
```

Grunt file config entry:

```javascript
// ...
    shimly: {
      // things you would like to shim (an array of items from the list above)
      shim: ['Array.filter', 'Function.bind', 'localStorage'],
      // output location (relative to your grunt.js file location)
      dest: 'build/shims.js',
      // minify the output (true or false)
      minify: false
    },
// ...
```
