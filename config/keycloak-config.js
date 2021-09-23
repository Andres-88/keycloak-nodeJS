const session = require ('express-session')
const Keycloak = require('keycloak-connect')

let _keycloak

//Configuración principal de Keycloak
var keycloakConfig = {
    clientId: 'nodejs-microservice',
    bearerOnly: true,
    serverUrl: 'http://localhost:8080/auth',
    realm:'parcial-realm',
    credentials:{
        secret:'04998b5a-389b-46b3-8566-101c5a1f5c08'
    }
};

function initKeycloak(){
    if(_keycloak){
        console.warn("Try to init Keycloak gain!");
        return _keycloak;
    } else {
        console.log("Initializing Keycloak...");
        var memoryStore = new session.MemoryStore();
        _keycloak = new Keycloak({store: memoryStore}, keycloakConfig);
        return _keycloak;
    }
};

function getKeycloak(){
    if(!_keycloak){
        console.error("Keycloak has not been initialized. Please call init first.");
    }
    return _keycloak;
}

module.exports = {
    initKeycloak,
    getKeycloak
};