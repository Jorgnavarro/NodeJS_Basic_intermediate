const path = require('node:path');

//averiguar la orientación de la barra de las rutas en tu OS(Operating System)
console.log(path.sep);

/*
Teniendo en cuenta lo anterior, se entiende que algunos sistemas operativos tienen la orientación de la barra diferente
lo que puede ocasionar problemas y crashear la aplicación, por ello, es una buena práctica, unir las rutas con path.join
de forma automática, se unirán las rutas utilizando la orientación del OS donde se esté ejecutando.
*/

//unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt');
console.log("Join path: ", filePath);

//obtener el nombre del fichero
const base = path.basename('/temp/hidden_files/keys.txt')
console.log('name of the file in a path: ', base);

//obtener nombre del fichero sin la extensióin
const fileName = path.basename('/temp/hidden_files/keys.txt', '.txt')
console.log('name of the file in a path without extension: ', fileName);

//Obtener la extension de un archivo, siempre te va a dar la extesión definitiva
const extension = path.extname('image.jpg');
console.log('extension of the file: ', extension);

