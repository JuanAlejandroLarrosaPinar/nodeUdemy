const {response} = require('express');
const usuariosGet = (req, res=response) => {
    //res.send('Hello world')
    res.status(200).send({
        ok: true,
        msg: "get API - controlador"
    });
}

const usuariosPut = (req, res) => {
    //res.send('Hello world')
    res.status(200).send({
        ok: true,
        msg: "put API - controlador"
    });
}

const usuariosPost = (req, res) => {
    //res.send('Hello world')
    res.status(200).send({
        ok: true,
        msg: "post API - controlador"
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