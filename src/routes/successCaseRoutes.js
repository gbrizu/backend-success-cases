const { Router } = require('express');
const router = Router();

const SuccessCaseModel = require('../models/successCaseModel.js');


const SuccessCaseController = require('../controllers/successCaseController');

// Ruta para obtener un caso por su ID. 
router.get('/successCase/getById/:id', SuccessCaseController.getById);

// Ruta para obtener todos los casos. Opcionalmente recibe filtros para la búsqueda.
router.post('/successCase/getByFilter', SuccessCaseController.getByFilter);

// Ruta para crear un caso.
router.post('/successCase/create', SuccessCaseController.create);

router.get('/successCase/getAll', SuccessCaseController.getAll);

router.delete('/successCase/deleteById/:id', SuccessCaseController.deleteById);

router.put('/successCase/updateById/:id', SuccessCaseController.updateById);


module.exports = router;