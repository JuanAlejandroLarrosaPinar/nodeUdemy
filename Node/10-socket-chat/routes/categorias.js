const {Router} = require('express');
const {check} = require('express-validator');
const { crearCategoria, obtenerCategorias, obtenerCategoria, actualizarCategoria, borrarCategoria } = require('../controllers/categorias');
const { existeCategoriaPorId } = require('../helpers/db-validators');
const { validarJWT, validarCampos, esAdminRole } = require('../middlewares/index');

const router = Router();

// Obtener todas las categorias 
router.get('/', obtenerCategorias);

//Obtener una cateogria por id - publico
router.get('/:id',
    //,check('id').custom(existeCategoria)
    [
        check('id', 'No es un id de Mongo válido').isMongoId(),
        check('id').custom(existeCategoriaPorId),
        validarCampos
    ]
    , obtenerCategoria);

//Crear categoria - privado - cualquier persona con un token válido
router.post('/', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
],crearCategoria);

//Actualizar - privado - cualquiera con token válido
router.put('/:id', 
[
    validarJWT
    ,check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('id').custom(existeCategoriaPorId)
    ,validarCampos
]
,actualizarCategoria);

// Borrar una categoria - Admin
router.delete('/:id',
[
    validarJWT,
    esAdminRole,
    check('id', 'No es un id de Mongo válido').isMongoId(),
    check('id').custom(existeCategoriaPorId),
    validarCampos
],
borrarCategoria)

module.exports = router;