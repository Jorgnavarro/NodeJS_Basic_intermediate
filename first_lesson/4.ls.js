const fs = require('node:fs');

//de esta forma podemos mostrar por consola todos los archivos existentes en la ruta actual, funciona como el comando
// ls de la terminal.


fs.readdir('.', (err, files)=>{
    if(err){
        console.error('error al leer el directorio: ', err);
        return; 
    }

    files.forEach(file =>{
        console.log(file);
    })
})

/*Another way with promises
const fs = require('node:fs/promises');

fs.readdir('.')
    .then(files =>{
        files.forEach(file =>{
            console.log(file)
        })
    }).catch((err)=>{
        if(err){
            console.error('Error al leer el directorio', err)
            return;
        }
    })


*/