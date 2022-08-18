const Tarea = require("./tarea");

class Tareas{
    _listado = {};

    constructor(){
        this._listado = {};
    }

    crearTarea(descr = ''){
        const tarea = new Tarea(descr);
        this._listado[tarea.id] = tarea;
    }


}

module.exports=Tareas;