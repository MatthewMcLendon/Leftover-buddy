const Ingredient = require("../models/ingredientModel");

module.exports.listIngredients = async (req, res) => {
  const ingredients = await Ingredient.find({});
  res.send(ingredients);
};

module.exports.newIngredient = async (req, res) => {
  const newIngredient = new Ingredient(req.body.ingredient);
  await newIngredient.save();
  res.send("Make new ingredient");
};

module.exports.updateIngredient = async (req, res) => {
  const { id } = req.params;
  const updatedIngredient = await Ingredient.findByIdAndUpdate(id, {
    ...req.body.ingredient,
  });
  res.send(`Update an ingredient ${updatedIngredient}`);
};

module.exports.deleteIngredient = async (req, res) => {
  const { id } = req.params;
  const deletedIngredient = await Ingredient.findByIdAndDelete(id);
  res.send(`Delete an ingredient ${deletedIngredient}`);
};
