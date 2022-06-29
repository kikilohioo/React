const { response } = require('express')
const { validationResult } = require('express-validator');

const validateCampos = (req, res = response, next) => {
	const errors = validationResult(req)

	if (!errors.isEmpty()) {
		return res.status(400).json({
			pk: false,
			errors: errors.mapped()
		})
	}

	next();
}

module.exports = {
	validateCampos
}