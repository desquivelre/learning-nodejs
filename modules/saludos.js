function saludar (nombre){
    return `Hola ${nombre}`;
}

function saludarHolaMundo(){
    return "Hola mundo!";
}

function imprimirSaludo(nombre){
    console.log(`Hola ${nombre}`);
}

module.exports = {
    saludar: saludar,
    saludarHolaMundo: saludarHolaMundo,
    imprimirSaludo: imprimirSaludo
};