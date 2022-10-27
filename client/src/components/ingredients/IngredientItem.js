import "./IngredientItem.module.css";
import Card from "../ui/Card";

function MealItem(props) {
  return (
    <Card>
      <li>
        {props.ingredient.title}, {props.ingredient.serving}
      </li>
    </Card>
  );
}

export default MealItem;
