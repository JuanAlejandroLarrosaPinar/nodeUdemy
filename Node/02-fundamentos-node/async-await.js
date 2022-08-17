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


const getEmpleado = (id) =>{
    const empleado = empleados.find((e)=> e.id===id);
    return new Promise((resolve, reject)=>{
        if(empleado){
            resolve(empleado);
        }else{
            reject(`El empleado con ${id} no existe`);
        }
    });
    return promesa;
}

const getSalario = (id)=>{
    return new Promise((resolve, reject)=>{
        const salario = salarios.find(s=>s.id===id);
        if(salario){
            resolve(salario);
        }else{
            reject(`El salario con id ${id} no existe`);
        }
    });
}

const getInfoUsuario = async( id ) =>{
    try{
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario del empleado -> ${empleado?.nombre} es de ${salario.salario}€`;
    }catch(error){
        throw error;
    }
    
}

const id = 3;
getInfoUsuario(id).then(msg=>console.log(msg)).catch(error=>console.log(error));



