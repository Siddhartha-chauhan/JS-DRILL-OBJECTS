# JS Drill – Objects

This project contains a set of JavaScript functions that practice working with objects.  
Each function is written in its own file and tested with a matching test file inside the `test` folder.

## Functions Included
- **keys(obj):** returns an array of all keys in the object  
- **values(obj):** returns an array of all values  
- **mapObject(obj, cb):** applies a callback to each value and returns a new object  
- **pairs(obj):** returns `[key, value]` pairs  
- **invert(obj):** swaps keys and values  
- **defaults(obj, defaultProps):** fills in missing properties using default values  

## Test Object
Most tests use this object:

```js
const testObject = {
  name: 'Bruce Wayne',
  age: 36,
  location: 'Gotham'
};
```
## How to Run Tests

Run any test file using Node:

```bash
node test/testKeys.js
node test/testValues.js
node test/testMapObject.js
node test/testPairs.js
node test/testInvert.js
node test/testDefaults.js
