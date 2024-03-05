const {DataTypes, Model} = require('sequelize');
const sequelize = require('../config/database');

class TechnologiesModel extends Model {}

TechnologiesModel.init(
  {
    // Atributos de las tecnologías (El id está dado por Postgre)
    image_tech: {
      type: DataTypes.TEXT,
    },
    video_tech: {
      type: DataTypes.TEXT,
    },
    text_tech: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: 'Technology', // Nombre del modelo
    tableName: 'technology', // Nombre de la tabla en la base de datos
  }
);

module.exports = TechnologiesModel;