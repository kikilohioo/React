/* 
	Rutas de eventos 
	host + /api/events
*/

const { Router } = require('express');
const { createEvent, getEvents, updateEvent, deleteEvent } = require('../controllers/events');
const { validateJWT } = require('../middlewares/validate-JWT');
const router = Router();

router.use(validateJWT) // middleware para todas las rutas al mismo tiempo

router.get('/', getEvents);

router.post('/', createEvent);

router.put('/:id', updateEvent);

router.delete('/:id', deleteEvent);

module.exports = router;