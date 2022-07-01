const { response } = require("express");
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { generateJWT } = require("../helpers/jwt");

const createUser = async (req, res = response) => {
	const { email, password } = req.body;

	try {
		let user = await User.findOne({ email })

		//Corroborar si no existe un usuario con ese email
		if (user) {
			return res.status(400).json({
				ok: false,
				msg: 'Ya existe un usuario con este correo electronico'
			})
		}

		user = new User(req.body);

		//Encrypt password
		const salt = bcrypt.genSaltSync();
		user.password = bcrypt.hashSync(password, salt)

		//Guardar nuevo usuario
		await user.save();

		//Generar el JWT
		const token = await generateJWT(user.id, user.name)

		res.status(201).json({
			ok: true,
			uid: user.id,
			name: user.name,
			token
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({
			ok: false,
			msg: 'Porfavor hable con el db_admin'
		})
	}
};

const loginUser = async (req, res = response) => {
	const { email, password } = req.body;

	try {
		let user = await User.findOne({ email })

		//Corroborar si no existe un usuario con ese email
		if (!user) {
			return res.status(400).json({
				ok: false,
				msg: 'Email o contraseña invalidas'
			})
		}

		//Confirmar constraseña
		const validPassword = bcrypt.compareSync(password, user.password)

		if (!validPassword) {
			return res.status(400).json({
				ok: false,
				msg: 'Email o contraseña invalidas'
			})
		}

		//Generar el JWT
		const token = await generateJWT(user.id, user.name)

		res.status(200).json({
			ok: true,
			msg: 'login',
			uid: user.id,
			name: user.name,
			token
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({
			ok: false,
			msg: 'Porfavor hable con el db_admin'
		})
	}

};

const renewUserToken = async (req, res = response) => {
	const { uid, name } = req;

	//Generar el JWT
	const token = await generateJWT(uid, name)

	res.json({
		ok: true,
		uid, 
		name,
		token
	})
};

module.exports = {
	createUser,
	loginUser,
	renewUserToken
};