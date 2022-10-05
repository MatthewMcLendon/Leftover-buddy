const mongoose = require("mongoose");
const { Schema } = mongoose;

const ingredientSchema = new Schema({
  title: String,
  calories: Number,
  serving: String,
});

module.exports = mongoose.model("Ingredient", ingredientSchema);
