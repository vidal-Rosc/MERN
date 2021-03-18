//Rutas para CRUD proyectos

//Importamos express
const express = require('express');

//Express contiene router
const router = express.Router();

//Importamos el controller de autenticacion
const  projectController = require('../controllers/projectController');

//Importamos nuestro middleware
const auth = require('../middlewares/auth');

//Creamos un nuevo proyecto
// /api/projects
router.post('/',
    auth,
    projectController.createProject
);

// /api/projects
router.get('/',
    auth,
    projectController.createProject
)
module.exports = router;