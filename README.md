# check-values

Object property checker

Check validator that enables validation on multiple parameters at once.

## Instalation and usage

### Instalation

```
npm i check-values
```

### Basic usage

```
let CheckValues = require('check-values');
let check =  new CheckValues();

//examples: propertyNames, hasMahasPropertyxLen
const person = {name:'John', age:20};

const names = check.propertyNames(person);
const has = check.hasProperty(person, 'name');

console.log('property names', names);
console.log('has', has);
```
