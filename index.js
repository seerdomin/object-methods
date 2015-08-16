'use strict';
module.exports = objectMethods;

function objectMethods(obj) {
    var names = Object.getOwnPropertyNames(obj);

    return names.filter(function filterMethods(name) {
        return (typeof obj[name] === 'function');
    });
}
