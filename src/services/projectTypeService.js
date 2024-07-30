const ProjectTypeModel = require('../models/projectTypeModel');

// Servicio para obtener todos los tipos de proyectos
async function getAllProjectType() {
    try {
        const projectType = await ProjectTypeModel.findAll({
            order: [['name', 'ASC']], // Ordena por la columna 'id' de manera ascendente (de menor a mayor)
          });
        return projectType;
    } catch (error) {
        throw new Error('Error al obtener todos los tipos de proyecto desde la base de datos');
    }
}

module.exports = {
    getAllProjectType,
};