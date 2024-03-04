const ClientService = require('../services/clientService');

// Controlador para obtener todos los clientes
async function getAllClients(req, res) {
  try {
      const clients = await ClientService.getAllClients();
    if(clients.length > 0){
      return res.status(200).json(clients);
    } else {
      return res.status(204).json({ message: 'No hay Clientes' });
    }
  } catch (error) {
      return res.status(404).json({ message: 'Error al obtener los Clientes', error: error.message });
  }
}


// Controlador para obtener un cliente por su ID
async function getByIdClient(req, res) {
  const clientId = req.params.clientId;

  try {
    const client = await ClientService.getByIdClient(clientId);
    if (client) {
      return res.status(200).json(client);
    } else {
      return res.status(204).json({ message: 'No hay Clientes' });
    }
  } catch (error) {
      return res.status(404).json({ message: 'Error al obtener el Cliente', error: error.message });
  }
}

// Controlador para crear un cliente
async function createClient(req, res) {
    try {
      
      const {name, surname, email } = req.body;
  
      // Llama al servicio para crear el cliente
      const newClient = await ClientService.createClient({
        name, surname, email
      });
  
      if (newClient) {
        return res.status(201).json(newClient);
      }
    } catch (error) {
      res.status(400).json({ error: 'Error al crear el cliente', error: error.message });
    }
  }

module.exports = {
  getByIdClient,
  getAllClients,
  createClient,
};