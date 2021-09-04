const express = require('express');
const routes = require('./api/routes');
require('dotenv').config();

const app = express();

app.use('/qa', routes);

app.listen(process.env.PORT, () => {
    console.log('App listening on port ', process.env.PORT)
})
