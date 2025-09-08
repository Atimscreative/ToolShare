const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`App is listening to port ${port}`));

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("DB is Connected!!!"))
  .catch((err) => console.log("Error Connecting to DB", err));
