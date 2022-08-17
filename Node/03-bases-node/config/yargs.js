const argv = require('yargs')
        .option('b',{
            alias:'base', //con "node app --base=4" o "node app --b=4" tendremos el mismo resultado.
            type: 'number',
            demandOption: true, //con esto, si no le indicamos la base aparece un mensaje indicando que debemos indicar el argumento requerido.
            describe:'Es la base de la tabla de multiplicar'
        })
        .option('l',{
            'alias' : 'listar',
            'type': 'boolean',
            'default' : false,
            'describe': 'Muestra la tabla en consola'
        })
        .check((argv, options)=>{
            if(isNaN(argv.b)){
                throw 'La base tiene que ser un número';
            }
            return true;
        })
        .argv;

module.exports = argv;