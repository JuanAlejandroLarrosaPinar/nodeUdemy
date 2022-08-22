const jwt = require('jsonwebtoken');
const {request, response} = require('express');

const validarJWT = (req=request, res=response, next)=>{

    const token = req.header('x-token');
    
    if(!token){
        return res.status(401).json({
            msg: ' No hay token en la petición'
        });
    }

    try{
        const {uid} =jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        //console.log(payload);
        req.uid=uid;
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