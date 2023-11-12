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

Promise.all([
    readFile('./archivo.txt', 'utf-8'),
    readFile('./archivo2.txt', 'utf-8')
]).then(([text, text2]) =>{
    console.log('primer texto =>', text);
    console.log("segundo texto =>", text2);
})










