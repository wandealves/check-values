'use strict';

//imports
const property = require('./core/property');

function CheckValues() {}

CheckValues.prototype.propertyNames = (obj) => {
    return property.names(obj);
}

CheckValues.prototype.hasProperty = (obj, propertyName) => {
    return property.has(obj, propertyName);
}

module.exports = CheckValues;