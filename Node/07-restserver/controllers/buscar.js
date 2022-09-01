const { request, response } = require("express");
const { Usuario, Categoria, Producto } = require("../models");
const { ObjectId } = require('mongoose').Types;

const coleccionesPermitidas = [
    'categoria',
    'productos',
    'roles',
    'usuarios'

];

const buscarUsuarios = async (termino = '', res = response) => {
    const esMongoId = ObjectId.isValid(termino);
    if (esMongoId) {
        const usuario = await Usuario.findById(termino);
        return res.json({
            results: (usuario) ? [usuario] : []
        })
    }

    const regex = new RegExp(termino, 'i'); //para el case sensitive
    const usuarios = await Usuario.find({
        $or: [ //para meter la condicion or, igual que en sql
            { nombre: regex }, //mandamos la expresion regular en lugar del término
            { correo: regex }
        ],
        $and: [
            { estado: true }
        ]




    });

    return res.json({
        results: usuarios
    })
}

const buscarCategorias = async (termino = '', res = response) => {
    const esMongoId = ObjectId.isValid(termino);
    if (esMongoId) {
        const categoria = await Categoria.findById(termino);
        return res.json({
            results: (categoria) ? [categoria] : []
        })
    }

    const regex = new RegExp(termino, 'i'); //para el case sensitive
    const categorias = await Categoria.find({
        nombre: regex, estado: true
    });

    return res.json({
        results: categorias
    })
}

const buscarProductos = async (termino = '', res = response) => {
    const esMongoId = ObjectId.isValid(termino);
    if (esMongoId) {
        const producto = await Producto.findById(termino).populate('categoria', 'nombre');
        return res.json({
            results: (producto) ? [producto] : []
        })
    }

    const regex = new RegExp(termino, 'i'); //para el case sensitive
    const productos = await Producto.find({
        nombre: regex, estado: true
        //, ObjectId : '6310d782039853b3c152c9d9'// por si queremos filtrar por la categoría
    }).populate('categoria', 'nombre');;

    return res.json({
        results: productos
    })
}

const buscar = (req = request, res = response) => {
    const { coleccion, termino } = req.params;

    if (!coleccionesPermitidas.includes(coleccion)) {
        return res.status(400).json({
            msg: `Las colecciones permitidas son: ${coleccionesPermitidas}`
        });
    }

    switch (coleccion) {
        case 'categoria':
            buscarCategorias(termino, res);
            break;
        case 'productos':
            buscarProductos(termino, res);
            break;
        case 'usuarios':
            buscarUsuarios(termino, res);
            break;
        default:
            res.status(500).json({
                msg: 'Se le olvido hacer esta búsqueda'
            })
    }
}

module.exports = {
    buscar
}