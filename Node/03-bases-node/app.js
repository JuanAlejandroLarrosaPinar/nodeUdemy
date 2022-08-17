const {crearArchivo} = require('./helpers/multiplicar')

console.clear();

const base = 9;
crearArchivo(base).then(nombreArchivo=>console.log(nombreArchivo, 'creado')).catch('Error al crear fichero');


