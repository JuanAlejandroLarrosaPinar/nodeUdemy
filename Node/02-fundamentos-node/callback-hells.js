const empleados = [
    {
        id:1,
        nombre: 'Fernando',
    },
    {
        id:2,
        nombre: 'Linda'
    },
    {
        id:3,
        nombre: 'Karen'
    }
];

const salarios = [
    {
        id:1,
        salario: 1000,
    },
    {
        id: 2,
        salario: 1500,
    }
];

const getEmpleado = (id, callback) =>{
    const empleado = empleados.find((e)=> e.id===id);
    if(empleado){
        callback(null, empleado);
    }else{
        callback(`Empleado con ${id} no existe`);
    }
    
}

const getSalario= (id, callback) =>{
    const salario = salarios.find(s=>s.id === id)?.salario;
    
    if(salario){
        callback(null, salario);
    }else{
        callback(`No existe salario para el id ${id}`);
    }
}

const idEmpleado = 3;
const idSalario = 3;
getEmpleado(idEmpleado, (err, empleado)=>{ //el primer argumento va a ser un error
    if(err){
        console.log('¡ERROR empleado!');
        return console.log(err);
    }
    console.log('¡Empleado existe!');
    console.log('Empleado json: ', empleado);
    console.log('Empleado nombre:', empleado.nombre);

    getSalario(idSalario,(err, salario)=>{
        if(err){
            console.log('¡ERROR Salario!');
            return console.log(err);
        }
    
        console.log(salario);
    });
});



/*
getSalario(idSalario,(err, salario)=>{
    if(err){
        console.log('ERROR!');
        return console.log(err);
    }

    console.log(salario);
});
*/