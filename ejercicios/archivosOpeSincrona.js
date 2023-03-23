const modules = require('../modules.js');

// ARCHI VOS EJERCICIOS(funciones síncronas)

console.log(modules.archivoSincronas.leerArchivo('./index.html'));
modules.archivoSincronas.renombrarArchivo('./index.html', './main.html');
modules.archivoSincronas.reemplazarArchivo('./index.html', './main.html');
modules.archivoSincronas.actualizarArchivo('./index.html', '<p>Contenido agregado <p>');
modules.archivoSincronas.eliminarArchivo('./index.html');