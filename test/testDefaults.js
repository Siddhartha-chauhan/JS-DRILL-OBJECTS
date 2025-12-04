import { defaults } from '../defaults.js';

const testObject = { name: 'Bruce Wayne', age: 36 };
const defaultProps = { name: 'Clark Kent', age: 40, location: 'Gotham' };

console.log(defaults(testObject, defaultProps));