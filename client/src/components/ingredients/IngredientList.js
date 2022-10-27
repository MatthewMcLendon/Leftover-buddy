import "./IngredientList.module.css";

import { useEffect, useState } from "react";
import IngredientDataService from "../../services/ingredient.service";
import IngredientItem from "./IngredientItem";

function MealList(props) {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    IngredientDataService.getAllIngredients().then((res) => {
      setIngredients(res.data);
    });
  }, [ingredients]);

  return (
    <div>
      <ul>
        {ingredients.map((ingredient) => {
          return (
            <IngredientItem key={ingredient._id} ingredient={ingredient} />
          );
        })}
      </ul>
    </div>
  );
}

export default MealList;
