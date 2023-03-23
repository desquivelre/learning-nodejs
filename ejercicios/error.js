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