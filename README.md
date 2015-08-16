# object-methods

Get the list of all of an object's own methods

## Installation

via npm

    $ npm install object-methods

or via git

    $ git clone https://github.com/seerdomin/object-methods

## Usage

```
var objectMethods = require('object-methods');

var obj = {
    'foo': function foo(str) {
        console.log('foo', str);
    },

    'bar': function bar(str) {
        console.log('bar', str);
    },

    'ignored': true
};

var methods = objectMethods(obj);

console.log(methods);
// => ["foo", "hello"]

```

## License

This library is distributed under the MIT License.
