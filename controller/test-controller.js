const express = require('express');
const router = express.Router(); //Permite obtener las distintas rutas de la aplicación que luego se importarán en index.js

const keycloak = require('../config/keycloak-config.js').getKeycloak(); // Importa la instancia de Keycloak

//Primer ruta: Usuario anónimo
router.get('/anonymous', function(req, res){
    res.send('Hello anonymous')
});

//Segunda ruta: Usuario
router.get('/user', keycloak.protect('user'), function(req, res){
    res.send('Hello user')
});

//Tercer ruta: Administrador
router.get('/admin', keycloak.protect('admin'), function(req, res){
    res.send('Hello admin')
});

//Cuarta ruta: Todos los usuarios
router.get('/all-user', keycloak.protect(['user', 'admin']), function(req, res){
    res.send('Hello all user')
});

//Para que pueda ser importado desde otro archivo debe ser exportado de la siguiente manera
module.exports = router;