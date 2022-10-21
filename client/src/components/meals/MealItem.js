import "./MealItem.module.css";
import Card from "../ui/Card";

function MealItem(props) {
  return (
    <Card>
      <li>{props.meal.title}</li>
    </Card>
  );
}

export default MealItem;
