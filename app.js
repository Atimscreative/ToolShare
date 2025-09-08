const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
dotenv.config();

app.use(express.json());

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`App is listening to port ${port}`));

app.get("/", function (req, res) {
  res.send("Hello from the server");
});

module.exports = app;
