const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("DB is Connected!!!"))
  .catch((err) => console.log("Error Connecting to DB", err));
