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
            const resp = await axios.get('https://reqres.in/api/users?page=2');
            //console.log(resp);
            console.log(resp.data.per_page);

            return []; //retornar los lugares
        } catch (error) {
            console.log(error);
            return [];
        }

    }
}

module.exports = Busquedas;