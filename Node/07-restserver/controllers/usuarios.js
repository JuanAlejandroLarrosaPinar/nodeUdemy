const {response, request} = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');


const usuariosGet = (req = request, res=response) => {
    const params = req.query;
    const {q, nombre, page = 1} = params;
    console.log(q, nombre, page);
    //res.send('Hello world')
    res.status(200).send({
        ok: true,
        msg: "get API - controlador"
    });
}

const usuariosPut = (req, res) => {
    const id = req.params.id;
    console.log(id);
    //res.send('Hello world')
    res.status(200).send({
        ok: true,
        msg: "put API - controlador",
        id
    });
}

const usuariosPost = async (req, res) => {
    
    const {nombre, correo, password, rol} = req.body;
    
    const usuario = new Usuario({nombre, correo, password, rol});

    //Verificar si el correo existe
    //Pasamos esta lógica al middleware.
    /*const existeEmail = await Usuario.findOne({correo});
    if (existeEmail){
        return res.status(400).json({
            msg: 'Ese correo ya está registrado'
        });
    }*/
    //Encriptar la contraseña
    const salt = bcryptjs.genSaltSync(); //10 es por defecto. Si le ponemos 100 tarda más
    usuario.password = bcryptjs.hashSync(password, salt);
    //Guardar en BBDD
    await usuario.save();

    //res.send('Hello world')
    res.status(200).send({
        usuario
    });
}

const usuariosDelete =  (req, res) => {
    //res.send('Hello world')
    res.status(200).send({
        ok: true,
        msg: "delete API - controlador"
    });
}

const usuariosPatch =  (req, res) => {
    //res.send('Hello world')
    res.status(200).send({
        ok: true,
        msg: "patch API - controlador"
    });
}

module.exports={
    usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch
}