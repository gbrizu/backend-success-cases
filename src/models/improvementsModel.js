const {DataTypes, Model} = require('sequelize');
const sequelize = require('../config/database');

class ImprovementsModel extends Model {}

ImprovementsModel.init(
  {
    // Atributos del Mejoramiento (El id está dado por Postgre)
    image_imp: {
      type: DataTypes.TEXT,
    },
    video_imp: {
      type: DataTypes.TEXT,
    },
    text_imp: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: 'Improvements', // Nombre del modelo
    tableName: 'improvement', // Nombre de la tabla en la base de datos
  }
);

module.exports = ImprovementsModel;