const mongoose = require("mongoose");
const { Schema } = mongoose;

const mealSchema = new Schema({
  title: String,
  totalCalories: Number,
  remainingCalories: Number,
  date: String,
  ingredients: [{ type: Schema.Types.ObjectId, ref: "Ingredient" }],
});

module.exports = mongoose.model("Meal", mealSchema);
