const {response, request} = require('express');
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

const usuariosPost = (req, res) => {
    const body = req.body;
    console.log(body);
    const {nombre, edad} = body;
    //res.send('Hello world')
    res.status(200).send({
        ok: true,
        msg: "post API - controlador",
        nombre, edad
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