const express = require('express');
const app = express();
const petsRouter = require('./routes/petRouter');
const serviceRouter = require('./routes/serviceRouter');
const homeRouter = require(`./routes/homeRouter`);
const aboutRouter = require('./routes/aboutRouter')

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.use(homeRouter);
app.use(petsRouter);
app.use(serviceRouter);
app.use(aboutRouter);

app.listen(3000, () => console.log('Rodando...'))