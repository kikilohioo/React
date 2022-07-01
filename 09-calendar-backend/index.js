const express = require('express');
require('dotenv').config();
var cors = require('cors')
const { dbConnection } = require('./db/config')
/* Creando el servidor */
const app = express();

/* Base de datos */
dbConnection();

/* Activando CORS */
app.use(cors())

/* Directorio publico */
app.use(express.static('public'))

/* Lectura y parseo */
app.use(express.json())

/* Rutas Auth */
app.use('/api/auth', require('./routes/auth'))

/* Rutas Events */
app.use('/api/events', require('./routes/events'))

/*
Para despliegue de front-end mismo en ./public/ deberemos agregar el siguiente codigo

app.get('*', (req,res)=>{
	res.sendFile(__dirname + '/public/index.html')
})
*/

app.listen(process.env.PORT, () => {
	console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})