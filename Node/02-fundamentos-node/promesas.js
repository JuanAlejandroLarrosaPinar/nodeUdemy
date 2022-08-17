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
const id = 2;
getEmpleado(id)
    .then(empleado=>{
        console.log(empleado);
        getSalario(id).then(s=>console.log(s)).catch(e=>console.log(e));
    })
    .catch(e=>console.log(e));
