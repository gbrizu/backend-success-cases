const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.js');

class OfferingModel extends Model {}

OfferingModel.init(
  {
    // Atributos del Offering (El id está dado por Postgre)
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'Offering', // Nombre del modelo
    tableName: 'offering', // Nombre de la tabla en la base de datos
  }
);



module.exports = OfferingModel;