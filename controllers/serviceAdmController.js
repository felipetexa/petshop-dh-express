const Servico = require('../models/servico')

const servicoAdmController = {
  index: (req, res) => {
    const servicos = Servico.findAll();
    return res.render('adm/servicos', { servicos });
  },
  create: (req, res) => {
    return res.render('adm/servicos/cadastro');
  }
    
};

module.exports = servicoAdmController;