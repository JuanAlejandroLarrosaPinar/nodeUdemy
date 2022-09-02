const { Producto, Categoria } = require("../models");
const Role = require("../models/role");
const Usuario = require('../models/usuario');

const esRoleValido = async (rol = '') => {
    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
        throw new Error(`El rol ${rol} no está registrado en la BBDD`);
    }
}

const emailExiste = async(correo) =>{
    const usuario = await Usuario.findOne({correo});
    
    if(usuario){
        throw new Error(`Ya existe un usuario con el correo ${correo} en la BBDD`);
    }
}

const existeUsuarioPorId = async(id) =>{
    const existeUsuario = await Usuario.findById(id);
    if(!existeUsuario){
        throw new Error(`El id ${id} no existe`);
    }
}

const existeCategoriaPorId = async (id)=>{
    const existeCategoria = await Categoria.findById(id);
    if(!existeCategoria){
        throw new Error(`No existe la categoría con id ${id}`);
    }
}

const existeProductoPorId = async (id)=>{
    const existeProducto = await Producto.findById(id);
    if(!existeProducto){
        throw new Error(`No existe el producto con id ${id}`);
    }
}

const coleccionesPermitidas = (coleccion, coleccionesPermitidas=[])=>{
    if(!coleccionesPermitidas.includes(coleccion)){
        throw new Error(`La colección ${coleccion} no está permitida` );
    }

    return true;
}

module.exports = {
    esRoleValido, emailExiste, existeUsuarioPorId,
    existeCategoriaPorId, existeProductoPorId,
    coleccionesPermitidas
}