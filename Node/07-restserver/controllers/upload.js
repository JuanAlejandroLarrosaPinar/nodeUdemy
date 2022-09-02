const { response, request } = require("express");
const path = require('path');
const cargarArchivo = (req = request, res = response) => {
    
    

    if (!req.files || Object.keys(req.files).length === 0) { //comprueba si vienen los ficheros.
        return res.status(400).json({
            msg: 'No hay archivos que subir'
        });
    }

    const {archivo} = req.files;
    const nombreCortado = archivo.name.split('.');
    console.log(nombreCortado);
    const extension = nombreCortado[nombreCortado.length-1];

    //Validar la extension
    const extensionesValidas = [
        'png', 'jpg', 'jpeg', 'gif'
    ];

    if(!extensionesValidas.includes(extension)){
        return res.status(400).json({
            msg:`La extensión ${extension} no es válida. Extensiones válidas: ${extensionesValidas}`
        });
    }
    res.json({
        extension
    })
    /*const uploadPath = path.join(__dirname, '../uploads/', archivo.name);
    console.log(__dirname);
    // Use the mv() method to place the file somewhere on your server
    archivo.mv(uploadPath, function (err) {
        if (err)
            return res.status(500).send(err);
        res.json({
            msg:'Fichero movido' + uploadPath
        })
    });*/
}

module.exports = {
    cargarArchivo
}