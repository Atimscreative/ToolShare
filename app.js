const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const toolRouter = require("./routes/toolRoutes");
const bookingRouter = require("./routes/bookingRoutes");
const authRouter = require("./routes/authRoutes");

const app = express();
dotenv.config();

app.use(express.json());
app.use(morgan("dev"));

app.get("/", function (req, res) {
  res.send("Hello from the server");
});

app.use("/api/auth", authRouter);
app.use("/api/tools", toolRouter);
app.use("/api/bookings", bookingRouter);

module.exports = app;
