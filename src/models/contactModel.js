const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.js');

class ContactModel extends Model { }

ContactModel.init(
    {
        // Atributos del contacto (el id lo genera Postgres)
        name: {
            type: DataTypes.STRING,
        },
        surName: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        }
    },
    {
        sequelize,
        modelName: 'Contact', // Nombre del modelo
        tableName: 'contact', // Nombre de la tabla en la base de datos
    }
);

module.exports = ContactModel;