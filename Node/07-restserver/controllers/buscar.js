const { request, response } = require("express");
const { Usuario } = require("../models");
const {ObjectId} = require('mongoose').Types;

const coleccionesPermitidas = [
    'categoria',
    'productos',
    'roles',
    'usuarios'
    
];

const buscarUsuarios = async(termino= '', res= response)=>{
    const esMongoId = ObjectId.isValid(termino);
    if(esMongoId){
        const usuario = await Usuario.findById(termino);
        res.json({
            results: (usuario)?[usuario]: []
        })
    }
}

const buscar = (req= request, res = response)=>{
    const {coleccion, termino} = req.params;

    if(!coleccionesPermitidas.includes(coleccion)){
        return res.status(400).json({
            msg: `Las colecciones permitidas son: ${coleccionesPermitidas}`
        });
    }

    switch(coleccion){
        case 'categoria':
            break;
        case 'productos':
            break;
        case 'usuarios':
            buscarUsuarios(termino, res);
            break;
        default:
            res.status(500).json({
                msg:'Se le olvido hacer esta búsqueda'
            })
    }
}

module.exports = {
    buscar
}