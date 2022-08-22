const {response, request} = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');


const usuariosGet = async (req = request, res=response) => {
    const {limite = 5, desde = 0} = req.query;
    const query = {estado:true};
    /*const usuarios = await Usuario.find({
        query
    })
        .skip(parseInt(desde))
        .limit(parseInt(limite));

    const total = await Usuario.countDocuments(query);*/

    const [total, usuarios] = await Promise.all([
        Usuario.countDocuments(query),
        await Usuario.find({
            query
        })
        .skip(parseInt(desde))
        .limit(parseInt(limite))
    ]);

    
    res.json({
        total, usuarios
        
    });
}

const usuariosPut = async (req, res) => {
    const {id} = req.params;
    const {_id, password, google, correo, ...resto} = req.body; //de esta manera ignoramos todo menos el "resto"

    //TODO Validar contra base de datos.
    if(password){
        //Encriptar la contraseña
        const salt = bcryptjs.genSaltSync(); //10 es por defecto. Si le ponemos 100 tarda más
        resto.password = bcryptjs.hashSync(password, salt);
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto);

    res.json({
        msg: 'put API - usuariosPut',
        usuario
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

const usuariosDelete =  async (req, res) => {

    const {id} = req.params;

    const uid = req.uid;
    //borrado físico
    //const usuario = await Usuario.findByIdAndDelete(id);
    const usuario = await Usuario.findByIdAndUpdate(id, {estado:false});

    res.json({
        id,
        uid
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