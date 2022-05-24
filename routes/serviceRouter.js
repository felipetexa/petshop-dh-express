const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');
const servicoAdmController = require('../controllers/serviceAdmController');

router.get('/servicos', serviceController.index);

router.get('/adm/servicos', servicoAdmController.index);
router.get('/adm/servicos/cadastro', servicoAdmController.create);

module.exports = router;