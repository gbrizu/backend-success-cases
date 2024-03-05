const {DataTypes, Model} = require('sequelize');
const sequelize = require('../config/database');

class ChallengesModel extends Model {}

ChallengesModel.init(
  {
    // Atributos del Desafío (El id está dado por Postgre)
    image_ch: {
      type: DataTypes.TEXT,
    },
    video_ch: {
      type: DataTypes.TEXT,
    },
    text_ch: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: 'Challenges', // Nombre del modelo
    tableName: 'challenge', // Nombre de la tabla en la base de datos
  }
);

module.exports = ChallengesModel;