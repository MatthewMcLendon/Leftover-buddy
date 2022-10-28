import MealList from "../components/meals/MealList";
import NewMealForm from "../components/meals/NewMealForm";

function AllMealsPage() {
  return (
    <section>
      <h1>Meals:</h1>
      <MealList />
      <NewMealForm />
    </section>
  );
}

export default AllMealsPage;
