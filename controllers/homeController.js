const homeController = {
  index: (req, res) => {
    // const title = 'Minha primeira aplicação com EJS'
    res.render('index'); //nao precisa passar a extensão .ejs
  }
};

//posso fazer tudo num controler só... basta criar novos métodos dentro do objeto
//dai fica tudo numa rota só também

module.exports = homeController;