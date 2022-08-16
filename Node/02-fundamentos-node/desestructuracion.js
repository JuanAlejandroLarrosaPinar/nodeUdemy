const deadpool = {
    nombre : 'Wade',
    apellido : 'Wilson',
    poder: 'Regeneración',
    edad:50,
    getNombre(){
        return `${this.nombre} ${this.apellido} ${this.poder}`;
    }
}

console.log(deadpool.getNombre());

//const nombre =deadpool.nombre;
//const apellido = deadpool.apellido;
//const poder = deadpool.poder;

//desestructuración
const {
    nombre, 
    apellido, 
    poder, 
    edad = 0 //valor por defecto
} = deadpool; //esta linea equivale a las 3 anteriores.

console.log(nombre, apellido, poder, edad);

//function imprimeHeroe(heroe){
function imprimeHeroe( {nombre, apellido, poder, edad = 0}){
    nombre = 'Alejandro';
    console.log(nombre, apellido, poder,edad);
}

imprimeHeroe(deadpool);

const heroes = ['Deadpool', 'Superman', 'Batman'];

const h1 = heroes[0];
const h2 = heroes[1];
const h3 = heroes[3];

console.log(h1, h2, h3);

//desestructuracion
const[hh1,hh2,hh3] = heroes;
console.log(hh1, hh2, hh3);
//desestructuracion pero sólo queremos el tercero
const [,,hhh3] = heroes;
console.log(hhh3);