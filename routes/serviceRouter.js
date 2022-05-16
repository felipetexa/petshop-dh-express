const express = require('express');
const router = express.Router();

router.get('/services', (req, res) => res.send('Lista de serviços'))
router.get('/services/:id', (req, res) => res.send('Detalhes do serviço: ' + req.params.id))
router.post('/services', (req, res) => res.send('Cadastro de serviço'))
router.put('/services/:id', (req, res) => res.send('Atualização de serviço: ' + req.params.id))
router.delete('/services/:id', (req, res) => res.send('Exclusão de serviço: ' + req.params.id))

module.exports = router;