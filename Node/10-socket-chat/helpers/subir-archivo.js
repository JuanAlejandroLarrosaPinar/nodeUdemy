const {v4:uuidv4} = require('uuid');
const path = require('path');

const subirArchivo = (files, extensionesValidas = ['png', 'jpg', 'jpeg', 'gif', 'pdf'], carpeta = '') => {

    return new Promise((resolve, reject) => {
        const { archivo } = files;
        const nombreCortado = archivo.name.split('.');
        //console.log(nombreCortado);
        const extension = nombreCortado[nombreCortado.length - 1];

        //Validar la extension
        

        if (!extensionesValidas.includes(extension)) {
            return reject(`La extensión ${extension} no es válida. Extensiones válidas: ${extensionesValidas}`);
        }

        const nombreTemp = uuidv4() + '.' + extension;
        const uploadPath = path.join(__dirname, '../uploads/',carpeta, nombreTemp);

        // Use the mv() method to place the file somewhere on your server
        archivo.mv(uploadPath, function (err) {
            if (err) reject(err);
            
            resolve(nombreTemp);
        });
    });

}


module.exports = {
    subirArchivo
}