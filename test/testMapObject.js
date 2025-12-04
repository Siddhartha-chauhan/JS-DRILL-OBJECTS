import { mapObject } from '../mapObject.js';

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

const mapped = mapObject(testObject, val => typeof val === 'number' ? val + 1 : val.toUpperCase());
console.log(mapped);

