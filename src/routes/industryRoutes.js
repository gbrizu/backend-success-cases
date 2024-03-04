const { Router } = require('express');
const router = Router();

const IndustryController = require('../controllers/industryController');

router.get('/industry/getAll', IndustryController.getAll);

 
module.exports = router;