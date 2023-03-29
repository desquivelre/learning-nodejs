const validatePromise = false;

const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (validatePromise) {
            resolve('Successful promise');
        } else {
            reject('Rejected promise');
        }
    }, 3000);
});

firstPromise.then((valor) => {
    console.log(valor);
}, (razonRechazo) => {
    console.log(razonRechazo);
});

