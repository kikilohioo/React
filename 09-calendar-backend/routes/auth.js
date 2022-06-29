/* 
	Rutas de usuarios 
	host + /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { createUser, loginUser, renewUserToken } = require('../controllers/auth');
const { validateCampos } = require('../middlewares/validate-campos');
const { validateJWT } = require('../middlewares/validate-jwt');
const router = Router();

router.get('/renew', validateJWT, renewUserToken);

router.post(
	'/new',
	[
		check('name', 'El nombre es oblighatorio').notEmpty(),
		check('email', 'El email debe ser valido').isEmail(),
		check('password', 'El password debe ser de 6 caracteres como minimo').isLength({ min: 6 }),
		validateCampos
	],
	createUser
);
	
router.post(
	'/',
	[
		check('email', 'El email debe ser valido').isEmail(),
		check('password', 'El password debe ser de 6 caracteres como minimo').isLength({ min: 6 }),
		validateCampos
	],
	loginUser
);


module.exports = router;