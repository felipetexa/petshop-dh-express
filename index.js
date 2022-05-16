const express = require('express');
const app = express();
const petsRouter = require('./routes/petRouter');
const productRouter = require('./routes/productRouter')

app.use(petsRouter);
app.use(productRouter);

app.get('/', (req, res) => {
  res.send('Olá mundo');
})



app.listen(3000, () => console.log('Rodando...'))