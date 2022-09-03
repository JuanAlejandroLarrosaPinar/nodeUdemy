const { request, response } = require("express")

const validarArchivoSubir = (req = request, res = response, next)=>{
    if (!req.files || Object.keys(req.files).length === 0) { //comprueba si vienen los ficheros.
        return res.status(400).json({
            msg: 'No hay archivos que subir - middleware'
        });
    }

    next();
}

module.exports = {
    validarArchivoSubir
}