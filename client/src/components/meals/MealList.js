import "./MealList.module.css";
import { useContext } from "react";
import MealContext from "./MealProvider";
import MealItem from "./MealItem";

function MealList() {
  const { meals } = useContext(MealContext);

  return (
    <div>
      <ul>
        {meals.map((meal) => {
          return <MealItem key={meal._id} meal={meal} />;
        })}
      </ul>
    </div>
  );
}

export default MealList;
