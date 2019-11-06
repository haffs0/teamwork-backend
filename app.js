const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helper = require('./utils/helper');
const envConfig = require('./utils/env-config');
const stuffRoutes = require('./routes/stuff');

const app = express();

// connect to postgresql


app.use(cors());
app.use(bodyParser.json());
app.use(helper.requestLogger);

// app.get('/', (req, res) => {
//     res.send('<h1>hello</h1>')
// })

// declare routes

app.use('/api/v1', stuffRoutes);

app.use(helper.unknownEndpoint);
app.use(helper.errorHandler);

module.exports = app;
