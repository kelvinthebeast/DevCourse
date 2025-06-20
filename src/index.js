const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');

const route = require('./routes/index.route');
const database = require("../src/config/db")


app.use(express.static(path.join(__dirname, 'public')));
// http log
app.use(morgan('combined'));
const port = 1606;
database.connect()
// Set up view engine
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');
app.set('views', path.join(__dirname, 'resources','views'));
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded`
app.use(express.json());

// routes init
route(app);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
