const {DataTypes, Model} = require('sequelize');
const sequelize = require('../config/database');

class ChallengesModel extends Model {}

ChallengesModel.init(
  {
    // Atributos del Desafío (El id está dado por Postgre)
    image_ch: {
      type: DataTypes.STRING,
    },
    video_ch: {
      type: DataTypes.STRING,
    },
    text_ch: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'Challenges', // Nombre del modelo
    tableName: 'challenge', // Nombre de la tabla en la base de datos
  }
);

module.exports = ChallengesModel;