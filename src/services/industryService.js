const { or } = require('sequelize');
const IndustryModel = require('../models/industryModel.js');

async function getAll() {
    try {
        const allIndustries = await IndustryModel.findAll({
            order: [['name', 'ASC']], 
        });
        return allIndustries;
    } catch (error) {
        throw new Error('Error al obtener todas las industrias desde la base de datos');
    }
}


module.exports = {
    getAll
};
