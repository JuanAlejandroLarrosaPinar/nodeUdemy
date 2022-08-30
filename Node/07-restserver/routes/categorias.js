const {Router} = require('express');
const {check} = require('express-validator');
const { login, googleSignIn } = require('../controllers/auth');
const { crearCategoria } = require('../controllers/categorias');
const { validarJWT, validarCampos } = require('../middlewares/index');

const router = Router();

// Obtener todas las categorias 
router.get('/', (req, res)=>{
    res.json('get')
});

//Obtener una cateogria por id - publico
router.get('/:id', (req, res)=>{
    res.json('get');
});

//Crear categoria - privado - cualquier persona con un token válido
router.post('/', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
],crearCategoria);

//Actualizar - privado - cualquiera con token válido
router.put('/:id', (req, res)=>{
    res.json('put');
});

// Borrar una categoria - Admin
router.delete('/:id',(req, res)=>{
    res.json('delete');
})

module.exports = router;