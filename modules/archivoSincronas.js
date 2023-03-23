const fs = require('fs');

function leerArchivo(nombreArchivo){
    return fs.readFileSync(nombreArchivo, 'utf-8');
}

function eliminarArchivo(nombreArchivo){
    fs.unlinkSync(nombreArchivo);
}

function renombrarArchivo(nombreActual,nombreNuevo){
    fs.renameSync(nombreActual,nombreNuevo);
}

function reemplazarArchivo(nombreActual, archivoNuevo){
    fs.writeFileSync(nombreActual, archivoNuevo);
}

function actualizarArchivo(nombreArchivo, contenidoNuevo){
    fs.appendFileSync(nombreArchivo,contenidoNuevo);
}

module.exports ={
    leerArchivo:leerArchivo,
    eliminarArchivo:eliminarArchivo,
    renombrarArchivo:renombrarArchivo,
    reemplazarArchivo:reemplazarArchivo,
    actualizarArchivo:actualizarArchivo
}