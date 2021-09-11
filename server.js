const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./api/routes');
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Req logger
// app.use((req, res, next) => {
//   console.log('BODY', req.body);
//   console.log('PARAMS', req.query);
//   next();
// })

app.use('/qa', routes);

app.listen(process.env.PORT, () => {
    console.log('App listening on port ', process.env.PORT)
});
