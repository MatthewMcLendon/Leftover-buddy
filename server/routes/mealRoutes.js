const express = require("express");
const router = express.Router({ mergeParams: true });
const meal = require("../controllers/mealController");

router.route("/").get(meal.listMeals).post(meal.createMeal);

router
  .route("/:id")
  .get(meal.showMeal)
  .patch(meal.updateMeal)
  .delete(meal.deleteMeal);

module.exports = router;
