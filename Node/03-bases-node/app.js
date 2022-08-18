const { number, check } = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

//console.log(process.argv);
//const [,,arg3='base=5'] = process.argv;
//const [, base=5] = arg3.split('=');
//console.log(base);

//crearArchivo(base).then(nombreArchivo=>console.log(nombreArchivo, 'creado')).catch('Error al crear fichero');
console.log(process.argv);
console.log(argv);

console.log('base: yargs', argv.base);

crearArchivo(argv.base, argv.listar).then(nombreArchivo=>console.log(nombreArchivo.rainbow, 'creado')).catch('Error al crear fichero');