grunt-shimly
======

```javascript
grunt.loadNpmTasks('grunt-shimly');
```

Grunt file config entry:

```javascript
// ... 
    shimly: {
      // things you would like to shim
      // possible options ['Array.filter', 'Array.forEach', 'Array.indexOf', Element.classList', 'Function.bind']
      shim: ['Function.bind'],
      // output location (relative to your grunt.js file location)
      dest: 'build/shims.js',
      // minify the output (true or false)
      minify: false
    },
// ...