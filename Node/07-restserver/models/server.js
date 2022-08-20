const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

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
        this.app.get('/api', (req, res) => {
            //res.send('Hello world')
            res.status(200).send({
                ok: true,
                msg: "get API"
            });
        });

        this.app.put('/api', (req, res) => {
            //res.send('Hello world')
            res.status(200).send({
                ok: true,
                msg: "put API"
            });
        });

        this.app.post('/api', (req, res) => {
            //res.send('Hello world')
            res.status(200).send({
                ok: true,
                msg: "post API"
            });
        });

        this.app.delete('/api', (req, res) => {
            //res.send('Hello world')
            res.status(200).send({
                ok: true,
                msg: "delete API"
            });
        });

        this.app.patch('/api', (req, res) => {
            //res.send('Hello world')
            res.status(200).send({
                ok: true,
                msg: "patch API"
            });
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto`, this.port);
        });
    }
}

module.exports = Server;