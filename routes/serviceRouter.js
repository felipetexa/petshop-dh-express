const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController')

router.get('/services', serviceController.index)
router.get('/services/:id', serviceController.show)
router.post('/services', serviceController.create)
router.put('/services/:id', serviceController.update)
router.delete('/services/:id', serviceController.destroy)

module.exports = router;