const Servico = require('../models/servico')
const storage = require('../config/storage')
const fs = require('fs')

const uploadAvatar = storage('avatar', '/servicos')

const servicoController = {
  index: (req, res) => {
    const servicos = Servico.findAll()
    return res.render('adm/servicos', { servicos })
  },
  show: (req, res) => {
    const { id } = req.params
    const servico = Servico.findById(id)
    if (!servico) {
      return res.status(404).render('not-found', { error: 'Serviço não encontrado'})
    }
    return res.render('adm/servicos/detalhes', { servico })
  },
  create: (req, res) => {
    return res.render('adm/servicos/cadastro') //endereço do arquivo ejs (não é url, nao precisa da / na frente)
  },
  store: (req, res) => {
    uploadAvatar(req, res, (err) => {
      const { nome, preco, ativo, descricao } = req.body
      const servico = {
        nome,
        imagem: '/img/servicos/' + req.file.filename,
        preco,
        ativo: ativo ? true : false,
        descricao
      }
  
      Servico.save(servico)
  
      return res.redirect('/adm/servicos') //url ou endpoint
    })
  },
  edit: (req, res) => {
    const { id } = req.params
    const servico = Servico.findById(id)
    return res.render('adm/servicos/editar', { servico })
  },
  update: (req, res) => {
    const { id } = req.params;
    const { nome, imagem, preco, ativo, descricao } = req.body
    const servico = {
      id,
      nome,
      imagem,
      preco,
      ativo: ativo ? true : false,
      descricao
    }

    Servico.update(id, servico)

    return res.redirect('/adm/servicos')
  },
  destroy: (req, res) => {
    const { id } = req.params;
    const servico = Servico.findById(id);
    if (!servico) {
      return res.status(404).render('not-found', { error: 'Serviço não encontrado'})
    }
    Servico.delete(id);
    try {
      fs.unlinkSync('./public' + servico.imagem)
    } catch(err) {
      console.error(err)
    }
    return res.redirect('/adm/servicos')
  }
}

module.exports = servicoController
