const SuccessCaseService = require('../services/successCaseService.js');

// Controller para obtener una lista con todos los Casos que coincidan con los filtros.

// Si está vacío realiza un GetAll.
async function getByFilter(req, res) {
  try {
    const cases = await SuccessCaseService.getByFilter(req.body); 

    if (cases.length > 0) {
      return res.status(200).json(cases);
    } else {
      return res.status(204).json({ message: 'La solicitud se ha completado con éxito pero no hay casos de éxito en el sistema.' });
    };
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener los casos de éxito.', error: error.message });
  };
};

async function getAll(req, res) {
  try {
    
    const cases = await SuccessCaseService.getAll(); 

    if (cases.length > 0) {
      return res.status(200).json(cases);
    } else {
      return res.status(204).json({ message: 'La solicitud se ha completado con éxito pero no hay casos de éxito en el sistema.' });
    };
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener los casos de éxito.', error: error.message });
  };
};


// Controller para obtener un caso por Id.
async function getById(req, res) {
  try {
    console.log(req.body);
    const {id} = req.body;
    if (id == null || id < 1) {
      return res.status(400).json({ message: 'El valor ingresado es erróneo o inexistente.' });
    };

    const successCase = await SuccessCaseService.getById(id);

    if (successCase != null) {
      return res.status(200).json(successCase);
    } else {
      return res.status(204).json({ message: 'No se encontraron casos de éxito en el sistema.' });
    };
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener los casos de éxito.', error: error.message });
  };
};


// Controller para crear un caso
async function create(req, res) {
  try {
  
    // Llama al servicio para crear el newSuccess 
    const newSuccessCase = await SuccessCaseService.createSuccessCase(req.body);
     
    if (newSuccessCase) {
      return res.status(201).json({ message: 'El caso se ha creado correctamente.' });
    } else {
      return res.status(400).json({ message: 'No ha sido posible crear el caso.' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error al crear el caso de éxito.', error: error.message });
  }
}


module.exports = {
  getByFilter,
  getById,
  create,
  getAll
};
