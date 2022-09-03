const { response, request } = require("express");
const { model } = require("mongoose");
const { subirArchivo } = require("../helpers/subir-archivo");
const { Usuario, Producto } = require("../models");
const path = require('path');
const fs = require('fs');

const cargarArchivo = async (req = request, res = response) => {
    
    

   

    const nombre = await subirArchivo(req.files, ['pdf'],'pdfs');
    try{
        res.status(200).json({
            nombre
        });
    }catch(error){
        res.status(400).json({
            error
        })
    }
    
}

const actualizarImagen = async (req= request, res = response)=>{
    const {id, coleccion} = req.params;

    let modelo;

    switch(coleccion){
        case 'usuarios':
            modelo = await Usuario.findById(id);
            if(!modelo){
                return res.status(400).json({
                    msg: `No existe un usuario con el id ${id}`
                });
            }
            


            break;
        case 'productos':
            modelo = await Producto.findById(id);
            if(!modelo){
                return res.status(400).json({
                    msg: `No existe un producto con le id ${id}`
                })
            }
            break;
        default:
            return res.status(500).json({
                msg: 'Se me olvidó validar esto'
            });
    }

    //Limpiar imágenes previas
    try{
        if(modelo.img){
            // Hay que borrar la imagen del servidor
            const pathImagen = path.join(__dirname, '../uploads', coleccion, modelo.img);
            if(fs.existsSync(pathImagen)){
                fs.unlinkSync(pathImagen);
            }

        }
    }catch(error){

    }

    const nombre = await subirArchivo(req.files, undefined, coleccion);
    modelo.img = nombre
            
    await modelo.save();

    res.json({
        modelo
    })
}

module.exports = {
    cargarArchivo,
    actualizarImagen
}