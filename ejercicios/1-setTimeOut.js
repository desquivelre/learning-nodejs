// FUNCIÓN MOSTRAR NOMBRE CON UN TIMEOUT ESPECIFICO

const modules = require('../modules.js');

function funcionTimeOut(nombre){
    console.log(modules.saludos.saludar(nombre));;
}

setTimeout(funcionTimeOut, 3000, 'Diego');
