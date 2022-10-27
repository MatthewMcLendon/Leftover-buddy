import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AllMealsPage from "./pages/AllMealsPage";
import AllIngredientsPage from "./pages/AllIngredientsPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/ui/Navbar";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/meals" element={<AllMealsPage />} />
          <Route path="/ingredients" element={<AllIngredientsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
