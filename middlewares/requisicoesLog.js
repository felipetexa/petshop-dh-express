const fs = require('fs')

const requisicoesLog = (req, res, next) => {
  fs.appendFileSync(
    'requisicoesLog.txt',
    `O usuário ${req.ip} solicitou a rota ${req.method} ${req.url} | cod status http: ${res.statusCode} às ${new Date().toISOString()}\n`)

  return next()
}

module.exports = requisicoesLog
