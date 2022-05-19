const express = require('express');
const app = express();
const petsRouter = require('./routes/petRouter');
const serviceRouter = require('./routes/serviceRouter');
const homeRouter = require(`./routes/homeRouter`);
const aboutRouter = require('./routes/aboutRouter');
const contactRouter = require('./routes/contactRouter');
const loginRouter = require('./routes/loginRouter');
const signUpRouter = require('./routes/signUpRouter');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(homeRouter);
app.use(petsRouter);
app.use(serviceRouter);
app.use(aboutRouter);
app.use(contactRouter);
app.use(loginRouter);
app.use(signUpRouter);

app.listen(3000, () => console.log('Rodando...'))