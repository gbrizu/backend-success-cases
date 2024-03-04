const projectTypeService = require('../services/projectTypeService');

// Controlador para obtener todos los tipos de proyectos
async function getAllProjectType(req, res) {

    try {
        const allProjectType = await projectTypeService.getAllProjectType();
        if (allProjectType.length > 0) {
            return res.status(200).json(allProjectType);
        } else {
            return res.status(204).json({ message: 'No se encontraron tipos de proyecto en el sistema' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener el tipo de proyecto', error: error.message });
    }
}

module.exports = {
    getAllProjectType,
};