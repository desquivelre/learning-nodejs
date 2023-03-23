function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function dividir(a, b) {
    return a / b;
}

function multiplicar(a, b) {
    return a * b;
}

function imprimirSuma(a,b){
    console.log(a+b);
}

module.exports = {
    sumar:sumar,
    restar:restar,
    dividir:dividir,
    multiplicar:multiplicar,
    imprimirSuma:imprimirSuma
};