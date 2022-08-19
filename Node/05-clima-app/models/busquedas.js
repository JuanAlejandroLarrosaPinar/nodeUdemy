const axios = require('axios');

class Busquedas {
    historial = ['Madrid', 'Barcelona'];

    constructor() {
        // TODO: 
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
}

module.exports = Busquedas;