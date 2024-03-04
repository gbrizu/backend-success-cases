const OfferingService = require('../services/offeringService.js');

// Controller para obtener una lista con todos los offerings.

async function getAll(req, res) {
  try {
    const offerings = await OfferingService.getAll(); 
    if (offerings.length > 0) {
      return res.status(200).json(offerings);
    } else {
      return res.status(204).json({ message: 'La solicitud se ha completado con éxito pero no hay offerings en el sistema' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener los offerings', error: error.message });
  }
}

module.exports = {
  getAll
};
