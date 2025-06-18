const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const morgan = require('morgan')
const path = require('path');
const { json } = require('stream/consumers');


app.use(express.static(path.join(__dirname, 'public'))); 
// http log
app.use(morgan('combined'));
const port = 1606;

// Set up view engine
app.engine('.hbs', engine({ extname: '.hbs' }));  
app.set('view engine', '.hbs');
app.set('views', './views'); 
app.set('views', path.join(__dirname, 'resources/views'));
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded`
app.use(express.json())
app.get("/", (req, res) => {
  res.render("home", { title: "Home" });
})

app.get("/news", (req, res) => {
  console.log(req.query)
  res.render("news", { title: "News" });
})

app.get("/search", (req, res) => {
  console.log(req.query)
  res.render("search", { title: "Search" });
})

app.post("/search", (req, res) => {
  res.send("")
})
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});