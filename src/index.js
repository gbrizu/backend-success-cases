const express = require ('express');
const app = express(); // Crear un servidor express
const morgan = require('morgan'); // Middleware para ver las peticiones que llegan al servidor
const cors = require('cors'); // Middleware para permitir peticiones desde otros servidores


//Configuraciones
app.set('port', process.env.PORT || 3000); // Configurar el puerto del servidor
app.set('json spaces', 2) // Configurar la cantidad de espacios en el formato JSON
 
//Middleware
app.use(morgan('dev')); 
app.use(cors()); 
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 
 

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