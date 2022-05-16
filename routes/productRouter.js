const express = require('express');
const router = express.Router();

router.get('/products', (req, res) => res.send('Lista de produtos'))
router.get('/products/:id', (req, res) => res.send('Detalhes do produto: ' + req.params.id))
router.post('/products', (req, res) => res.send('Cadastro de produto'))
router.put('/products/:id', (req, res) => res.send('Atualização de produto: ' + req.params.id))
router.delete('/products/:id', (req, res) => res.send('Exclusão de produto: ' + req.params.id))

module.exports = router;