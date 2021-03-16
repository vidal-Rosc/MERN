//Importamos express
const express = require('express');

//Importamos para conectarnos a la BD
const connectionDB = require('./config/db');

//Creamos el servidor
const server = express();

//Conectamos la BD
connectionDB();

//Asignamos un puerto
const PORT = process.env.PORT || 4010;

//Definimos el home-page
server.get('/', (request, response) => {
    response.send('Welcome to the MERN server')
})

//Encendemos el Servidor
server.listen(PORT, () => {
    console.log(`Server starting in port ${PORT}`);
});