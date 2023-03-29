// ARCHIVOS EJERCICIOS (funciones asíncronas)

const modules = require('../modules.js');

modules.archivoAsincronas.leerArchivo('./index.html');
modules.archivoAsincronas.actualizarArchivo('./index.html', '<p>Contenido agregado</p>');
modules.archivoAsincronas.reemplazarArchivo('./index.html', 'Diego cambio este archivo');
modules.archivoAsincronas.renombrarArchivo('./main.html', './index.html');
modules.archivoAsincronas.eliminarArchivo('./index.html');