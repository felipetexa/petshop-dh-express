const express = require('express');
const app = express();
const petsRouter = require('./routes/petRouter');

app.use(petsRouter);

app.get('/', (req, res) => {
  res.send('Olá mundo');
})



app.listen(3000, () => console.log('Rodando...'))