const {validationResult} = require('express-validator');

const validarCampos = (req, res, next) =>{
    const errors = validationResult(req); //nos devuelve la lista de errores de validación
    console.log(errors);
    if(!errors.isEmpty()){
        return res.status(400).json(errors);
    }

    next(); //Si llegamos a este punto se sigue al siguiente middleware.
}

module.exports = {
    validarCampos
}