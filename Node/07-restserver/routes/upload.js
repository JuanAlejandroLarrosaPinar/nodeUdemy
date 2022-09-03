const {Router} = require('express');
const {check} = require('express-validator');
const { cargarArchivo, actualizarImagen } = require('../controllers/upload');
const { coleccionesPermitidas } = require('../helpers/db-validators');
const { validarCampos, validarArchivoSubir } = require('../middlewares');



const router = Router();

router.post('/',
    [validarArchivoSubir,
    validarCampos]
, cargarArchivo);

router.put('/:coleccion/:id', [
    validarArchivoSubir,
    check('id','El id debe ser de mongo').isMongoId(),
    check('coleccion').custom(c=>coleccionesPermitidas(c, ['usuarios', 'productos'])),
    validarCampos
], actualizarImagen );

module.exports = router;