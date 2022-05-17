const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/aboutController')

router.get('/sobre', aboutController.index);

module.exports = router;