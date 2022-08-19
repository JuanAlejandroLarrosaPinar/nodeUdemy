const axios = require('axios');

class Busquedas {
    historial = ['Madrid', 'Barcelona'];

    constructor() {
        // TODO: 
    }

    async ciudad(lugar = '') {
        try {
            // peticion http
            //console.log(lugar);
            const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/MURCIA.json?proximity=ip&types=place%2Cpostcode%2Caddress%2Ccountry&language=es&access_token=pk.eyJ1IjoiYWxlamFuZHJvbGFycm9zYXBpbmFyIiwiYSI6ImNsNzA4OXl4bDBieTQzeHM5eXQzdTR6MmUifQ.oexweAkP68k738bgjkvJfQ');
            //console.log(resp);
            console.log(resp.data);

            return []; //retornar los lugares
        } catch (error) {
            console.log(error);
            return [];
        }

    }
}

module.exports = Busquedas;