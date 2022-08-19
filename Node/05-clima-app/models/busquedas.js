const fs = require('fs');
const axios = require('axios');

class Busquedas {

    historial = [];
    dbPath= 'db/database.json'; 

    constructor() {
        this.leerBD();
    }

    get historialCapitalizado(){
        return this.historial.map(lugar=>{
            let palabras = lugar.split(' ');
            palabras = palabras.map(p=>p[0].toUpperCase() + p.substring(1));
            return palabras.join(' ');
        })
    }

    get paramsMapbox() {
        return {
            'limit': 5,
            'language': 'es',
            'access_token': process.env.MAPBOX_KEY

        }
    }

    async ciudad(lugar = '') {
        try {
            // peticion http
            //console.log(lugar);
            //const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/MURCIA.json?proximity=ip&types=place%2Cpostcode%2Caddress%2Ccountry&language=es&access_token=pk.eyJ1IjoiYWxlamFuZHJvbGFycm9zYXBpbmFyIiwiYSI6ImNsNzA4OXl4bDBieTQzeHM5eXQzdTR6MmUifQ.oexweAkP68k738bgjkvJfQ');
            //console.log(resp);
            //console.log(resp.data);
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapbox
            });

            const resp = await instance.get();
            //console.log(resp.data.features);
            //console.log(resp.data.features);
            return resp.data.features.map(lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1]
            })); //retornar los lugares
        } catch (error) {
            console.log(error);
            return [];
        }

    }

    get paramsClima() {
        return {
            'appid': process.env.GEO_KEY,
            'units': 'metric',
            'lang': 'es'
        }
    }

    async climaLugar(lat, lon) {
        try {
            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: { ...this.paramsClima, lat, lon }
            });

            const resp = await instance.get();
            //console.log(resp.data);
            const {weather, main} = resp.data;
            return {
                desc: weather[0].description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp
            }
        } catch (error) {
            console.log(error);
        }
    }

    agregarHistorial(lugar = ''){
        //TODO: Prevenir duplicados
        if(this.historial.includes(lugar.toLowerCase())){
            return;
        }
        this.historial.unshift(lugar);
        this.guardarDB();



        //Grabar en DB
    }

    guardarDB(){
        const payLoad = {
            historial: this.historial
        }
        fs.writeFileSync(this.dbPath, JSON.stringify(payLoad));
    }

    leerBD(){
        const existe = fs.existsSync(this.dbPath);
        console.log(existe);
        if(existe){
            const data =fs.readFileSync(this.dbPath,{
                encoding:'utf-8'
            });
            
            this.historial = JSON.parse(data).historial;
            console.log(this.historial);
        }
    }
}

module.exports = Busquedas;