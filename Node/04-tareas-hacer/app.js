const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, leerInput, listadoTareasBorrar, confirmar, mostrarListadoCheckList } = require('./helpers/inquirer');
require('colors');
const { pausa } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');
//const { mostrarMenu, pausa } = require('./helpers/mensajes');

const main = async () => {
    //console.log('Hola mundo');

    let opt = '';
    const tareas = new Tareas();
    const tareasDB = leerDB();
    console.log(tareasDB);
    if (tareasDB) {
        //tareas = tareasDB;
        tareas.cargarTareasFromArray(tareasDB);
    }


    do {
        //Imprimir menú
        opt = await inquirerMenu();
        //console.log({opt});

        switch (opt) {
            case '1':
                //crear opcion
                const desc = await leerInput('Descripción: ');
                console.log(desc);
                tareas.crearTarea(desc);
                break;
            case '2':
                //console.log(tareas._listado);
                //console.log(tareas.listadoArr);
                tareas.listadoCompleto();
                break;
            case '3':
                tareas.listarPendientesCompletadas(true);
                break;
            case '4':
                tareas.listarPendientesCompletadas(false);
                break;
            case '5':
                const ids = await mostrarListadoCheckList(tareas.listadoArr);
                console.log(ids);
                tareas.toggleCompletadas(ids);
                break;
            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr);
                if (id !== '0') {
                    const ok = await confirmar('¿Está seguro?');
                    if (ok) {
                        tareas.borrarTarea(id);
                        console.log('Tarea borrada');
                    }
                }


                break;
        }

        //tareas._listado[tarea.id] = tarea;
        //console.log(tarea);
        //console.log(tareas);
        guardarDB(tareas.listadoArr);
        if (opt !== '0') await pausa();
    } while (opt !== '0')

    //pausa();
}

main();