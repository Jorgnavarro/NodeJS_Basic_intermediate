//process, proporciona información y control sobre el proceso actual de ejecución. Tiene propiedades y métodos que me permitirán
//interactuar en el entorno de nodeJs y me dará información relacionada con el proceso. Por ejemplo: los argumentos de entrada a la
//hora de ejecutar nuestro proceso

console.log(process.argv);

//cuando ejecutamos node 5.process.js "lo que escribamos después de ese comando, son los argumentos que recuperará en un array"

//controlar el proceso y su salida
// 0 indica que el proceso ha sido exitoso y que queremos salir, con 1 indicamos que salgamos del proceso que algo no ha queado bien

//process.exit(1);

//podemos controlar eventos del proceso

process.on('exit', ()=>{
    //limpiar los recursos
});

//current working directory, nos dice desde que carpeta estamos ejecutando el proceso
console.log('dir changed: ', process.cwd());

//platform
console.log(process.env.TEST);