const { response } = require("express");
// const Event = require('../models/Event');

const getEvents = (req, res = response) => { 
	res.status(200).json({
		ok: true,
		msg: 'Cargar eventos'
	})
}

const createEvent = (req, res = response) => { 
	res.status(200).json({
		ok: true,
		msg: 'Crear evento'
	})
}

const updateEvent = (req, res = response) => { 
	res.status(200).json({
		ok: true,
		msg: 'Actualizar evento'
	})
}

const deleteEvent = (req, res = response) => { 
	res.status(200).json({
		ok: true,
		msg: 'Eliminar evento'
	})
}

module.exports = {
	getEvents,
	createEvent,
	updateEvent,
	deleteEvent
}