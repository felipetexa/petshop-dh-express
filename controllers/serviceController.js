const Servico = require('../models/servico');

const serviceController = {
  index: (req, res) => {  
    const servicos = Servico.findAll();
    res.render('servicos', { servicos })
  }
};

module.exports = serviceController;