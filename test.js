'use strict';

var test = require('tape');
var arrayDiff = require('array-difference');
var objectMethods = require('./');

test('Calling objectMethods(obj)', function(t) {
    var names, obj, list, diff;

    names = ['foo', 'bar'];
    obj = {'hello': 'world'};

    names.forEach(function(name) {
        obj[name] = function fn(){};
    });

    list = objectMethods(obj);

    t.ok(
        Array.isArray(list), 
        'Should return an array'
    );

    diff = arrayDiff(names, list);

    t.ok(
        (diff.length === 0), 
        'Should list all of the object\'s own methods'
    );

    t.end();
});
