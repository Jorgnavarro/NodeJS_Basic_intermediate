const fs = require('node:fs/promises');
const path = require('node:path');

//de esta forma podemos mostrar por consola todos los archivos existentes en la ruta actual, funciona como el comando
// ls de la terminal.

//Estamos indicando después del argv[2] que por defecto sea el archivo raiz '.'
//por eso al ejecutar el comando node 4.1.ls_advanced.js seguido debemos de pasarle el folder en este caso para ensayar
//usamos ./mjs, y nos listará los archivos existentes dentro de ese directorio, en caso de que el directorio no exista
//el catch nos mostrará el error manejado. 

const folder = process.argv[2] ?? '.'

async function ls(folder){
    let files
    try{
        files = await fs.readdir(folder);
    }catch{
        console.error(`No se pudo leer el directorio ${folder}`)
        //acá estamos saliendo de forma controlada
        process.exit(1)
    }
    const filesPromises = files.map(async file =>{
        const filePath = path.join(folder, file);
        let stats
        try{
            stats = await fs.stat(filePath) // status- información del archivo
        }catch{
            console.error(`No se pudo leer el archivo ${filePath}`);
            process.exit(1)
        }
        const isDirectory = stats.isDirectory()
        const fileType = isDirectory ? 'd' : 'f';
        const fileSize = stats.size
        const fileModified = stats.mtime.toLocaleString()
        return `${fileType} ${file.padEnd(40)} ${fileSize.toString().padStart(10)} ${fileModified}`
    })
    const filesInfo = await Promise.all(filesPromises);
    filesInfo.map(fileInfo=> console.log(fileInfo));
}



ls(folder);

//con respecto al manejo de errores es importante si estamos trabajando en una empresa que nuestro servicio no se caiga, 
//la mayoría de las veces, en el catch se hace un procces.exit(1), lo que hará que nuestro servicio se caiga, lo que puede
//representar grandes pérdidas monetarias y de otros recursos si no damos un correcto manejo a nuestros errores