# MongoDB
### Iniciar Proyecto
1. Crear ```db/config.js```
2. Instalar Mongoose ```npm i mongoose```
***Opcional*** Instalar BcryptJS para encriptacion de contraseñas ```npm i bcryptjs```
3. Incluir en ```db/config.js```
```
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
```

### Controllers
Crear archivos ```controllers/controllername.js``` e incluir
```
const { response } = require("express");
const modelo = require('../models/Model');

const metodoX = async (req, res = response) => {/* codigo */}
...
```
Aqui se gestionan las respuestas, para indicar correctamente los status revisar https://www.restapitutorial.com/httpstatuscodes.html
Al final del archivo recordar incluir las exportaciones
```
module.exports = {
	metodoX,
	metodoZ,
	...
};
```
### Models
Crear archivos ```models/Modelname.js``` e incluir
```
const { Schema, model } = require('mongoose');

const ModelXSchema = Schema({
	attributeX: {
		type: String,
		require: true
	},
	...
});
// For set collection name add this
// , {
// 	collection: 'modelxs'
// });

module.exports = model('ModelX', ModelXSchema);
```
### Middlewares
Son algoritmos intermedios que se utilizan para separar una logica que precisamos controlar de manera separada y más controlada, en este caso el ejemplo es para validar campos de un formulario de registro e inicio de sesion

Crear archivo ```middlewares/validar-campos.js```
```
const { response } = require('express')
const { validationResult } = require('express-validator');

const validarCampos = (req, res = response, next) => {
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
	validarCampos
}
```
Una vez creado el middleware como tal, deberemos de importarlo donde lo usaremos, en este caso será en 