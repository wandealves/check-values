'use strict';

exports.names = (object) => {
    if (!object) return {};

    return Reflect.ownKeys(object);
}

exports.has = (object, propertyName) => {
    if (!object || !propertyName) return false;

    return Reflect.has(object, propertyName);
}