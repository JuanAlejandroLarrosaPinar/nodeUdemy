const {Router} = require('express');
const {check} = require('express-validator');
const { login, googleSignIn } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');

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
router.post('/', (req, res)=>{
    res.json('post');
});

router.put('/:id', (req, res)=>{
    res.json('put');
});

router.delete('/:id',(req, res)=>{
    res.json('delete');
})

module.exports = router;