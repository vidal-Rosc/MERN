//Importamos express
const express = require('express');

//Importamos para conectarnos a la BD
const connectionDB = require('./config/db');

//Importamos cors
const cors = require('cors');

//Creamos el servidor
const server = express();

//Conectamos la BD
connectionDB();

//Habilitamos cors
server.use(cors());

//Habilitamos el express.JSON para leer los datos que el usuario escriba
server.use(express.json({ extended: true }));

//Asignamos un puerto
const port = process.env.port || 5000;

//Importamos las rutas
server.use('/api/users', require('./routes/users'));

server.use('/api/auth', require('./routes/auth'));

server.use('/api/projects', require('./routes/projects'));

server.use('/api/tasks', require('./routes/tasks'));

//Definimos el home-page
server.get('/', (req, res) => {
    res.send('Welcome to the MERN server')
})

//Encendemos el Servidor
server.listen(port, '0.0.0.0', () => {
    console.log(`Server starting in port ${PORT}`);
});