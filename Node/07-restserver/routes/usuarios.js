const { Router } = require('express');
const { check } = require('express-validator');
const Role = require('../models/role');
const {
    usuariosGet,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
    usuariosPost
} = require('../controllers/usuarios');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/', usuariosGet);

router.put('/:id', usuariosPut);

router.post('/',[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(), //Con check validamos los campos que nos llegan del body
    check('password', 'El password debe ser de más de 6 letras').isLength({
        min:6
    }),
    check('correo', 'El correo no es válido').isEmail(),
    //check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('rol').custom(async (rol = '')=>{
        const existeRol = await Role.findOne({rol});
        if(!existeRol){
            throw new Error(`El rol ${rol} no está registrado en la BBDD`);
        }
    }),
    validarCampos
] ,usuariosPost); //el segundo parámetro son los middlewares

router.delete('/', usuariosDelete);

router.patch('/', usuariosPatch);

module.exports = router;