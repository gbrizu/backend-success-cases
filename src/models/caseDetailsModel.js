const {DataTypes, Model} = require('sequelize');
const sequelize = require('../config/database.js');
const SuccessCaseModel = require('./successCaseModel.js');

class CaseDetailsModel extends Model {}

CaseDetailsModel.init(
  {
    
    image_detail: {
      type: DataTypes.TEXT,
    },
    video_detail: {
      type: DataTypes.TEXT,
    },
    text_detail: {
      type: DataTypes.TEXT,
    } 
  },
  {
    sequelize,
    modelName: 'CaseDetail', // Nombre del modelo
    tableName: 'case_detail', // Nombre de la tabla en la base de datos
  }
);



module.exports = CaseDetailsModel;