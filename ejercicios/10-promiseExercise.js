const statusPedido = () => {
    return Math.random() < 0.8;
};

const myPizzaOrder = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (statusPedido()) {
            resolve('Successful pizza order');
        } else {
            reject('Rejected pizza order');
        }
    }, 3000);
});

const managePizzaOrder = (confirmationMessage) => {
    console.log(confirmationMessage);
};

const rejectedPizzaOrder = (errorMessage) => {
    console.log(errorMessage);
};

myPizzaOrder.then(managePizzaOrder).catch(rejectedPizzaOrder);


