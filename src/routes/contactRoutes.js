const { Router } = require('express');
const router = Router();


const ContactController = require('../controllers/contactController');

// Ruta para obtener un contacto por su ID
router.get('/contact/getContact/:contactId', ContactController.findByIdContact);

// Ruta para mostrar todos los contactos
router.get('/contact/getAll', ContactController.findAllContacts);

// Ruta para crear un contacto
router.post('/contact/create', ContactController.createContact);


module.exports = router;