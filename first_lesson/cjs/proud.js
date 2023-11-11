
function proud (name){
    return `${name}, debes estar orgulloso de ti mismo, paso a paso y con constancia y esfuerzo lo estás logrando.`
}

//CommonJs exports module, traditional way.
/*module.exports ={
    proud(this is the same than) =>
    proud: function proud(name){} or
    proud: proud
} 
this alternative, avoid to change the name of the function when we use this function in another module.

*/
module.exports = proud;