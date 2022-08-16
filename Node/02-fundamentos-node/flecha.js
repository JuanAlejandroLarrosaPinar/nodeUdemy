function sumar(a, b=10){
    return a + b;
}

//funciones de flecha
const sumarFlecha = (a, b = 10 )=>{
    return a + b;
}

console.log(sumar(5));
console.log(sumar(5,7));

console.log(sumarFlecha(5));
console.log(sumarFlecha(5,7));


const sumarNoParentesis = (a,b=10) => a +b;

console.log(sumarNoParentesis(5));
console.log(sumarNoParentesis(5,7));

const saludar = () => 'Hola mundo';

console.log(saludar());

function saludarConFlecha(){
    return 'Hola mundo';
}

console.log(saludarConFlecha());