require('dotenv').config();
const express = require('express'),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  pg = require('pg');

const app = express();
const PORT = process.env.PORT;

let pool = new pg.Pool({
  user: 'postgres',
  host: 'localhost',
  port: 5432,
  password: 'tkach666',
  database: 'budget2.0',
  max: 10
});

app.get('/api/users').then();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-Width, Content-Type, Accept');
  next();
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});

