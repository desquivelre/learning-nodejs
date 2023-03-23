const fs = require('fs');

function leerArchivo(nombreArchivo) {
    fs.readFile(nombreArchivo, 'utf-8', (err, data) => {
        if (err) {
            throw err;
        }
        console.log(data);
    });
}

function renombrarArchivo(nombreActual, nombreNuevo) {
    fs.rename(nombreActual, nombreNuevo, (err) => {
        if (err) {
            throw err;
        }
        console.log('Nombre cambiado exitosamente!');
    });
}

function actualizarArchivo(nombreArchivo, contenidoAgregar) {
    fs.appendFile(nombreArchivo, contenidoAgregar, (err) => {
        if (err) {
            throw err;
        }
        console.log('Archivo actualizado!');
    });
}

function reemplazarArchivo(nombreArchivo, contenidoAgregar){
    fs.writeFile(nombreArchivo, contenidoAgregar, (err)=>{
        if(err){
            throw err;
        }
        console.log('Contenido reemplazado exitosamente!');
    });
}

function eliminarArchivo(nombreArchivo){
    fs.unlink(nombreArchivo, (err)=>{
        if(err){
            throw err;
        }
        console.log('Archivo eliminado exitosamente!');
    });
}

module.exports = {
    leerArchivo: leerArchivo,
    renombrarArchivo: renombrarArchivo,
    actualizarArchivo: actualizarArchivo,
    reemplazarArchivo: reemplazarArchivo,
    eliminarArchivo: eliminarArchivo
}