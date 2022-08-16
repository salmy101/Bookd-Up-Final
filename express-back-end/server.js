require('dotenv').config();
const express = require('express');
const app = express();
const bodyparser = require("body-parser");
const { Pool } = require('pg');
const morgan = require('morgan');
const corsProxy = require('cors-anywhere');
const PORT = 8080;

const dbParams = {
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT
};
const db = new Pool(dbParams);
db.connect(() => {
  console.log('Connected to database');
});

// Express Configuration
app.use(morgan('dev'));
app.use(bodyparser.json());

// Separate routes
const usersRoutes = require('./routes/users');
const clubsRoutes = require('./routes/clubs');

// Mounting routes
app.use('/api/users', usersRoutes(db));
app.use('/api/clubs', clubsRoutes(db));

// Sample GET route
app.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});

// Creating and starting CORS Anywhere server
corsProxy.createServer({
  originWhitelist: [],
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2']
}).listen(8081, '0.0.0.0', () => {
  console.log('Running CORS Anywhere on ' + '0.0.0.0' + ':' + 8081);
});