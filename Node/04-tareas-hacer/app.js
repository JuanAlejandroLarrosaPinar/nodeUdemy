const { inquirerMenu, leerInput } = require('./helpers/inquirer');
require('colors');
const { pausa } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');
//const { mostrarMenu, pausa } = require('./helpers/mensajes');

const main = async () =>{
    console.log('Hola mundo');

    let opt = '';
    const tareas = new Tareas();
    do{
        //Imprimir menú
        opt = await inquirerMenu();
        //console.log({opt});
        
        switch(opt){
            case '1':
                //crear opcion
                const desc = await leerInput('Descripción: ');
                console.log(desc);
                tareas.crearTarea(desc);
                break;
            case '2':
                //console.log(tareas._listado);
                console.log(tareas.listadoArr);
                break;
        }

        //tareas._listado[tarea.id] = tarea;
        //console.log(tarea);
        //console.log(tareas);
        if(opt!=='0') await pausa();
    }while(opt!=='0')
    
    //pausa();
}

main();