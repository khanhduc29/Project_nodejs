const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');
// const handlebarsHelpers = require('./handlebars-helpers');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

// connect to db
db.connect()

app.use(express.static(path.join(__dirname, 'public')));
// img/logo.png
app.use(express.static(path.join(__dirname, 'resources/views')));
// imgs/logo.png
app.use(express.static(path.join(__dirname, 'resources/views/me')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(methodOverride('_method'));

// http logger
app.use(morgan('combined'));

// templates engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        // helpers: handlebarsHelpers,
    }),

);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

//rout init
route(app);

// địa chỉ ip 127.0.0.1
app.listen(port, () => {
    console.log(` App listening on port ${port}`);
});
