const mongoose = require("mongoose");
require('dotenv').config();
const DB = process.env.MONGO_DB;

mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connection successfully"))
  .catch((err) => console.log(err));