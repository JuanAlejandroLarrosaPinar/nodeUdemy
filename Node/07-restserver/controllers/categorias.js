const { request, response, json } = require("express");
const categoria = require("../models/categoria");
const {Categoria} = require('../models/index');

//obtenerCategorias - paginado - total - populate (como el fetch que tira a usuario)

//obtenerCategoría - populate (como el fetch que tira a usuario)

const crearCategoria = async (req=request, res = response) =>{
    const nombre = req.body.nombre.toUpperCase();
    const categoriaDB = await Categoria.findOne({nombre});
    if(categoriaDB){
        return res.status(400).json({
            msg: `La categoría ${nombre} ya existe`
        });
    }

    //Generar la data a guardar
    const data = {
        nombre, 
        usuario: req.usuarioAutenticado._id
    }

    console.log(data);
    const categoria = new Categoria(data);
    //Guardar DB
    await categoria.save();

    res.status(201).json({
        categoria
    });
}

//actualizarCategoria

//borrarCategoria - estado: false

module.exports = {
    crearCategoria
}