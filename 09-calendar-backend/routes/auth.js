/* 
	Rutas de usuarios 
	host + /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { createUser, loginUser, renewUserToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();

router.get('/renew', renewUserToken);

router.post(
	'/new',
	[
		check('name', 'El nombre es oblighatorio').notEmpty(),
		check('email', 'El email debe ser valido').isEmail(),
		check('password', 'El password debe ser de 6 caracteres como minimo').isLength({ min: 6 }),
		validarCampos
	],
	createUser
);
	
router.post(
	'/',
	[
		check('email', 'El email debe ser valido').isEmail(),
		check('password', 'El password debe ser de 6 caracteres como minimo').isLength({ min: 6 }),
		validarCampos
	],
	loginUser
);


module.exports = router;