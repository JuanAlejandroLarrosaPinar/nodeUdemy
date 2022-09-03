const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.path = {}
        
        //Middlewares
        this.middleWares();
        //Rutas de mi aplicación
        this.routes();
    }

    

    middleWares() {
        //CORS
        this.app.use(cors());
        
        //Directorio publico
        this.app.use(express.static('public'));
    }

    routes() {
        //this.app.use(this.path.upload, require('../routes/upload'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto`, this.port);
        });
    }
}

module.exports = Server;