const fs = require('fs');

console.clear();

const base = 3;

console.log('----------------------------')
console.log(`Tabla del ${base}`);
console.log('----------------------------')

let salida = '';
for(let i=1;i<=10;i++){
    //console.log(`${base} x ${i} = ${base*i}`);
    salida+= `${base} x ${i} = ${base*i}\n`;
}

//console.log('Salida: ',salida);
const nombreFichero = `tabla-${base}.txt`;
fs.writeFile(nombreFichero, salida, (err)=>{
    if(err) throw err;
    console.log(`${nombreFichero} creado`);
});