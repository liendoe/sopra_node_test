const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');

const v1 = require('./routes/v1');
const app = express();

app.use(cors());

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
})); 

app.use('/v1', v1);

module.exports = app;