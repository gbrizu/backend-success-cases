const SuccessCaseService = require('../services/successCaseService.js');

// Controller para obtener una lista con todos los Casos que coincidan con los filtros.

// Si está vacío realiza un GetAll.
async function getByFilter(req, res) {
  try {

    const filters = req.body;


    const cases = await SuccessCaseService.getByFilter(filters);

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
    const id = req.params.id;
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

async function deleteById(req, res) {
  try {
    const id = req.params.id;
    if (id == null || id < 1) {
      return res.status(400).json({ message: 'El valor ingresado es erróneo o inexistente.' });
    };

    const result = await SuccessCaseService.deleteById(id);

    if (result == 1) {
      return res.status(200).json({ message: 'El caso se ha eliminado correctamente.' });
    } else {
      return res.status(400).json({ message: 'No ha sido posible eliminar el caso.' });
    }
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
      return res.status(200).json({ message: 'El caso se ha creado correctamente.' });
    } else {
      return res.status(400).json({ message: 'No ha sido posible crear el caso.' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error al crear el caso de éxito.', error: error.message });
  }
}

async function updateById(req, res) {
  try {

    // Llama al servicio para crear el newSuccess 
    const updatedSuccessCase = await SuccessCaseService.updateById(req.body);

    if (updatedSuccessCase) {
      return res.status(200).json({ message: 'El caso se ha actualizado correctamente.' });
    } else {
      return res.status(400).json({ message: 'No ha sido posible actualizar el caso.' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error al actualizar el caso de éxito.', error: error.message });
  }
}

module.exports = {
  getByFilter,
  getById,
  create,
  getAll,
  deleteById,
  updateById
};
