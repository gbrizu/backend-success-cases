const ClientModel = require('../models/clientModel.js');
// Servicio para crear un cliente
async function createClient(data) {
  try {
    const { name, surname, email } = data;
    // Validar formato del email
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      throw new Error('Direccion de correo electronico invalida');
    }
    // Validar nombre
    const nameRegex = /^[a-zA-Z ]+$/;
    if (!nameRegex.test(name)) {
      throw new Error('Nombre invalido');
    }
    // Validar apellido
    if (!nameRegex.test(surname)) {
      throw new Error('Apellido invalido');
    }
    // Crea el cliente en la base de datos utilizando el modelo
    const newClient = await ClientModel.create({
      name, surname, email
    });
    return newClient;
  } catch (error) {
    if (error.message === 'Direccion de correo electronico invalida' || error.message === 'Nombre invalido' || error.message === 'Apellido invalido') {
      throw error;
    } else {
      throw new Error('Error al crear un cliente en la base de datos');
    }
  }
}
// Servicio para obtener un cliente por su id
async function getByIdClient(clientId) {
  try {
    const getClient = await ClientModel.findByPk(clientId);
    if (!getClient) {
      throw new Error('Client not found');
    }
    return getClient;
  } catch (error) {
    throw new Error('Client not found');
  }
}
// Servicio para obtener todos los clientes
async function getAllClients() {
  try {
    const allClients = await ClientModel.findAll({
      order: [['name', 'ASC']], // Ordena por la columna 'id' de manera ascendente (de menor a mayor)
    });
    return allClients;
  } catch (error) {
    throw new Error('Error al obtener todos los clientes desde la base de datos');
  }
}


module.exports = {
  createClient,
  getByIdClient,
  getAllClients,
};