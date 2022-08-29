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
const { esRoleValido, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators');
const { validarJWT } = require('../middlewares/validar-jwt');
const { esAdminRole } = require('../middlewares/validar-roles');

const router = Router();

router.get('/', usuariosGet);

router.put('/:id', 
[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    check('rol').custom(esRoleValido),
    validarCampos
],
usuariosPut);

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(), //Con check validamos los campos que nos llegan del body
    check('password', 'El password debe ser de más de 6 letras').isLength({
        min: 6
    }),
    check('correo', 'El correo no es válido').isEmail(),
    //check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('rol').custom(esRoleValido),
    check('correo').custom(emailExiste),
    validarCampos
], usuariosPost); //el segundo parámetro son los middlewares

router.delete('/:id', [
    validarJWT,
    esAdminRole,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    validarCampos
], usuariosDelete);

router.patch('/', usuariosPatch);

module.exports = router;