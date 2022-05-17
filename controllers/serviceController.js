const serviceController = {
  index: (req, res) => res.render('servicos'),
  create: (req, res) => res.send('Cadastro de serviço'),
  show: (req, res) => res.send('Detalhes do serviço: ' + req.params.id),
  update: (req, res) => res.send('Atualização de serviço: ' + req.params.id),
  destroy: (req, res) => res.send('Exclusão de serviço: ' + req.params.id)
}

module.exports = serviceController;