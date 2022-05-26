const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController')

router.get('/', homeController.index);
router.get('/sobre', homeController.about);
router.get('/servicos', homeController.services);
router.get('/login', homeController.login);
router.get('/contato', homeController.contact);
router.get('/cadastro', homeController.signUp);

module.exports = router;