var express = require("express");
var createError = require("http-errors");
var cors = require("cors");
var config = require("./config/server.js");
const logger = require("morgan");
var path = require("path");
var app = express();

var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
// var routesApi = require("./app_api/routes/index");

//DB connections.
require("./app_api/models/db");

app.use(cors());
app.use(logger("dev"));

//Parse body to json format.
app.use(bodyParser.json({ limit: "50mb" }));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.set("view engine", "ejs");
//retrieve public files.
app.use("/static", express.static(path.join(__dirname, "public")));

// app.use("/api", routesApi);

app.get("/", (req, res) => {
  res.end("Hello");
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//Log when recieved requests and catch 404 and forward to error handler.
app.use((req, res, next) => {
  console.log(
    `${req.method} requests for ${req.url} - ${JSON.stringify(req.body)}`
  );
  next();
});

console.log(
  `Express app running on port ${config.SERVER.PORT} and ip ${config.SERVER.IP}`
);

module.exports = app;
