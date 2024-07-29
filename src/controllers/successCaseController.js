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
      return res.status(400).json({ message: 'El valor de ID ingresado es erróneo o inexistente.' });
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
  
    const { title, startdate, finishdate, teamsize, ispublic, industryid, clientid, projecttypeid, contactid , offeringid, casedetail, technology, 
      challenge, improvement} = req.body;

    if ( !title ){
      return res.status(400).json({ message: 'Falta el título del caso.' });
    }
    if ( !startdate ){
      return res.status(400).json({ message: 'Falta la fecha de inicio del caso.' });
    }
    if ( !finishdate ){
      return res.status(400).json({ message: 'Falta la fecha de finalización del caso.' });
    }
    if ( !teamsize ){
      return res.status(400).json({ message: 'Falta el tamaño del equipo del caso.' });
    }
    if ( !ispublic ){
      return res.status(400).json({ message: 'Falta el estado de publicación del caso.' });
    }
    if ( !industryid ){
      return res.status(400).json({ message: 'Falta la industria del caso.' });
    }
    if ( !clientid ){
      return res.status(400).json({ message: 'Falta el cliente del caso.' });
    }
    if ( !projecttypeid ){
      return res.status(400).json({ message: 'Falta el tipo de proyecto del caso.' });
    }
    if ( !contactid ){
      return res.status(400).json({ message: 'Falta el contacto del caso.' });
    }
    if ( !offeringid ){
      return res.status(400).json({ message: 'Falta la oferta del caso.' });
    }
    if ( !casedetail ){
      return res.status(400).json({ message: 'Falta el detalle del caso.' });
    }
    if ( !technology ){
      return res.status(400).json({ message: 'Falta la tecnología del caso.' });
    }
    if ( !challenge ){
      return res.status(400).json({ message: 'Falta el desafío del caso.' });
    }
    if ( !improvement ){
      return res.status(400).json({ message: 'Falta la mejora del caso.' });
    }
    
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
