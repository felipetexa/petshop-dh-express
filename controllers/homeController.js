const Servico = require('../models/servico')

const homeController = {
  index: (req, res) => {
    return res.render('index'); //nao precisa passar a extensão .ejs
  },
  about: (req, res) => {
    return res.render('about');
  },
  services: (req, res) => {
    const servicos = Servico.findAll();
    return res.render('servicos', { servicos });  
  },
  login: (req, res) => {
    return res.render('login');
  },
  contact: (req, res) => {
    return res.render('contato');
  },
  signUp: (req, res) => {
    return res.render('cadastro');
  }
};

module.exports = homeController;