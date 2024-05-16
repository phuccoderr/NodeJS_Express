const path = require("path");
const express = require("express");
const { engine } = require("express-handlebars");
const morgan = require("morgan");

const app = express();
const port = 3000;

// Input Form Data
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// Static File
app.use(express.static(path.join(__dirname, "public")));
// Template Engineer
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// Middleware Logger
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/news", (req, res) => {
  res.render("news");
});

app.get("/search", (req, res) => {
  res.render("search");
});

app.post("/search", (req, res) => {
  console.log(req);
  res.render("search");
});

app.get("/results", (req, res) => {
  res.render("results", { body: req.query.search });
});

app.listen(port);
