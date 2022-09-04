const {Router} = require('express');
const {check} = require('express-validator');
const { crearProducto, obtenerProducto, obtenerProductos, actualizarProducto, borrarProducto } = require('../controllers/productos');
const { existeCategoriaPorId, existeProductoPorId } = require('../helpers/db-validators');
const { validarJWT, validarCampos, esAdminRole } = require('../middlewares/index');

const router = Router();

// Obtener todas las categorias 
router.get('/', obtenerProductos);

//Obtener una cateogria por id - publico
router.get('/:id',
    //,check('id').custom(existeCategoria)
    [
        check('id', 'No es un id de Mongo válido').isMongoId(),
        check('id').custom(existeProductoPorId),
        validarCampos
    ]
    , obtenerProducto);

//Crear categoria - privado - cualquier persona con un token válido
router.post('/', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
],crearProducto);

//Actualizar - privado - cualquiera con token válido
router.put('/:id', 
[
    validarJWT
    ,check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('id').custom(existeProductoPorId)
    ,validarCampos
]
,actualizarProducto);

// Borrar una categoria - Admin
router.delete('/:id',
[
    validarJWT,
    esAdminRole,
    check('id', 'No es un id de Mongo válido').isMongoId(),
    check('id').custom(existeProductoPorId),
    validarCampos
],
borrarProducto)

module.exports = router;