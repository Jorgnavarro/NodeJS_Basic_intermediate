// .js por defecto utiliza CommonJS
// .mjs => para utilizar ES Modules
// .cjs => para utilizar CommonJs, de forma forzada

import { sum, sub, mult } from './sum.mjs';

console.log(sum(2,2));
console.log(sub(2,2));
console.log(mult(2,2));
