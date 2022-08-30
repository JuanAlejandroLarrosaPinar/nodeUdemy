const { request, response, json } = require("express");
const categoria = require("../models/categoria");
const {Categoria} = require('../models/index');

//obtenerCategorias - paginado - total - populate (como el fetch que tira a usuario)
const obtenerCategorias = async (req = request, res = response)=>{
    const {limite = 5, desde = 0} = req.query;
    console.log('obtenerCategorias');
    const query = {estado:true};
    /*const usuarios = await Usuario.find({
        query
    })
        .skip(parseInt(desde))
        .limit(parseInt(limite));

    const total = await Usuario.countDocuments(query);*/

    const [total, categorias] = await Promise.all([
        Categoria.countDocuments(query),
        await Categoria.find(query)
        //.populate('usuario', ['nombre','estado'])
        .populate('usuario', 'nombre')
        .skip(parseInt(desde))
        .limit(parseInt(limite))
    ]);

    
    res.json({
        total, categorias
        
    });
}
//obtenerCategoría - populate (como el fetch que tira a usuario)
const obtenerCategoria = async(req=request, res = response)=>{
    const {id} = req.params;
    

    const categoria = await Categoria.findById(id).populate('usuario', 'nombre');

    res.json({
        categoria
    });
}
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
const actualizarCategoria = async(req = request, res =response) =>{
    const {id} = req.params;
    const {estado, usuario, ...data} = req.body;
    data.nombre = data.nombre.toUpperCase();
    data.usuario = req.usuarioAutenticado._id;

    const categoria = await Categoria.findByIdAndUpdate(id, data, {
        new: true
    });

    res.json(categoria);


}
//borrarCategoria - estado: false
const borrarCategoria = async(req=request, res = response)=>{

    const {id} = req.params;
    const categoriaBorrada = await Categoria.findByIdAndUpdate(id, {
        estado:false
    },
    {
        new: true
    });

    res.json(categoriaBorrada);
}
module.exports = {
    crearCategoria,
    obtenerCategorias,
    obtenerCategoria,
    actualizarCategoria,
    borrarCategoria
}