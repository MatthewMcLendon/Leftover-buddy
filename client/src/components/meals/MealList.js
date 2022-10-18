import "./MealList.module.css";
import { useEffect, useState } from "react";
import React from "react";
const axios = require("axios").default;

function MealItem() {
  const [meals, getMeals] = useState([]);

  const getAllMeals = () => {
    axios
      .get(`http://localhost:5000/meals`)
      .then((res) => {
        getMeals(res.data);
      })
      .catch((err) => console.error(`Error: ${err}`));
  };

  useEffect(() => getAllMeals());

  return (
    <div>
      <h1>Connected!</h1>
      <ul>
        {meals.map((meal) => {
          return <li key={meal._id}>{meal.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default MealItem;
