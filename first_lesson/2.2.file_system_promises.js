/*Esto sólo se puede usar en los módulos nativos que no puedan implementar promesas

const {promisify} = require('node:util')
const readFilePromise = promisify(fs.readFile);
fs.readFilePromise('./archivo.txt', 'utf-8')
    then.(text => {
        console.log('primer texto: ', text)
    })

*/

const fs = require('node:fs/promises');

//asyncronic way
console.log('Leyendo el primer archivo------------');
fs.readFile('./archivo.txt', 'utf-8')
    .then(text =>{
        console.log('primer texto => ', text);
    })

console.log("Hacer cosas mientras lee el archivo");

console.log('Leyendo el segundo archivo------------');
fs.readFile('./archivo2.txt', 'utf-8')
    .then(text => {
        console.log("segundo texto =>", text);
    })







