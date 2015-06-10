#grunt-shimly [![dependency Status](https://david-dm.org/nicbell/grunt-shimly/status.png)](https://david-dm.org/nicbell/grunt-shimly#info=dependencies) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

Create a JavaScript shim set using grunt.

###List of shims:
[shimly](https://github.com/nicbell/shimly)

###Usage:

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