console.log('Hello world');
//console.log(globalThis);
globalThis.console.log("I don't belive it!")
//commonJs require module
const proud = require("./proud");
/**
We need to destructure the object we created in the file to be exported, for example: 
const {proud} = require("./proud")

 */

console.log(proud('Jorge'));