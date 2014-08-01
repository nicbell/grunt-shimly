#grunt-shimly [![dependency Status](https://david-dm.org/nicbell/shimly/status.png)](https://david-dm.org/nicbell/shimly#info=dependencies) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

Create a JavaScript shim set using grunt.

###List of shims:
- **Array.every** (Array.prototype.every - [MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every))
- **Array.filter** (Array.prototype.filter - [MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/filter))
- **Array.forEach** (Array.prototype.forEach - [MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach))
- **Array.indexOf** (Array.prototype.indexOf - [MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf))
- **Array.map** (Array.prototype.map - [MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf))
- **Array.some** (Array.prototype.some - [MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some))
- **Element.classList** (element.classList - [Eli Grey's classList.js](https://github.com/eligrey/classList.js))
- **Function.bind** (Function.prototype.bind -[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind))
- **JSON** (JSON.stringify and JSON.parse - [Douglas Crockford's JSON 2](https://github.com/douglascrockford/JSON-js))
- **localStorage** (localStorage and sessionStorage polyfill via cookies - [Remy Sharp's Gist](https://gist.github.com/remy/350433))
- **requestAnimationFrame** (requestAnimationFrame polyfill [Paul Irish's Gist](https://gist.github.com/paulirish/1579671))
- **EventTarget.addEventListener** (addEventListener polyfill – [Eirik Backer Gist](https://gist.github.com/eirikbacker/2864711))
- **Document.getElementsByClassName** (getElementsByClassName polyfill – [SitePoint](http://www.sitepoint.com/5-useful-functions-missing-in-javascript/))

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