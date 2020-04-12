const CheckValues = require('../lib/index');
var assert = require('assert');

describe('Check Values', function () {

    let check = {};

    beforeEach(function () {
        check = new CheckValues();
    });

    describe('#propertyNames()', function () {
        it('should return object property names', function () {
            const result = check.propertyNames({
                name: 'wanderson',
                age: 37
            });

            assert.ok(result.includes('name'));
        });
    });

    describe('#propertyNames()', function () {
        it('should return if property belongs to the object', function () {
            const person = {
                name: 'wanderson',
                age: 37
            };
            const result = check.hasProperty(person, 'age');
            assert.ok(result);
        });
    });
});