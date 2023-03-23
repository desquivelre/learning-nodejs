const saludos = require("./modules/saludos.js");
const operaciones = require("./modules/operaciones.js");
const archivoAsincronas = require("./modules/archivoAsincronas.js");
const archivoSincronas = require("./modules/archivoSincronas.js");


const os = require("os");
const fs = require("fs");

module.exports = {
    saludos:saludos,
    operaciones:operaciones,
    archivoAsincronas:archivoAsincronas,
    archivoSincronas:archivoSincronas,

    os:os,
    fs:fs
}