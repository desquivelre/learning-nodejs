//  EventEmitter features

const EventEmitter = require('events');
const modules = require('../modules')

const emisorProductos = new EventEmitter();

emisorProductos.on('compra', () => {
    console.log(modules.saludos.saludar('Diego'))
});

emisorProductos.on('compra', () => {
    console.log('Se realizó una compra.');
});

emisorProductos.on('compraConSaludo', (nombre) => {
    console.log(`Se realizó una compra por ${nombre}.`);
});

emisorProductos.emit('compra');
emisorProductos.emit('compraConSaludo', 'Diego');