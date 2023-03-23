const saludos = require("./modules/saludos.js");
const operaciones = require("./modules/operaciones.js");
const archivo = require('./modules/archivo.js');

const os = require("os");
const fs = require("fs");

module.exports = {
    saludos:saludos,
    operaciones:operaciones,
    archivo:archivo,
    
    os:os,
    fs:fs
}