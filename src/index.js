const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');
const morgan = require('morgan');

const app = express();
const port = 3000;
const route = require('./routes'); // Auto index !!!

// Input Form Data
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

// Static File
app.use(express.static(path.join(__dirname, 'public')));
// Template Engineer
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Middleware Logger
app.use(morgan('combined'));

// Local Host -- Hosting
// Action ----> Dispatcher ----> Function Handler

// Route Init
route(app);

app.listen(port);
