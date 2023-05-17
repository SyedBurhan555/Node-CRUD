const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  title: String,
  image: String,
  price: String,
  details: String,
});

module.exports = mongoose.model("Products", ProductSchema);
