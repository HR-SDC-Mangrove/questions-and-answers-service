const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./api/routes');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/qa', routes);

app.get('/loaderio-562e2c9106de9b285904c77cbf671dcc', (req, res) => {
  res.sendFile(path.resolve('./loader.io.txt'));
});

app.listen(process.env.PORT, () => {
    console.log('App listening on port ', process.env.PORT)
});
