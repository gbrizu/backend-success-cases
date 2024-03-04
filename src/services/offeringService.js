const { or } = require('sequelize');
const OfferingModel = require('../models/offeringModel.js');

// Servicio para obtener una lista de todos los Offering

async function getAll() {
  try {
    // La función findAll nace del 'sequelize'. Link de referencia: https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
    const offerings = await OfferingModel.findAll({
      order: [['name', 'ASC']], // Ordena por la columna 'id' de manera ascendente (de menor a mayor)
    });
    return offerings;
  } catch (error) {
    throw new Error('Error al obtener todas las offering desde la base de datos.');
  }
}


module.exports = {
  getAll,
};
