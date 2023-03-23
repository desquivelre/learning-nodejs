const modules = require('../modules.js');

// FUNCIÓN MOSTRAR NOMBRE CON UN TIMEOUT ESPECIFICO

function funcionTimeOut(nombre){
    console.log(modules.saludos.saludar(nombre));;
}

setTimeout(funcionTimeOut, 3000, 'Diego');
