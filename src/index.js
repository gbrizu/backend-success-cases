const express = require ('express');
const app = express(); // Crear un servidor express
const morgan = require('morgan'); // Middleware para ver las peticiones que llegan al servidor
const cors = require('cors'); // Middleware para permitir peticiones desde otros servidores

const { auth, requiredScopes } = require('express-oauth2-jwt-bearer'); 

// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt = auth({
    audience: 'http://localhost:3000',
    issuerBaseURL: `https://dev-0efequbnpda3f7au.us.auth0.com/`,
  });


//Configuraciones
app.set('port', process.env.PORT || 3000); // Configurar el puerto del servidor
app.set('json spaces', 2) // Configurar la cantidad de espacios en el formato JSON
 
//Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
 
// Verifica el JWT antes de dirigirse a las rutas.
app.use(checkJwt);

//Routes
app.use(require('./routes/clientRoutes.js'));
app.use(require('./routes/offeringRoutes.js'));
app.use(require('./routes/projectTypeRoutes.js'));
app.use(require('./routes/contactRoutes.js'));
app.use(require('./routes/industryRoutes.js'));
app.use(require('./routes/successCaseRoutes.js'));


//Iniciando el servidor
app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
});