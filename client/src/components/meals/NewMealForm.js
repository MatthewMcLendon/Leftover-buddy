import "./NewMealForm.module.css";
import Card from "../ui/Card";
import { useRef, useState, useEffect } from "react";

function NewMealForm(props) {
  const titleInputRef = useRef();
  const ingredientInputRef = useRef([]);

  const ingredients = [];

  function submitHandler() {}

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="title">Meal Name</label>
          <input type="text" id="Meal title" ref={titleInputRef} />
        </div>
        <div>
          <label htmlFor="Ingredients">Meal Name</label>
          <select name="ingredients" id="ingredients" ref={ingredientInputRef}>
            {ingredients.map((ingredient) => {
              return (
                <option value="ingredient.title" key="ingredient._id">
                  {ingredient.title}
                </option>
              );
            })}
          </select>
        </div>
      </form>
    </Card>
  );
}

export default NewMealForm;
