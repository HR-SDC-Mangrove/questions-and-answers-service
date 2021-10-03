const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./api/routes');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/qa', routes);

app.get('/loaderio-82e1afa4c08267caa569c0851a3b132f', (req, res) => {
  res.sendFile(path.resolve('./loader.io.txt'));
});

app.listen(process.env.NODE_ENV === 'production' ? 80 : process.env.PORT, () => {
    console.log('App listening on port ', process.env.NODE_ENV === 'production' ? 80 : process.env.PORT)
});
