const IndustryService = require('../services/industryService.js');

async function getAll(req, res) {
    try {

        const allIndustries = await IndustryService.getAll();
        
        if (allIndustries.length > 0) {
            return res.status(200).json(allIndustries);
        } else {
            return res.status(204).json({ message: 'No se encontraron industrias en el sistema.' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener las industrias', error: error.message });
    }
}

module.exports = {
    getAll
};