const jwt = require('jsonwebtoken');
const {request, response} = require('express');
const Usuario = require('../models/usuario');

const validarJWT = async (req=request, res=response, next)=>{

    const token = req.header('x-token');
    
    if(!token){
        return res.status(401).json({
            msg: ' No hay token en la petición'
        });
    }

    try{
        const {uid} =jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        //console.log(payload);
        const usuarioAutenticado = await Usuario.findById(uid);

        if(!usuarioAutenticado){
            return res.status(401).json({
                msg: 'Token no válido - usuario no existe BBDD'
            });
        }

        //Verificar si el uid tiene estado true
        if (!usuarioAutenticado.estado){
            return res.status(401).json({
                msg: 'Token no válido - usuario con estado: false'
            });
        }
        
        req.usuarioAutenticado=usuarioAutenticado;
        next();
    }catch(error){
        console.log(error);
        res.status(401).json({
            msg: 'Token no válido'
        })
    }

    

}

module.exports = {
    validarJWT
}