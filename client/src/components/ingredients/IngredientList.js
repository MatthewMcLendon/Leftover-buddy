import "./IngredientList.module.css";
import { useContext } from "react";
import IngredientContext from "./IngredientProvider";
import IngredientItem from "./IngredientItem";

function MealList() {
  const { ingredients } = useContext(IngredientContext);

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
