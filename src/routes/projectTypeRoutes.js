const express = require('express');
const router = express.Router();
const projectTypeController = require('../controllers/projectTypeController');

// Ruta para obtener todos los tipos de proyectos 
router.get('/projectType/getAll', projectTypeController.getAllProjectType);

module.exports = router;