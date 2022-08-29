const {request, response} = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/generarJWT');

const login = async (req = request, res = response) =>{
    const {correo, password} = req.body;

    //Verificar si el email existe
    const usuario = await Usuario.findOne({correo});
    if(!usuario){
        return res.status(400).json({
            msg: 'Usuario / Password no son correctos - correo'
        });
    }
    //Si el usuario está activo
    if(!usuario.estado){
        return res.status(400).json({
            msg: ' Usuario / Password no son correctos - estado: false'
        })
    }
    //Verificar la contraseña
    const validPassword = bcryptjs.compareSync(password, usuario.password);
    if(!validPassword){
        return res.status(400).json({
            msg: 'Usuario / Password no son correctos - password'
        })
    }
    //Generar el JWT
    const token = await generarJWT(usuario.id);
    try{
        res.json({
            usuario,
            token
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
    
    
}

const googleSignIn = async(req, res=response)=>{
    const {id_token} = req.body;
    res.json({
        msg: 'Todo bien',
        id_token
    });
}

module.exports = {
    login,
    googleSignIn
}