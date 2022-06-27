# Node.js
### Iniciar Proyecto
1. Crear package.json con comando ```npm init -y```
2. Instalar Nodemon globalmente con ```npm i nodemon -g``` para refrescar cambios automaticamente en desarrollo
3. Modificar ```pacakge.json``` dejar scripts asi:
```
"scripts": {
    "dev": "nodemon index.js",
    "start": "node index.js"
  },
```
4. Instalar Express con ```npm i express``` para iniciar backend más facil
5. Instalar dotenv con ```npm i dotenv``` para agregar variables del archivo .env a ```process.env```
6. Instalar Express Validator con ```npm i express-validator```
7. Creamos el archivo ```index.js``` el cual es el punto de entrada de nuestrp backend
Nota: aqui ya incluimos importaciones para trabajar con MongoDB, pero es extrapolable a bases de datos relacionales
```
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
...


app.listen(process.env.PORT, () => {
	console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})
```

8. La estructura de directorios será la siguiente
```
./PROYECTO
    ./node_modules
    ./controllers
        ...
    ./db
        config.js
        ...
    ./models
        ...
    ./routes
        ...
    ./middlewares
        ...
    ./public
        index.html
        styles.css
    index.js
    env.js
    package.json
```