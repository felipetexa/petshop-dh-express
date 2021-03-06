const express = require('express')
const methodOverride = require('method-override')
const app = express()
const petsRouter = require('./routes/petRouter')
const serviceRouter = require('./routes/serviceRouter')
const homeRouter = require(`./routes/homeRouter`)
const requisicoesLog = require('./middlewares/requisicoesLog')
const session = require('express-session');

app.set('view engine', 'ejs')
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(session({
    secret: 'minha primeira session',
    resave: false,
    saveUninitialized: false
}));
app.use(requisicoesLog);

app.use(homeRouter)
app.use(petsRouter)
app.use(serviceRouter)

app.use((req, res, next) => {
  return res.status(404).render('not-found', {error: 'Página não encontrada'})
})

app.listen(3000, () => console.log('Rodando...'))
