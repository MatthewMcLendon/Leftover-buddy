const express = require("express");
const mongoose = require("mongoose");

const Meal = require("../backend/models/mealModel");
const Ingredient = require("../backend/models/ingredientModel");

const { seedMeals, seedIngredients, seedServings } = require("./seeds");

mongoose
  .connect("mongodb://localhost:27017/calorieCounter")
  .then(() => {
    console.log("Database conected");
  })
  .catch((err) => {
    console.log("ERROR");
    console.log(err);
  });

const seedDB = async () => {
  await Meal.deleteMany({});
  await Ingredient.deleteMany({});

  for (const meal of seedMeals) {
    const randIngredients = [];

    for (i = 0; i <= 3; i++) {
      randIngredients[i] = new Ingredient({
        title:
          seedIngredients[Math.floor(Math.random() * seedIngredients.length)],
        serving: seedServings[Math.floor(Math.random() * seedServings.length)],
        calories: Math.floor(Math.random() * 500),
      });
    }
    let totalCalories = 0;
    for (let ingredient of randIngredients) {
      totalCalories = +ingredient.calories;
    }

    const m = new Meal({
      title: meal,
      totalCalories: totalCalories,
      remainingCalories:
        totalCalories - Math.floor(Math.random() * totalCalories),
      date: Date(),
      ingredients: [],
    });

    for (i = 0; i <= 3; i++) {
      m.ingredients.push(randIngredients[i]);
      await randIngredients[i].save();
    }

    await m.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
