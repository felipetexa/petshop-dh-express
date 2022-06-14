const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');
const verificaSeLogado = require('../middlewares/verificaSeLogado');

router.use(verificaSeLogado);

router.get('/adm/servicos', serviceController.index);
router.get('/adm/servicos/cadastro', serviceController.create);
router.post('/adm/servicos', serviceController.store);
router.get('/adm/servicos/:id', serviceController.show);
router.get('/adm/servicos/:id/editar', serviceController.edit);
router.put('/adm/servicos/:id', serviceController.update);
router.delete('/adm/servicos/:id', serviceController.destroy);

module.exports = router;