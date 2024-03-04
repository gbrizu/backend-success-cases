const { Router } = require('express');
const router = Router();


const ClientController = require('../controllers/clientController');

// Ruta para obtener un cliente por su ID
router.get('/client/getById/:clientId', ClientController.getByIdClient);

// Ruta para mostrar todos los clientes
router.get('/client/getAll', ClientController.getAllClients);

// Ruta para crear un cliente
router.post('/client/create', ClientController.createClient);


module.exports = router;