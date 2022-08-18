const { inquirerMenu } = require('./helpers/inquirer');
require('colors');
const { pausa } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');
//const { mostrarMenu, pausa } = require('./helpers/mensajes');

const main = async () =>{
    console.log('Hola mundo');

    let opt = '';
    do{
        //opt = await inquirerMenu();
        //console.log(opt);
        const tareas = new Tareas();
        const tarea = new Tarea('Comprar comida');

        tareas._listado[tarea.id] = tarea;
        console.log(tarea);
        console.log(tareas);
        if(opt!=='0') await pausa();
    }while(opt!=='0')
    
    //pausa();
}

main();