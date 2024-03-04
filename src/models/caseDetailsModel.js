const {DataTypes, Model} = require('sequelize');
const sequelize = require('../config/database');
const SuccessCaseModel = require('./successCaseModel.js');

class CaseDetailsModel extends Model {}

CaseDetailsModel.init(
  {
    
    image_detail: {
      type: DataTypes.STRING,
    },
    video_detail: {
      type: DataTypes.STRING,
    },
    text_detail: {
      type: DataTypes.STRING,
    } 
  },
  {
    sequelize,
    modelName: 'CaseDetail', // Nombre del modelo
    tableName: 'case_detail', // Nombre de la tabla en la base de datos
  }
);



module.exports = CaseDetailsModel;