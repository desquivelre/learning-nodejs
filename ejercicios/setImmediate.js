const modules = require('../modules.js')

// SETIMMEDIATE EJERCICIO

console.log('Antes de setImmediate()');
setImmediate(modules.saludos.imprimirSaludo, "Diego");
console.log('Despues de setImmediate()');
