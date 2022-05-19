const db = require('../db.json')

const serviceController = {
  index: (req, res) => {  
    const servicos = db.servicos;
    res.render('servicos', { servicos })
  }
};

module.exports = serviceController;