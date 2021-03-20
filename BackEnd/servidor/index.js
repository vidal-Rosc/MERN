//Importamos express
const express = require('express');

//Importamos para conectarnos a la BD
const connectionDB = require('./config/db');

//Creamos el servidor
const server = express();

//Conectamos la BD
connectionDB();

//Habilitamos el express.JSON para leer los datos que el usuario escriba
server.use(express.json({ extended: true }));

//Asignamos un puerto
const PORT = process.env.PORT || 5000;

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
server.listen(PORT, () => {
    console.log(`Server starting in port ${PORT}`);
});