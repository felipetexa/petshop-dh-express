const Servico = require('../models/servico')
const fs = require('fs');
const { v4: geradorDeId } = require('uuid');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const Pet = require('../models/pet');

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
  postLogin: (req, res) => {
    // Acessar o bando de dados
    let content = fs.readFileSync("./db.json", "utf8");
    const db = JSON.parse(content);

    // Capturar informações dos inputs do form
    const { email, senha } = req.body;

    // Procurar dados no banco de dados
    const usuario = db.usuarios.find(user => user.email === email);

    if(!usuario || !bcrypt.compareSync(senha, usuario.senha)) {
      return res.render('home/login', {error: 'Email ou senha incorretos ou não encontrados'});
    }
    req.session.usuario = usuario;
    res.redirect('/adm');
    
  },
  contact: (req, res) => {
    res.render('home/contato')
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

        const senhaCriptografada = bcrypt.hashSync(senha, 10);

        const usuario = {id: geradorDeId(), nome, email, senha: senhaCriptografada }

        db.usuarios.push(usuario);
        content = JSON.stringify(db);

        fs.writeFileSync("./db.json", content);

        return res.redirect("/adm");
    }

    return res.render("home/registro", {listaDeErros: errors.errors, old: req.body})

    
},
  showAdm: (req, res) => {
    return res.render('adm/index');
  },
  logout: (req, res) => {
    req.session.destroy(function(err){console.log(err)});
    res.redirect('/login');
  },
  pets: (req, res) => {
    const pets = Pet.findAll();
    res.render('home/pets', { pets });
  }
};

module.exports = homeController;