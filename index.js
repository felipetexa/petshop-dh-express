const express = require('express');
const app = express();
const petsRouter = require('./routes/petRouter');
const serviceRouter = require('./routes/serviceRouter')

app.use(petsRouter);
app.use(serviceRouter);

app.get('/', (req, res) => {
  res.send('Olá mundo');
})



app.listen(3000, () => console.log('Rodando...'))