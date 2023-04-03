//  My first promise in javascript

const validatePromise = true;

const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (validatePromise) {
            resolve('Successful promise');
        } else {
            reject('Rejected promise');
        }
    }, 3000);
});

const successfulPromise = (valor) => {
    console.log(valor);
}; 

const rejectedPromise = (razonRechazo) => {
    console.log(razonRechazo);
};

firstPromise.then(successfulPromise, rejectedPromise);