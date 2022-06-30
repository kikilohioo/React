const { response } = require("express");
const Event = require('../models/Event');

const getEvents = async (req, res = response) => {
	const events = await Event.find().populate('user','name');

	res.status(200).json({
		ok: true,
		events
	})
}

const createEvent = async (req, res = response) => {
	const event = new Event(req.body);

	try {
		event.user = req.uid

		const savedEvent = await event.save()

		res.status(200).json({
			ok: true,
			event: savedEvent
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({
			ok: false,
			msg: 'Hable con el db_admin'
		})
	}
}

const updateEvent = async (req, res = response) => {
	const eventId = req.params.id;
	const uid = req.uid;

	try {
		const event = await Event.findById(eventId)

		if (!event) {
			return res.status(404).json({
				ok: false,
				msg: 'No se encontró un evento con ese Id'
			})
		}

		if (event.user.toString() !== uid) {
			return res.status(401).json({
				ok: false,
				msg: 'No esta autorizado para actualizar este evento'
			})
		}

		const eventAux = {
			...req.body,
			user: uid
		}

		const eventUpdated = await Event.findByIdAndUpdate(eventId, eventAux, {new: true})

		res.status(200).json({
			ok: true,
			event: eventUpdated
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({
			ok: false,
			msg: 'Hable con el db_admin'
		})
	}
}

const deleteEvent = async (req, res = response) => {
	const eventId = req.params.id;
	const uid = req.uid;

	try {
		const event = await Event.findById(eventId)

		if (!event) {
			return res.status(404).json({
				ok: false,
				msg: 'No se encontró un evento con ese Id'
			})
		}

		if (event.user.toString() !== uid) {
			return res.status(401).json({
				ok: false,
				msg: 'No esta autorizado para eliminar este evento'
			})
		}

		await Event.findByIdAndDelete(eventId)

		res.status(200).json({
			ok: true
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({
			ok: false,
			msg: 'Hable con el db_admin'
		})
	}
}

module.exports = {
	getEvents,
	createEvent,
	updateEvent,
	deleteEvent
}