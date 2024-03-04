const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.js');

class ProjectTypeModel extends Model { }

ProjectTypeModel.init(
  {
    // Propiedades del tipo de proyecto
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'ProjectType', // Nombre del modelo
    tableName: 'project_type', // Nombre de la tabla en la base de datos
  }
);

module.exports = ProjectTypeModel;