const Meal = require("../models/mealModel");

module.exports.listMeals = async (req, res) => {
  const meals = await Meal.find({});
  res.send(`Get all meals ${meals}`);
};

module.exports.showMeal = async (req, res) => {
  const { id } = req.params;
  const meal = Meal.findById(id);
  res.send(`Show meal ${meal}`);
};

module.exports.createMeal = async (req, res) => {
  const newMeal = new Meal(req.body.meal);
  await newMeal.save();
  res.send(`Create a new meal, ${newMeal}`);
};

module.exports.updateMeal = async (req, res) => {
  const { id } = req.params;
  const updatedMeal = await Meal.findByIdAndUpdate(id, { ...req.body.meal });
  res.send(`Update meal ${updatedMeal}`);
};

module.exports.deleteMeal = async (req, res) => {
  const { id } = req.params;
  const deletedMeal = await Meal.findByIdAndDelete(id);
  res.send(`Delete meal ${deletedMeal}`);
};
