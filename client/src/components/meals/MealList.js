import "./MealList.module.css";
import { useEffect, useState } from "react";
import MealDataService from "../../services/meal.service";
import MealItem from "./MealItem";

function MealList(props) {
  const [isLoading, setIsloading] = useState(true);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    MealDataService.getAllMeals().then((res) => {
      setMeals(res.data);
      setIsloading(false);
    });
  }, [meals]);

  if (isLoading) {
    return (
      <section>
        <p>loading....</p>
      </section>
    );
  }

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
