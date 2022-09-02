const { response, request } = require("express");
const { subirArchivo } = require("../helpers/subir-archivo");
const cargarArchivo = async (req = request, res = response) => {
    
    

    if (!req.files || Object.keys(req.files).length === 0) { //comprueba si vienen los ficheros.
        return res.status(400).json({
            msg: 'No hay archivos que subir'
        });
    }

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

module.exports = {
    cargarArchivo
}