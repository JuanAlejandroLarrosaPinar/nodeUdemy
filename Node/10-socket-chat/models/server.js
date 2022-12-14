const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');
const fileUpload = require('express-fileupload');
const {createServer} = require('http');
const { socketController } = require('../sockets/controller');
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //socket io
        this.server = createServer(this.app);
        this.io = require('socket.io')(this.server);

        this.path = {
            aut: '/api/auth',
            buscar: '/api/buscar',
            categorias : '/api/categorias',
            productos: '/api/productos',
            usuarios: '/api/usuarios',
            upload: '/api/upload'
        }
        
        //Conectar a base de datos
        //this.conectarDB();

        //Middlewares
        this.middleWares();
        //Rutas de mi aplicación
        //this.routes();

        //Sockets
        this.sockets();
    }

    async conectarDB(){
        await dbConnection();
    }

    middleWares() {
        //CORS
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json());
        //Directorio publico
        this.app.use(express.static('public'));

        //para la carga de archivos
        this.app.use(fileUpload({
            useTempFiles: true,
            tempFileDir: '/tmp/',
            createParentPath: true
        }))
    }

    routes() {
        this.app.use(this.path.aut, require('../routes/auth'));
        this.app.use(this.path.usuarios, require('../routes/usuarios'));
        this.app.use(this.path.categorias, require('../routes/categorias'));
        this.app.use(this.path.productos, require('../routes/productos'));
        this.app.use(this.path.buscar, require('../routes/buscar'));
        this.app.use(this.path.upload, require('../routes/upload'));
    }

    sockets(){
        
        this.io.on('connection', socketController);
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto`, this.port);
        });
    }
}

module.exports = Server;