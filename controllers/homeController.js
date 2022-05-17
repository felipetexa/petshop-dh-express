const homeController = {
  index: (req, res) => {
    const title = 'Minha primeira aplicação com EJS'
    res.render('home', {title}); //nao precisa passar a extensão .ejs
  }
};

module.exports = homeController;