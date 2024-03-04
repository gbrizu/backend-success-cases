const ContactModel = require('../models/contactModel');

// Servicio para obtener todos los contactos
async function getAllContacts() {
    try {
        const contact = await ContactModel.findAll({
            order: [['name', 'ASC']], // Ordena por la columna 'id' de manera ascendente (de menor a mayor)
          });
        return contact;
    } catch (error) {
        throw new Error('Error al obtener todos los contactos desde la base de datos');
    }
}

async function getContactById(contactId) {
    try {
        const contact = await ContactModel.findByPk(contactId);
        return contact;
    } catch (error) {
        throw new Error('Error al obtener el contacto con id ' + contactId + 'desde la base de datos');
    }
}


module.exports = {
    getAllContacts,
    getContactById,
};