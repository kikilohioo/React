/* 
	Rutas de eventos 
	host + /api/events
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { createEvent, getEvents, updateEvent, deleteEvent } = require('../controllers/events');
const { validateJWT } = require('../middlewares/validate-JWT');
const { validateCampos } = require('../middlewares/validate-campos');
const { isDate } = require('../helpers/isDate');
const router = Router();

router.use(validateJWT) // middleware para todas las rutas al mismo tiempo

router.get('/', getEvents);

router.post(
	'/',
	[
		check('title', 'El titulo es obligatorio').notEmpty(), //Esto genera los mensajes de error, para devolverlos debemos importar el middleware validate-campos en este caso
		check('start', 'Fecha de inicio es obligatoria').custom(isDate),
		check('start', 'Fecha de finalizacion es obligatoria').custom(isDate),
		validateCampos
	],
	createEvent
);

router.put(
	'/:id',
	[
		check('title', 'El titulo es obligatorio').notEmpty(), //Esto genera los mensajes de error, para devolverlos debemos importar el middleware validate-campos en este caso
		check('start', 'Fecha de inicio es obligatoria').custom(isDate),
		check('start', 'Fecha de finalizacion es obligatoria').custom(isDate),
		validateCampos
	],
	updateEvent);

router.delete('/:id', deleteEvent);

module.exports = router;