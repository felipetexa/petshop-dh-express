const express = require('express');
const app = express();
const petsRouter = require('./routes/petRouter');
const serviceRouter = require('./routes/serviceRouter');
const homeRouter = require(`./routes/homeRouter`);

app.set('view engine', 'ejs');

app.use(homeRouter);
app.use(petsRouter);
app.use(serviceRouter);

app.listen(3000, () => console.log('Rodando...'))