const mongoose = require('mongoose');

const dbConnection = async () => {
	try {
		await mongoose.connect(process.env.DB_CONN);
		console.log('DB Connected')
	} catch(error) {
		console.log(error)
		throw new Error('Error al intentar conectar a la base de datos')
	}
}

module.exports = {
	dbConnection
}