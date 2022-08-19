require('dotenv').config();
const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer");
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
                busquedas.ciudad(lugar);
                //Seleccionar el lugar

                //Datos del clima

                //Mostrar resultados
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad: ');
                console.log('Lat: ');
                console.log('Long: ');
                console.log('Temperaturas: ');
                console.log('Min: ');
                console.log('Max: ');
                break;
            case '2':
                break;
        }
        
        if (opt!=='0'){
            await pausa();
        } 
    }while(opt!=='0')
}

main();