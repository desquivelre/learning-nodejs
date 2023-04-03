// SETIMMEDIATE EJERCICIO

const modules = require('../modules.js')

console.log('Antes de setImmediate()');
setImmediate(modules.saludos.imprimirSaludo, "Diego");
console.log('Despues de setImmediate()');
