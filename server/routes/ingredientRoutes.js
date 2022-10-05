const express = require("express");
const router = express.Router({ mergeParams: true });
const ingredient = require("../controllers/ingredientController");

router
  .route("/")
  .get(ingredient.listIngredients)
  .post(ingredient.newIngredient);

router
  .route("/:id")
  .patch(ingredient.updateIngredient)
  .delete(ingredient.deleteIngredient);

module.exports = router;
