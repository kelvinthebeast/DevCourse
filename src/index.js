const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const morgan = require('morgan')
const path = require('path');
// http log
app.use(morgan('combined'));
const port = 1606;

// Set up view engine
app.engine('.hbs', engine({ extname: '.hbs' }));  
app.set('view engine', '.hbs');
app.set('views', './views'); 
app.set('views', path.join(__dirname, 'resources/views'));

console.log("Views directory set to:", path.join(__dirname, 'resources/views'));
app.get("/", (req, res) => {
  res.render("home", { title: "Home" });
})

app.get("/news", (req, res) => {
  res.render("news", { title: "News" });
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});