#grunt-shimly

Create a shim set using grunt.

###List of shims:
- Array.filter
- Array.forEach
- Array.indexOf
- Element.classList
- Function.bind

###Usage: 

```javascript
grunt.loadNpmTasks('grunt-shimly');
```

Grunt file config entry:

```javascript
// ... 
    shimly: {
      // things you would like to shim (an array of items from the list above)
      shim: ['Array.filter', 'Function.bind'],
      // output location (relative to your grunt.js file location)
      dest: 'build/shims.js',
      // minify the output (true or false)
      minify: false
    },
// ...
```