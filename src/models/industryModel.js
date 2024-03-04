const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.js'); 

class IndustryModel extends Model { }

IndustryModel.init(
    {
        // Atributos de la industria (el id lo genera Postgres)
        name: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: 'Industry', // Nombre del modelo
        tableName: 'industry', // Nombre de la tabla en la base de datos
    }
);
 

module.exports = IndustryModel;

