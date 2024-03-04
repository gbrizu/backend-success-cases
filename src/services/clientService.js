const { or } = require('sequelize');
const ClientModel = require('../models/clientModel.js');

// Servicio para crear un cliente
async function createClient(data) {
  try {
    const { name, surname, email} = data;

    // Crea el cliente en la base de datos utilizando el modelo
    const newClient = await ClientModel.create({
      name, surname, email
    });

    return newClient;
  } catch (error) {
    throw error;
  }
}

// Servicio para obtener un cliente por su id
async function getByIdClient(clientId) {
  try {
    const getClient = await ClientModel.findByPk(clientId); 
    
    return getClient;
  } catch (error) {
    throw new Error('Error al obtener el cliente con id ' + clientId + ' desde la base de datos');
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