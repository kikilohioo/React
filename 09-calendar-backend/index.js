const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./db/config')
/* Creando el servidor */
const app = express();
const port = 3100;

/* Base de datos */
dbConnection();

/* Directorio publico */
app.use(express.static('public'))

/* Lectura y parseo */
app.use(express.json())

/* Rutas */
app.use('/api/auth', require('./routes/auth'))


app.listen(process.env.PORT, () => {
	console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})