const Servico = require('../models/servico')
const fs = require('fs');
const { v4: geradorDeId } = require('uuid');
const { validationResult } = require('express-validator');

const homeController = {
  index: (req, res) => {
    return res.render('home/index'); //nao precisa passar a extensão .ejs
  },
  about: (req, res) => {
    return res.render('home/about');
  },
  services: (req, res) => {
    const servicos = Servico.findAll();
    return res.render('home/servicos', { servicos });  
  },
  login: (req, res) => {
    return res.render('home/login');
  },
  contact: (req, res) => {
    return res.render('home/contato');
  },
  create: (req, res) => {
    return res.render('home/registro');
  },
  store: (req, res) => {
    let errors = validationResult(req);

    if(errors.isEmpty()) {
        let content = fs.readFileSync("./db.json", "utf8");
        const db = JSON.parse(content);

        const { nome, email, senha } = req.body;

        const usuario = {id: geradorDeId(), nome, email, senha }

        db.usuarios.push(usuario);
        content = JSON.stringify(db);

        fs.writeFileSync("./db.json", content);

        return res.redirect("/adm/servicos");
    }

    return res.render("home/registro", {listaDeErros: errors.errors, old: req.body})

    
}
};

module.exports = homeController;