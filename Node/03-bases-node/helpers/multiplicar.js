const fs = require('fs');
const colors = require('colors');
const crearArchivo = async (base=5, listar=false)=>{
    try{
        
    
    let salida = '';
    for(let i=1;i<=10;i++){
        //console.log(`${base} x ${i} = ${base*i}`);
        salida+= `${base} x ${i} = ${base*i}\n`;
    }
    
    if(listar){
        console.log('----------------------------')
        console.log('Tabla del', base);
        console.log('----------------------------')
        console.log(colors.green(salida));
    }
    
    const nombreFichero = `tabla-${base}.txt`;
    /*fs.writeFile(nombreFichero, salida, (err)=>{
        if(err) throw err;
        console.log(`${nombreFichero} creado`);
    });*/
    fs.writeFileSync(nombreFichero, salida);
    return nombreFichero;
    }catch(error){
        throw error;
    }
}

module.exports = {
    //crearArchivo: crearArchivo
    crearArchivo
}