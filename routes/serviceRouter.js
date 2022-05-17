const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController')

router.get('/servicos', serviceController.index)
router.get('/servicos/:id', serviceController.show)
router.post('/servicos', serviceController.create)
router.put('/servicos/:id', serviceController.update)
router.delete('/servicos/:id', serviceController.destroy)

module.exports = router;