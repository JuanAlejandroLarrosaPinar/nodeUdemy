const { request, response, json } = require("express");

const { Producto} = require('../models/index');

//obtenerProductos - paginado - total - populate (como el fetch que tira a usuario)
const obtenerProductos = async (req = request, res = response)=>{
    const {limite = 5, desde = 0} = req.query;
    
    const query = {estado:true};
    /*const usuarios = await Usuario.find({
        query
    })
        .skip(parseInt(desde))
        .limit(parseInt(limite));

    const total = await Usuario.countDocuments(query);*/

    const [total, productos] = await Promise.all([
        Producto.countDocuments(query),
        await Producto.find(query)
        //.populate('usuario', ['nombre','estado'])
        .populate('usuario', 'nombre')
        .populate('categoria','nombre')
        .skip(parseInt(desde))
        .limit(parseInt(limite))
    ]);

    
    res.json({
        total, productos
        
    });
}
//obtenerProducto - populate (como el fetch que tira a usuario)
const obtenerProducto = async(req=request, res = response)=>{
    const {id} = req.params;
    

    const producto = await Producto.findById(id).populate('usuario', 'nombre').populate('categoria', ['nombre', 'estado']);

    res.json({
        producto
    });
}
const crearProducto = async (req=request, res = response) =>{
    const nombre = req.body.nombre.toUpperCase();
    const productoDB = await Producto.findOne({nombre});
    if(productoDB){
        return res.status(400).json({
            msg: `El producto ${nombre} ya existe`
        });
    }

    //Generar la data a guardar
    const data = {
        ...req.body,
        nombre: req.body.nombre.toUpperCase(), 
        usuario: req.usuarioAutenticado._id,

    }

    
    const producto = new Producto(data);
    //Guardar DB
    await producto.save();

    res.status(201).json({
        producto
    });
}

//actualizarCategoria
const actualizarProducto = async(req = request, res =response) =>{
    const {id} = req.params;
    const {estado, usuario, ...data} = req.body;
    data.nombre = data.nombre.toUpperCase();
    data.usuario = req.usuarioAutenticado._id;

    const producto = await Producto.findByIdAndUpdate(id, data, {
        new: true
    });

    res.json(producto);


}
//borrarCategoria - estado: false
const borrarProducto = async(req=request, res = response)=>{

    const {id} = req.params;
    const productoBorrado = await Producto.findByIdAndUpdate(id, {
        estado:false
    },
    {
        new: true
    });

    res.json(productoBorrado);
}
module.exports = {
    crearProducto,
    obtenerProductos,
    obtenerProducto,
    actualizarProducto,
    borrarProducto
}