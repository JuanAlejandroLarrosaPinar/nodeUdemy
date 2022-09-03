const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        //socket io: http://localhost:8080/socket.io/socket.io.js fichero js que socket.io nos ofrece
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);

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
        this.server.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto`, this.port);
        });
    }
}

module.exports = Server;