const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');
const servicoAdmController = require('../controllers/serviceAdmController');

router.get('/servicos', serviceController.index);

router.get('/adm/servicos', servicoAdmController.index);
router.get('/adm/servicos/cadastro', servicoAdmController.create);
router.post('/adm/servicos', servicoAdmController.store);
router.get('/adm/servicos/:id', servicoAdmController.show);
router.get('/adm/servicos/:id/editar', servicoAdmController.edit);
router.put('/adm/servicos/:id', servicoAdmController.update);
router.delete('/adm/servicos/:id', servicoAdmController.destroy);

module.exports = router;