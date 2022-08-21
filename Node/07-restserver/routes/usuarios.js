const { Router } = require('express');
const { check } = require('express-validator');
const {
    usuariosGet,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
    usuariosPost
} = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet);

router.put('/:id', usuariosPut);

router.post('/',[
    check('correo', 'El correo no es válido').isEmail()
] ,usuariosPost); //el segundo parámetro son los middlewares

router.delete('/', usuariosDelete);

router.patch('/', usuariosPatch);

module.exports = router;