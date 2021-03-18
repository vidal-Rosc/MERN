//Ruta para autenticar a los usuarios

//Importamos express
const express = require('express');

//Express contiene router
const router = express.Router();

//Importamos el controller de autenticacion
const authController = require('../controllers/authController');

//Para validar
const { check } = require('express-validator');

// /api/auth
router.post('/',
    [
        check('email', 'Enter a correct email').isEmail(),
        check('password', 'The password must have at least 6 characters').isLength({ min: 6 })
    ],
    authController.userAuthenticator

)
module.exports = router;