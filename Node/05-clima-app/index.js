require('dotenv').config();
const { leerInput, inquirerMenu, pausa, listarLugares } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

//console.log(process.env.MAPBOX_KEY);
const main = async()=>{
    const busquedas = new Busquedas();
    let opt = '';
    do{
        opt = await inquirerMenu();
        switch(opt){
            case '1':
                //Mostrar mensaje
                const lugar = await leerInput('Ciudad: ');
                //Buscar los lugares
                const lugares = await busquedas.ciudad(lugar);
                //console.log(lugares);
                //Seleccionar el lugar
                const id = await listarLugares(lugares);
                if(id==='0') continue;

                const lugarSel = lugares.find(lugar=> lugar.id===id);
                busquedas.agregarHistorial(lugarSel.nombre);
                //Datos del clima
                const clima = await busquedas.climaLugar(lugarSel.lat, lugarSel.lng);
                //Mostrar resultados
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad: ', lugarSel.nombre.green);
                console.log('Lat: ', lugarSel.lat);
                console.log('Long: ', lugarSel.lng);
                console.log('Temperaturas: '.blue);
                console.log('Min: ', clima.min);
                console.log('Max: ', clima.max);
                console.log('Cómo está el clima:', clima.desc);
                break;
            case '2':
                busquedas.historial.forEach((lugar, i)=>{
                    const idx = `${i+1}`.green;
                    console.log(`${idx} ${lugar}`);
                })
                break;
        }
        
        if (opt!=='0'){
            await pausa();
        } 
    }while(opt!=='0')
}

main();