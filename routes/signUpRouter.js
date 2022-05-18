const express = require('express');
const router = express.Router();
const signUpController = require('../controllers/signUpController');

router.get('/cadastro', signUpController.index);

module.exports = router;