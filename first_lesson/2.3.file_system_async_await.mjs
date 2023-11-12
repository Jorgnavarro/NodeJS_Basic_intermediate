/*Esto sólo se puede usar en los módulos nativos que no puedan implementar promesas, que no tienen promesas nativas
como en el caso de la const fs, que sí lo tiene

const {promisify} = require('node:util')
const readFilePromise = promisify(fs.readFile);
fs.readFilePromise('./archivo.txt', 'utf-8')
    then.(text => {
        console.log('primer texto: ', text)
    })

*/
import {readFile} from 'node:fs/promises';

//const fs = require('node:fs/promises');

console.log('Leyendo el primer archivo------------');
const text = await readFile('./archivo.txt', 'utf-8');
console.log('primer texto =>', text);

console.log("Hacer cosas mientras lee el archivo");

console.log('Leyendo el segundo archivo------------');
const text2 = await readFile('./archivo2.txt', 'utf-8')
console.log("segundo texto =>", text2);







