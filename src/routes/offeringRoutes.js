const { Router } = require('express');
const router = Router();


const OfferingController = require('../controllers/offeringController');

// Ruta para obtener un usuario por su ID
router.get('/offering/getAll', OfferingController.getAll); //Especificar get en postman

 
module.exports = router;