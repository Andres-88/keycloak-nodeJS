const express = require('express');
const app = express();

//Importar la configuración de Keycloak
const keycloak = require('./config/keycloak-config.js').initKeycloak();
app.use(keycloak.middleware());  //Activa el middleware de Keycloak. Verifica los tokens de las rutas y las autorizaciones de los usuarios

//Importar test-controller
const testController = require('./controller/test-controller.js');
app.use('/test', testController);

//Ruta básica preliminar
app.get('/', function(req, res){
    res.send('Server is up') //Avisa que el servidor está corriendo

});

app.listen(3000);