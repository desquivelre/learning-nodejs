const saludos = require("./saludos");
const operaciones = require("./operaciones");
const archivo = require('./archivo');

const os = require("os");
const fs = require("fs");

// ---------------------------------------------------------------------------------------------------------------------------------
// FUNCIÓN MOSTRAR NOMBRE CON UN TIMEOUT ESPECIFICO

// function funcionTimeOut(nombre){
//     console.log(saludos.saludar(nombre));;
// }

// console.log(os.userInfo());

// setTimeout(funcionTimeOut, 3000, 'Diego');

// ---------------------------------------------------------------------------------------------------------------------------------
// ERROR - FUNCIÓN MOSTRAR OPERACIONES CON UN TIMEOUT ESPECIFICO

// function operacion(num1, num2) {
//     console.log(operaciones.sumar(num1, num2));
// }

// let i = 1;

// function loading() {
//     setTimeout(function () {
//         process.stdout.write(".");
//         i++;
//         if (i < 6) { loading(); }
//     }, 500)

//     if(i>=5){
//         setTimeout(operacion, 3000, 2, 3);
//     }
// }

// loading();

// console.log("3");

// ---------------------------------------------------------------------------------------------------------------------------------
// ERROR - PRUEBAS DEL ERROR (PROMESAS)

// let contador = 0;

// function a (){
//     returnA = operaciones.sumar(6,3);
//     contador = 1;

//     console.log(returnA);
// }

// function b(){
//     console.log(operaciones.restar(6,3));
// }

// function c(){
//     console.log(operaciones.dividir(6,3));
// }

// setTimeout(a, 3000);

// if(contador==1){
//     b();
// }

// c();

// ---------------------------------------------------------------------------------------------------------------------------------
// SETIMMEDIATE EJERCICIO

// console.log('Antes de setImmediate()');
// setImmediate(saludos.imprimirSaludo, "Diego");
// console.log('Despues de setImmediate()');

// ---------------------------------------------------------------------------------------------------------------------------------
// SETINTERVAL EJERCICIO

// setInterval(saludos.imprimirSaludo, 1000,'Diego');
// setInterval(operaciones.imprimirSuma, 2000, 2, 5);

// ---------------------------------------------------------------------------------------------------------------------------------
// ARCHIVOS EJERCICIOS

// archivo.leerArchivo('index.html');
// archivo.actualizarArchivo('index.html', '<p>Contenido agregado</p>');
// archivo.reemplazarArchivo('index.html', 'Diego cambio este archivo');
// archivo.renombrarArchivo('main.html', 'index.html');
// archivo.eliminarArchivo('index.html');

// ---------------------------------------------------------------------------------------------------------------------------------


