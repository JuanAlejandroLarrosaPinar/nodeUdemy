const { number, check } = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('yargs')
        .option('b',{
            alias:'base', //con "node app --base=4" o "node app --b=4" tendremos el mismo resultado.
            type: 'number',
            demandOption: true, //con esto, si no le indicamos la base aparece un mensaje indicando que debemos indicar el argumento requerido.
            
        })
        .option('l',{
            'alias' : 'listar',
            'type': 'boolean',
            'demandOption': true,
            'default' : false
        })
        .check((argv, options)=>{
            if(isNaN(argv.b)){
                throw 'La base tiene que ser un número';
            }
            return true;
        })
        .argv;

console.clear();

//console.log(process.argv);
//const [,,arg3='base=5'] = process.argv;
//const [, base=5] = arg3.split('=');
//console.log(base);

//crearArchivo(base).then(nombreArchivo=>console.log(nombreArchivo, 'creado')).catch('Error al crear fichero');
console.log(process.argv);
console.log(argv);

console.log('base: yargs', argv.base);

crearArchivo(argv.base, argv.listar).then(nombreArchivo=>console.log(nombreArchivo, 'creado')).catch('Error al crear fichero');