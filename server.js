const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./api/routes');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/qa', routes);

app.get('/loaderio-cf17fce0926e12430f4ddd8aac49d1f4', (req, res) => {
  res.sendFile(path.resolve('./loader.io.txt'));
});

app.listen(process.env.PORT, () => {
    console.log('App listening on port ', process.env.PORT)
});
