const {DataTypes, Model} = require('sequelize');
const sequelize = require('../config/database');

class ImprovementsModel extends Model {}

ImprovementsModel.init(
  {
    // Atributos del Mejoramiento (El id está dado por Postgre)
    image_imp: {
      type: DataTypes.STRING,
    },
    video_imp: {
      type: DataTypes.STRING,
    },
    text_imp: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'Improvements', // Nombre del modelo
    tableName: 'improvement', // Nombre de la tabla en la base de datos
  }
);

module.exports = ImprovementsModel;