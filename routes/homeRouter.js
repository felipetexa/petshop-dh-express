const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController')
const validacaoRegistroUsuario = require('../middlewares/validacaoRegistroUsuario')

router.get('/', homeController.index);
router.get('/sobre', homeController.about);
router.get('/servicos', homeController.services);
router.get('/login', homeController.login);
router.post('/login', homeController.postLogin);
router.get('/contato', homeController.contact);
router.get('/registrar', homeController.create);
router.post('/registrar', validacaoRegistroUsuario, homeController.store);
router.get('/adm', homeController.showAdm);

module.exports = router;