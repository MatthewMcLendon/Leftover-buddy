import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AllMealsPage from "./pages/AllMealsPage";
import AllIngredientsPage from "./pages/AllIngredientsPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/ui/Navbar";

import { MealProvider } from "./components/meals/MealProvider";
import { IngredientProvider } from "./components/ingredients/IngredientProvider";

function App() {
  return (
    <>
      <MealProvider>
        <IngredientProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/meals" element={<AllMealsPage />} />
              <Route path="/ingredients" element={<AllIngredientsPage />} />
            </Routes>
          </Router>
        </IngredientProvider>
      </MealProvider>
    </>
  );
}

export default App;
